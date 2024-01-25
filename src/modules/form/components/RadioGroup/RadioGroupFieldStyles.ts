import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles<Theme, { isSmall?: boolean }>(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  roleRadioGroup: {
    flexDirection: 'row',
    display: 'flex',
  },
  roleRadioControl: {
    width: '100%',
    '& > span': {
      padding: props => (props.isSmall ? 6 : 9),
    },
  },
  roleRadio: {},
  roleName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.palette.grey[800],
  },
  roleDescription: {
    fontWeight: 'bold',
    fontSize: 14,
    color: theme.palette.grey[400],
  },
}));
