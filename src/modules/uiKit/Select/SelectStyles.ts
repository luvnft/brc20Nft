import {
  // fade,
  makeStyles, Theme } from '@material-ui/core';

export const useSelectStyles = makeStyles<Theme>(theme => ({
  menuPaper: {
    border: 'none',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 0,
    background: '#F3F5F7',
    height:'250px',
    color: theme.palette.common.black,
    '& .MuiListItem-button': {
      fontSize: 'inherit',

      '&:hover': {
        // background: fade(theme.palette.common.white, 0.04),
      },

      '&.Mui-selected': {
        // color: fade(theme.palette.common.white,.9),
        background: 'none',
        cursor: 'default',
      },
    },
  },
}));
