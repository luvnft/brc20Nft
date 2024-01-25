import { StyleRules, Theme } from '@material-ui/core/styles';

const checkboxFieldStyles = (theme: Theme): StyleRules => ({
  root: {
    color: '#2C83BD',
    '&$checked': {
      color: '#2C83BD',
    },
  },
  error: {
    marginTop: -5,
    marginBottom: 16,
  },
  checked: {},
  label: {
    color: theme.palette.grey[800],
    marginLeft: 4,
  },
  formControlLabel: {
    marginRight: 0,
  },
});

export { checkboxFieldStyles };
