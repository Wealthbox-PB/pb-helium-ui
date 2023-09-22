import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
interface RenderOpenerProps {
    ref: (node: ReferenceType) => void;
}
interface UpgradePopoverProps {
    renderOpener: (props: RenderOpenerProps) => JSX.Element;
    placement?: Placement;
    trigger?: `click` | `hover`;
    arrow?: boolean;
    open?: boolean;
    size?: `sm` | `md` | `lg` | `xl`;
    featureName?: string;
    upgradeHref: string;
    theme?: `light` | `dark` | `primary`;
}
declare const UpgradePopover: ({ renderOpener, featureName, upgradeHref, theme, ...props }: UpgradePopoverProps) => React.JSX.Element;
export { UpgradePopover };
