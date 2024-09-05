import {
  autoUpdate,
  flip,
  limitShift,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useTypeahead,
  size,
} from '@floating-ui/react';
import type { Placement } from '@floating-ui/react';
import { useEffect, useRef, useState } from 'react';

interface SelectProps {
  /** Controls whether the dropdown should flip its orientation based on the available space in the browser
   * window. */
  flip?: boolean;
  /** Controls the height of the dropdown. */
  height?: string;
  /** Callback function when the query is changed. Used for searchable select. */
  handleQuery?: (query: string) => void;
  /** Controls the maximum height of the dropdown. */
  maxHeight?: number;
  /** Controls the minimum height of the dropdown. */
  minHeight?: number;
  /** Controls the placement of the dropdown. */
  placement?: Placement;
  /** Controls the width of the dropdown. "full" width makes the dropdown the same width as the opener
   * element. */
  width?: `auto` | `full` | number;
  /** Controls weather the focus will remain on the render opener, but allow arrow keys to navigate list. */
  virtualFocus?: boolean;
}

export function useSelect({
  flip: flipProp = true,
  height = `auto`,
  maxHeight,
  minHeight,
  handleQuery,
  placement = `bottom-start`,
  width = `auto`,
  virtualFocus = false,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const defaultSpacing = 4;
  const {
    x: xPosition,
    y: yPosition,
    refs: { setReference, setFloating },
    strategy,
    context,
  } = useFloating({
    open,
    whileElementsMounted: autoUpdate,
    placement: placement,
    strategy: `absolute`,
    middleware: [
      offset(defaultSpacing),
      flip({ mainAxis: flipProp }),
      shift({ padding: defaultSpacing, limiter: limitShift() }),
      size({
        apply({ availableHeight, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxHeight:
              height === `auto`
                ? maxHeight
                  ? `${Math.min(maxHeight, availableHeight) - defaultSpacing}px`
                  : `${availableHeight - defaultSpacing}px`
                : null,
            minHeight: height == `auto` ? (minHeight ? `${minHeight - defaultSpacing}px` : null) : null,
            height: height,
            width: width === `full` ? `${rects.reference.width}px` : width === `auto` ? null : width + `px`,
          });
        },
      }),
    ],
    onOpenChange(open: boolean) {
      setOpen(open);
      setActiveIndex(null);
    },
  });

  const elementsRef = useRef<HTMLButtonElement[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    onNavigate: setActiveIndex,
    loop: true,
    virtual: virtualFocus,
  });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: setActiveIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    useDismiss(context),
    useClick(context),
    listNavigation,
    ...(virtualFocus ? [] : [typeahead]),
  ]);

  useEffect(() => {
    if (!open) {
      handleQuery?.(``);
    }
  }, [open, handleQuery]);

  return {
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    labelsRef,
    elementsRef,
    xPosition,
    yPosition,
    setReference,
    setFloating,
    strategy,
    open,
    setOpen,
    activeIndex,
    setActiveIndex,
    context,
    searchInputRef,
  };
}
