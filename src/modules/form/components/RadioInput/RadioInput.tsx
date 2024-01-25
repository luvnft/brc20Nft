import React from 'react';

import {
  StyledComponentProps,
  Theme,
  withStyles,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { t } from 'modules/i18n/utils/intl';

const styles = (theme: Theme): StyleRules => ({
  column: {
    flexDirection: 'column',
    display: 'flex',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(1),
    cursor: 'pointer',
    color: theme.palette.grey['800'],
    height: 22,
    lineHeight: 22,
  },
  label: {},
});

export interface IRadioItem {
  id: number;
  value: string;
  disabled?: boolean;
}

export enum RadioInputVariant {
  column = 'column',
  row = 'row',
}
interface IRadioInputProps extends StyledComponentProps {
  onChange: (value: number) => void;
  values: IRadioItem[];
  name: string;
  current: number;
  renderComplimentComponent?: (
    id: number,
    checked: boolean,
  ) => React.ReactElement | null;
  variant?: RadioInputVariant;
}

const RadioInputComponent = ({
  classes = {},
  onChange,
  values,
  current,
  name,
  renderComplimentComponent,
  variant = RadioInputVariant.column,
}: IRadioInputProps) => {
  const handleChoice = (event: any) => {
    onChange(Number(event.target.value));
  };
  return (
    <RadioGroup
      aria-label="custom-val"
      name="custom-val"
      value={current}
      onChange={handleChoice}
      classes={
        {
        root: classes[variant],
      }
      }
    >
      {values.map(item => {
        return (
          <div key={item.id} className={classes.item}>
            <FormControlLabel
              name={name}
              value={item.id}
              control={<Radio disabled={item.disabled} color="primary" />}
              label={t(item.value)}
              classes={
                { label: classes.label }
              }
            />
            {renderComplimentComponent &&
              renderComplimentComponent(item.id, current === item.id)}
          </div>
        );
      })}
    </RadioGroup>
  );
};

const RadioInput = withStyles(styles)(RadioInputComponent);

export { RadioInput };
