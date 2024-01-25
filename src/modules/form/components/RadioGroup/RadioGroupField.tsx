import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControlLabel, Radio } from '@material-ui/core';
import { FieldRenderProps } from 'react-final-form';
import FormHelperText from '@material-ui/core/FormHelperText';

import { useStyles } from './RadioGroupFieldStyles';
import { hasError } from '../../utils/hasError';
import { getErrorText } from '../../utils/getErrorText';
import { tHTML } from 'modules/i18n/utils/intl';

interface IRadioGroupOption {
  id: string;
  name: string;
  description?: string;
}

interface IRadioGroupProps extends FieldRenderProps<HTMLFormElement> {
  items?: IRadioGroupOption[];
  defaultValue?: string;
  isSmall?: boolean;
}

export const RadioGroupField = ({
  input: { name, onChange, onFocus, onBlur, value },
  items = [],
  meta,
  defaultValue,
  isSmall,
}: IRadioGroupProps) => {
  const classes = useStyles({ isSmall });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as any);
  };

  return (
    <div className={classes.root}>
      <RadioGroup
        name={name}
        classes={
          { root: classes.roleRadioGroup }
        }
        onFocus={onFocus as any}
        onBlur={onBlur as any}
        onChange={handleChange}
        value={value}
        defaultValue={defaultValue}
      >
        {items.map(item => (
          <FormControlLabel
            key={item.id}
            classes={
              { root: classes.roleRadioControl }
            }
            value={item.id}
            label={tHTML(item.name)}
            control={
              <Radio color="primary" classes={
                { root: classes.roleRadio }
              } />
            }
          />
        ))}
      </RadioGroup>
      {hasError(meta) && (
        <FormHelperText error={true}>{getErrorText(meta)}</FormHelperText>
      )}
    </div>
  );
};
