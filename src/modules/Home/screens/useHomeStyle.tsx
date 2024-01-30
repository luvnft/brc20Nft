import { makeStyles, Theme } from '@material-ui/core';
interface cardBackgroundThemeparams {
  from: string;
  to: string;
  x: string;
  y: string
}
const cardBackgroundTheme = ({ from, to, x, y}: cardBackgroundThemeparams) => {
  return {
    background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`,
    boxShadow: `${x} ${y} 0px rgba(0, 0, 0, 0.25) inset`,
    borderRadius: '4rem',
 }
}
export const useHomeStyle = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    paddingTop: "12rem",
    boxSizing: 'border-box',
    paddingBottom: '20.9rem',
    background: '#121323',
  },
  top: {
    height: '87.5rem',
    position: 'relative',
    paddingLeft: '17.8rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0',
      height: 'auto',
    },
    '& .top-bg': {
      height: '62.5rem',
      position: 'absolute',
      bottom: '12.6rem',
      right: '0',
      [theme.breakpoints.down('sm')]: {
        bottom: '0',
        position: 'relative',
        height: '62.6rem',
        left: '-16.5rem',
      },
    },
    '& .top-title': {
      paddingTop: '2rem',
      paddingLeft: '7rem',
      '& .top-title-h2': {
        color: 'white',
        fontSize: '6rem',
        fontFamily: 'eryaxindahei',
        fontWeight: '400',
        wordWrap: 'break-word',
        lineHeight: '9rem'
      },
      '& .top-title-h3': {
        color: 'white',
        fontSize: '10rem',
        fontFamily: 'eryaxindahei',
        fontWeight: '400',
        wordWrap: 'break-word',
        lineHeight: '12.6rem',
      },
      '& .top-title-h4': {
        color: 'white',
        fontSize: '4rem',
        fontFamily: 'Gravity',
        fontWeight: '700',
        wordWrap: 'break-word',
        marginTop: '4rem',
      }
    },
    '& .top-app': {
      padding: '0 4rem 0 0.8rem',
      display: 'inline-flex',
      gap: '3rem',
      background: '#994AFF',
      borderRadius: '4rem',
      marginTop: '8rem',
      height: '6.4rem',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '7rem',
        height: '8rem',
      },
      '& img': {
        height: '4.8rem',
        [theme.breakpoints.down('sm')]: {
          height: '6.4rem',
        },
       
      },
      '& p': {
        color: 'white',
        fontSize: '2.4rem',
        fontFamily: 'Gravity',
        fontWeight: '700',
        wordWrap: 'break-word',
        [theme.breakpoints.down('sm')]: {
          fontSize: '3.2rem',
        },
      }
    },
  },
  center: {
    position: 'relative',
    padding: '0 15rem',
    display: 'flex',
    gap: '2rem',
    lineHeight: '3.7rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0 4rem',
      gap: '2rem',
      marginTop: '16.8rem',
    },
    '& .center-left': {
      width: '58rem',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      '& .center-left-space': {
        width: '100%',
        height: '24rem',
        ...cardBackgroundTheme({ from: '#CFEF54', to: '#CFEF54', x: '-0.4rem', y: '-0.6rem' }),
        boxSizing: 'border-box',
        padding: '2.9rem 8rem',
        [theme.breakpoints.down('sm')]: {
          padding: '4rem 4rem 4.4rem 4rem',
          height: 'auto',
        },
        '& img': {
          height: '8rem',
          width: '8rem',
          marginBottom: '1rem',
          [theme.breakpoints.down('sm')]: {
            marginBottom: '2rem',
          },
        },
        '& .center-left-space-p': {
          color: '#121323',
          fontSize: '3.2rem',
          fontFamily: 'Gravity',
          fontWeight: '400',
          wordWrap: 'break-word'
        },
      },
      '& .center-left-code': {
        marginTop: '2rem',
        width: '100%',
        height: '42rem',
        ...cardBackgroundTheme({ from: '#4B21ED', to: '#913BFF', x: '-0.4rem', y: '-1rem' }),
        boxSizing: 'border-box',
        padding: '5.6rem 8rem',
        [theme.breakpoints.down('sm')]: {
          padding: '4rem 4rem 4.4rem 4rem',
          height: 'auto',
        },
        '& img': {
          height: '8rem',
          width: '8rem',
          marginBottom: '2.7rem',
        },
        '& .center-left-code-p': {
          color: 'white',
          fontSize: '3.2rem',
          fontFamily: 'Gravity',
          fontWeight: '400',
          wordWrap: 'break-word'
        },
      }
    },
    '& .center-center': {
      flex: 1,
      height: '68rem',
      ...cardBackgroundTheme({ from: '#994AFF', to: '#E64AFF', x: '-0.4rem', y: '-1rem' }),
      boxSizing: 'border-box',
      padding: '4.9rem 6rem',
      [theme.breakpoints.down('sm')]: {
        padding: '4rem 4rem 4.4rem 4rem',
        height: 'auto',
      },
      '& img': {
        height: '12rem',
        width: '12rem',
        marginBottom: '5rem',
        [theme.breakpoints.down('sm')]: {
          height: '8rem',
          width: '8rem',
          marginBottom: '2rem',
        },
      },
      '& .center-center-title': {
        color: 'white',
        fontSize: '5.6rem',
        fontFamily: 'Gravity',
        fontWeight: '400',
        wordWrap: 'break-word',
        lineHeight: '5.5rem',

      },
      '& p': {
        color: 'white',
        fontSize: '3.2rem',
        fontFamily: 'Gravity',
        fontWeight: '400',
        wordWrap: 'break-word',
        [theme.breakpoints.down('sm')]: {
          fontSize: '3.2rem',
        },
        '&.margin': {
          marginBottom: '3rem',
        }
      },
    },
    '& .center-right': {
      flex: 1,
      height: '68rem',
      ...cardBackgroundTheme({ from: '#79F4A5', to: '#54F9E5', x: '-0.4rem', y: '-1rem' }),
      boxSizing: 'border-box',
      padding: '4.9rem 4.6rem 0 5.4rem',
      [theme.breakpoints.down('sm')]: {
        padding: '4rem 4rem 4.4rem 4rem',
        height: 'auto',
      },
      '& img': {
        height: '12rem',
        width: '12rem',
        marginBottom: '4rem',
        [theme.breakpoints.down('sm')]: {
          height: '8rem',
          width: '8rem',
          marginBottom: '2rem',
        },
      },
      '& p': {
        color: '#121323',
        fontSize: '4.8rem',
        fontFamily: 'Gravity',
        fontWeight: '400',
        wordWrap: 'break-word',
        lineHeight: '5.8rem',
        [theme.breakpoints.down('sm')]: {
          fontSize: '3.2rem',
          lineHeight: '3.8rem',
        },
      },
    },
  },
  bottom: {
    height: '65.6rem',
    paddingTop: '12.4rem',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      height: '49rem',
      paddingTop: '12rem',
    },
    '& .bottom-bellow': {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      '& .bottom-bellow-title': {
        width: '85rem',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
          width: '62rem',
        },
        '& p': {
          wordSpacing: 'wrap',
          color: 'white',
          fontSize: '6rem',
          fontFamily: 'eryaxindahei',
          fontWeight: '400',
          lineHeight: '8rem',
          wordWrap: 'break-word',
          textAlign: 'center',
          [theme.breakpoints.down('sm')]: {
            fontSize: '4.4rem',
          },
        },
        '& .bottom-bellow-quot': {
          position: 'absolute',
          top: '0rem',
          right: '5rem',
          width: '2.8rem',
          height: '2.9rem',
          [theme.breakpoints.down('sm')]: {
            right: '1rem',
          },
        }
      },
    },
    '& .bottom-bellow-line': {
      position: 'absolute',
      bottom: '-1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      [theme.breakpoints.down('sm')]: {
        bottom: '-4rem',
      },
      '& img': {
        height: '22.4rem',
      }
    },
  },
  footer: {
    textAlign: 'center',
    marginTop: '9rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20rem',
      padding: '0 5.2rem 0 5.6rem'
    },
    '& p': {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '6rem',
      fontFamily: 'eryaxindahei',
      fontWeight: '400',
      lineHeight: '8rem',
      wordWrap: 'break-word',
      [theme.breakpoints.down('sm')]: {
        fontSize: '5.2rem',
      },
      '& span': {
        position: 'relative',
        color: 'white',
        fontSize: '6rem',
        fontFamily: 'eryaxindahei',
        '& img': {
          height: '1.82rem',
          width: '32rem',
          position: 'absolute',
          bottom: '-1rem',
          right: '2rem',
          [theme.breakpoints.down('sm')]: {
            height: '2.82rem',
            width: '34rem',
            position: 'absolute',
            bottom: '-3rem',
            right: '2rem',
          },
        }
      }
    }
  }
}));
