import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { randomString } from '../helpers/random_string';
import { Transition } from 'react-transition-group';
import { Icons } from 'types/icons';

export interface AccordionPanelItem {
  /** Content for the panel's expanded state. */
  children: string | JSX.Element | JSX.Element[];
  /** Content for the label that shows when expanded or collapsed. */
  label: string | JSX.Element | JSX.Element[];
}

interface AccordionSharedProps {
  /** The icon name which is interpolated in the css className for the collapse icon. */
  collapseIconName?: Icons;
  /** The icon name which is interpolated in the css className for the expand icon. */
  expandIconName?: Icons;
  /** Sets the position of the icon. */
  iconPosition?: `left` | `right`;
  /** Adds a css className to the panel element. */
  panelClassName?: string;
}

interface AccordionPanelProps extends AccordionSharedProps {
  /** Controls whether the panel is open or not. */
  open: boolean;
  /** Callback function to toggle the open state of the panel. */
  toggleOpen: () => void;
  /** The panel item object which contains its data. */
  item: AccordionPanelItem;
}

const AccordionPanel = ({
  collapseIconName,
  expandIconName,
  iconPosition,
  item,
  open,
  panelClassName,
  toggleOpen,
}: AccordionPanelProps) => {
  const [contentHeight, setContentHeight] = useState<string>(`0px`);
  const transitionRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const uid = randomString(`h-accordion__panel-`);
  const transition = initAccordionCssTransitionStyles(contentHeight, 250);

  return (
    <div
      className={classNames(`h-accordion__panel`, panelClassName, { 'h-accordion__panel--open': open })}
      aria-expanded={open}
      data-testid="h-accordion__panel"
    >
      <button
        className="h-accordion__panel__cta d-flex align-items-center w-100"
        type="button"
        onClick={toggleOpen}
        aria-controls={uid}
        aria-label={open ? `Collapse` : `Expand`}
      >
        {iconPosition === `left` ? (
          <span
            className={classNames(`h-accordion__panel__icon me-2 flex-shrink-0`, {
              [`h-icon-${collapseIconName}`]: open,
              [`h-icon-${expandIconName}`]: !open,
            })}
            aria-hidden="true"
            data-testid="h-accordion__panel__icon-left"
          ></span>
        ) : null}
        <div className="h-accordion__panel__label flex-grow-1">{item.label}</div>
        {iconPosition === `right` ? (
          <span
            className={classNames(`h-accordion__panel__icon ms-2 flex-shrink-0`, {
              [`h-icon-${collapseIconName}`]: open,
              [`h-icon-${expandIconName}`]: !open,
            })}
            aria-hidden="true"
            data-testid="h-accordion__panel__icon-right"
          ></span>
        ) : null}
      </button>
      <Transition
        in={open}
        timeout={{ enter: transition.transitionDuration, exit: 0 }}
        nodeRef={transitionRef}
        onEnter={() => {
          if (childrenRef.current && open) {
            setContentHeight(childrenRef.current.scrollHeight + `px`);
          }
        }}
        onEntered={() => {
          setContentHeight(`auto`);
        }}
        onExit={() => {
          if (childrenRef.current) {
            setContentHeight(childrenRef.current.scrollHeight + `px`);
          }
        }}
        onExited={() => {
          setContentHeight(`0px`);
        }}
      >
        {(state) => (
          <div
            id={uid}
            className="h-accordion__panel__content h-overflow-hidden"
            style={{
              ...transition.defaultStyle,
              ...transition.transitionStyles[state],
            }}
            aria-hidden={!open}
            data-testid="h-accordion__panel__content"
            ref={transitionRef}
          >
            <div
              className="h-accordion__panel__children"
              ref={childrenRef}
              data-testid="h-accordion__panel__children"
            >
              {item.children}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

interface AccordionProps extends AccordionSharedProps {
  /** The items to be rendered as panels in the accordion. */
  items: AccordionPanelItem[];
  /** Controls whether or not multiple panels can be open at the same time. */
  allowMultipleOpen?: boolean;
  /** A css className for the accordion element. */
  className?: string;
  /** Controls whether or not the first panel should be open by default. */
  openFirstPanel?: boolean;
  /** Adds a css className with helium-ui "card" styling to the accordion element. */
  renderInCard?: boolean;
}

export const Accordion = ({
  allowMultipleOpen = false,
  className,
  collapseIconName = `minus`,
  expandIconName = `add`,
  iconPosition = `right`,
  items,
  openFirstPanel = false,
  panelClassName,
  renderInCard = true,
}: AccordionProps) => {
  const [openItemIndexes, setOpenItemIndexes] = useState<number[]>([]);

  useEffect(() => {
    if (openFirstPanel) {
      setOpenItemIndexes([0]);
    }
  }, [openFirstPanel]);

  const toggleOpen = (index: number) => {
    if (allowMultipleOpen) {
      setOpenItemIndexes((prevOpenItemIndexes) =>
        prevOpenItemIndexes.includes(index)
          ? prevOpenItemIndexes.filter((itemIndex) => itemIndex !== index)
          : [...prevOpenItemIndexes, index],
      );
    } else {
      setOpenItemIndexes((prevOpenItemIndexes) => (prevOpenItemIndexes.includes(index) ? [] : [index]));
    }
  };

  return (
    <div
      className={classNames(`h-accordion`, className, {
        'h-card': renderInCard,
      })}
      data-testid="h-accordion"
    >
      {items.map((item, index) => (
        <AccordionPanel
          key={index}
          collapseIconName={collapseIconName}
          expandIconName={expandIconName}
          iconPosition={iconPosition}
          item={item}
          panelClassName={panelClassName}
          open={openItemIndexes.includes(index)}
          toggleOpen={() => toggleOpen(index)}
        />
      ))}
    </div>
  );
};

const initAccordionCssTransitionStyles = (height: string, transitionDuration: number) => {
  return {
    transitionDuration,
    defaultStyle: {
      transition: `all ${transitionDuration}ms ease-in-out`,
      opacity: 0,
      height,
      visibility: `hidden`,
    },
    transitionStyles: {
      entering: { opacity: 1, visibility: `visible` },
      entered: { opacity: 1, visibility: `visible` },
      exiting: { opacity: 0 },
      exited: { opacity: 0, visibility: `hidden` },
    },
  };
};
