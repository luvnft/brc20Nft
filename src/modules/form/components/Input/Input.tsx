import React, { ChangeEvent, useCallback } from 'react';

import { BaseTextFieldProps, TextField } from '@material-ui/core';
import { OutlinedTextFieldProps } from '@material-ui/core/TextField';


// @ts-ignore
interface IInputComponent extends OutlinedTextFieldProps {
  label?: string;
  size: BaseTextFieldProps['size'];
  placeholder?: string,
  onChange?: (value: string) => void,
}

const SHRINK = { shrink: true };
const Input = (props: IInputComponent) => {
  const onChange = useCallback((event: ChangeEvent<{ value: unknown }>) => {
    props && props.onChange && props.onChange(event.target.value as string)
  }, [props]);
  return <TextField margin='dense' InputLabelProps={SHRINK} {...props} onChange={onChange} />;
};

Input.defaultProps = {
  fullWidth: true,
  size: 'medium' as 'medium',
};

export { Input };
