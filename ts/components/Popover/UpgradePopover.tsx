/* eslint-disable max-len */
import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
import { LinkButton } from 'components/LinkButton';
import { Popover } from './Popover';
import classNames from 'classnames';

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

const UpgradePopover = ({
  renderOpener,
  featureName = `this feature`,
  upgradeHref,
  theme = `light`,
  ...props
}: UpgradePopoverProps) => {
  return (
    <>
      <Popover renderOpener={renderOpener} theme={theme} bodyClassName="p-0" {...props}>
        <div className="d-flex p-3">
          <div className="col-auto me-2">
            <span
              className={classNames([
                `h-icon-arrow-up-circle--filled h-font-size-xl d-block h-line-height-1`,
                { [`h-color-text-white`]: theme === `primary` },
                { [`h-color-text-blue-500`]: theme !== `primary` },
              ])}
            ></span>
          </div>
          <div className="col">
            <h5 className="mb-0">Upgrade to unlock {featureName}</h5>
            <p className="mb-0">Get {featureName.toLowerCase()} and more.</p>
          </div>
        </div>
        <div className="h-popover-separator"></div>
        <div className="p-3">
          <LinkButton
            variant={theme === `primary` ? `secondary` : `primary`}
            className="d-block w-100"
            href={upgradeHref}
          >
            Get feature
          </LinkButton>
        </div>
      </Popover>
    </>
  );
};

export { UpgradePopover };
