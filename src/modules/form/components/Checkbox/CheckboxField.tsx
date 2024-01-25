import React, { ReactNode } from 'react';
import { FieldRenderProps } from 'react-final-form';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Theme,
  Typography,
} from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import { checkboxFieldStyles } from './CheckboxFieldStyles';

import { makeStyles } from '@material-ui/styles';
import { hasError } from '../../utils/hasError';
import { getErrorText } from '../../utils/getErrorText';

export function omit<T extends object, K extends keyof T>(
  target: T,
  ...omitKeys: K[]
): Omit<T, K> {
  return (Object.keys(target) as K[]).reduce((res, key) => {
    if (!omitKeys.includes(key)) {
      res[key] = target[key];
    }
    return res;
  }, {} as any);
}
const useStyles = makeStyles<Theme, {}>(checkboxFieldStyles);

interface ISwitchFieldProps extends FieldRenderProps<HTMLElement> {
  label: string;
  labelPlacement: string;
  children?: ReactNode;
  showErrorText?: boolean;
}

const CheckboxFieldComponent = ({
  label,
  labelPlacement,
  input,
  meta,
  children,
  showErrorText = true,
  ...rest
}: ISwitchFieldProps & any) => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <FormControlLabel
        classes={{
          root: classes.formControlLabel,
        }
        }
        label={
          children || <Typography className={classes.label}>{label}</Typography>
        }
        control={
          <FormControl error={!!meta.error}>
            <Checkbox
              color="default"
              classes={{
                root: classes.root,
              }
              }
              {...rest}
              {...omit(input, 'value')}
            />
          </FormControl>
        }
      />
      {showErrorText && hasError(meta) && (
        <FormHelperText error={true} classes={{ root: classes.error }
        }>
          {getErrorText(meta)}
        </FormHelperText>
      )}
    </div>
  );
};

const CheckboxField = CheckboxFieldComponent;

export { CheckboxField };
