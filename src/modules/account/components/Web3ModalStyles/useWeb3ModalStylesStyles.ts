import { darken, makeStyles, Theme } from '@material-ui/core';
import arrow from 'modules/account/assets/arrow.svg';
import Close from "modules/account/assets/close.svg";

export const useWeb3ModalStylesStyles = makeStyles<Theme>(theme => ({
  '@global': {
    '#walletconnect-qrcode-modal': {
      overflow: 'auto',
    },
    '.web3modal-modal-hitbox': {
      '&::before': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '40px',
        height: '40px',
        fontSize: '24px',
        fontWeight: 700,
        fontFamily: '"Roboto Condensed",sans-serif',
        textAlign: 'left',
        content: `''`,
        border: `1px solid ${theme.palette.background.default}`,
        borderRadius: '50%',
        zIndex: 99,
        backgroundImage: `url('${Close}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginTop: '-195px',
        marginLeft: '255px',
        cursor: 'pointer',
      },
    },

    '#walletconnect-qrcode-modal .walletconnect-modal__base': {
      top: 'auto',
      transform: 'none',
      margin: '50px auto',
      maxWidth: '400px',
    },

    '.web3modal-modal-card': {
      marginTop: 44,
      maxWidth: '620px !important',
      // display: 'flex !important',
      padding: `${theme.spacing(15, 0, 10)} !important`,
      minHeight: '410px',
      backgroundColor:`${theme.palette.background.default}`,
      '&.bFOUPs':{
        backgroundColor:`${theme.palette.background.default}`,
      },
      '&::before': {
        content: `'Connect Wallet'`,
        position: 'absolute',
        top: 40,
        width: '280px',
        height: '40px',
        fontSize: '24px',
        fontWeight: 700,
        fontFamily: '"Roboto Condensed",sans-serif',
        paddingLeft: '40px',
        textAlign: 'left',
      },
    },


    '.web3modal-provider-wrapper': {
      padding: '12px 8px !important',
      border: 'none  !important'
    },

    '.web3modal-provider-container': {
      maxWidth: '380px !important',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '16px !important',
      flexDirection: 'row !important',
      padding: '16px 28px !important',
      backgroundImage: `url('${arrow}')`,
      backgroundPosition: 'right 30px center',
      backgroundRepeat: 'no-repeat',
      boxShadow: '118px 118px 100px rgba(0, 0, 0, 0.01), 52px 52px 74px rgba(0, 0, 0, 0.01), 13px 13px 41px rgba(0, 0, 0, 0.01), 0px 0px 0px rgba(0, 0, 0, 0.01)',
      '& img': {
        width: '36px !important',
        height: '36px !important',
      },

      '.web3modal-provider-wrapper:hover &&': {
        backgroundColor: darken(theme.palette.common.white, 0.05),
        boxShadow: '118px 118px 100px rgba(0, 0, 0, 0.01), 52px 52px 74px rgba(0, 0, 0, 0.01), 13px 13px 41px rgba(0, 0, 0, 0.01), 0px 0px 0px rgba(0, 0, 0, 0.01)',
      },
    },

    '.web3modal-provider-description': {
      display: 'none',
    },

    '.web3modal-provider-name': {
      fontSize: '18px !important',
      textAlign: 'left',
      paddingLeft: 16,
    },
    '.cWGmhP':{
      backgroundColor:'#262626 !important'
    },
    '.jRGREC':{
      color:`${theme.palette.grey[500]}!important`,
      marginTop:'0 !important'
    }
  },
}));
