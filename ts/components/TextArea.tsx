import React, { useRef, TextareaHTMLAttributes } from 'react';
import { Label } from './Label';
import classNames from 'classnames';
import { randomString } from '../helpers/random_string';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Adds class names to the textarea. */
  className?: string;
  /** Sets an id for the textarea. */
  id?: string;
  /** Sets a label for the textarea. */
  label?: string;
  /** Adds class names to the label. */
  labelClassName?: string;
}

const TextArea = ({ id, className, label, labelClassName, ...rest }: TextAreaProps, ref) => {
  const uniqueIDRef = useRef<string>(randomString());

  return (
    <>
      {label ? (
        <Label labelClassName={labelClassName} htmlFor={id ? id : uniqueIDRef.current}>
          {label}
        </Label>
      ) : null}
      <textarea
        id={id ? id : uniqueIDRef.current}
        ref={ref}
        className={classNames(`h-textarea`, className)}
        {...rest}
      />
    </>
  );
};

const TextAreaRef = React.forwardRef(TextArea);

export { TextAreaRef as TextArea };
