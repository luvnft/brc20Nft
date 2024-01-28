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
    paddingTop: "7rem",
    boxSizing: 'border-box',
    paddingBottom: '20.9rem',
    background: '#121323',
  },
  top: {
    height: '87.5rem',
    position: 'relative',
    paddingLeft: '17.8rem',
    '& .top-bg': {
      height: '62.5rem',
      position: 'absolute',
      bottom: '12.6rem',
      right: '0'
    },
    '& .top-title': {
      paddingTop: '25.1rem',
      '& .top-title-h2': {
        color: 'white',
        fontSize: '10rem',
        fontFamily: 'eryaxindahei',
        fontWeight: '400',
        wordWrap: 'break-word',
        lineHeight: '9rem'
      },
      '& .top-title-h3': {
        color: 'white',
        fontSize: '14rem',
        fontFamily: 'eryaxindahei',
        fontWeight: '400',
        wordWrap: 'break-word',
        lineHeight: '12.6rem',
      },
      '& .top-title-h4': {
        color: 'white',
        fontSize: '5rem',
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
      '& img': {
        height: '4.8rem',
       
      },
      '& p': {
        color: 'white',
        fontSize: '2.4rem',
        fontFamily: 'Gravity',
        fontWeight: '700',
        wordWrap: 'break-word',
      }
    },
  },
  center: {
    position: 'relative',
    padding: '0 15rem',
    display: 'flex',
    gap: '2rem',
    lineHeight: '3.7rem',
    '& .center-left': {
      width: '58rem',
      '& .center-left-space': {
        width: '100%',
        height: '24rem',
        ...cardBackgroundTheme({ from: '#CFEF54', to: '#CFEF54', x: '-0.4rem', y: '0.6rem' }),
        boxSizing: 'border-box',
        padding: '2.9rem 8rem',
        '& img': {
          height: '8rem',
          width: '8rem',
          marginBottom: '1rem',
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
      '& img': {
        height: '12rem',
        width: '12rem',
        marginBottom: '5rem',
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
        fontSize: '3rem',
        fontFamily: 'Gravity',
        fontWeight: '400',
        wordWrap: 'break-word',
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
      '& img': {
        height: '12rem',
        width: '12rem',
        marginBottom: '4rem',
      },
      '& p': {
        color: '#121323',
        fontSize: '4.8rem',
        fontFamily: 'Gravity',
        fontWeight: '400',
        wordWrap: 'break-word',
        lineHeight: '5.8rem',
      },
    },
  },
  bottom: {
    height: '65.6rem',
    paddingTop: '12.4rem',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    '& .bottom-bellow': {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      '& .bottom-bellow-title': {
        width: '85rem',
        position: 'relative',
        '& p': {
          wordSpacing: 'wrap',
          color: 'white',
          fontSize: '6rem',
          fontFamily: 'eryaxindahei',
          fontWeight: '400',
          lineHeight: '8rem',
          wordWrap: 'break-word',
          textAlign: 'center',
        },
        '& .bottom-bellow-quot': {
          position: 'absolute',
          top: '0rem',
          right: '5rem',
          width: '2.8rem',
          height: '2.9rem',

        }
      },
    },
    '& .bottom-bellow-line': {
      position: 'absolute',
      bottom: '-1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      '& img': {
        height: '22.4rem',
      }
    },
  },
  footer: {
    textAlign: 'center',
    marginTop: '9rem',
    '& p': {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '6rem',
      fontFamily: 'eryaxindahei',
      fontWeight: '400',
      lineHeight: '8rem',
      wordWrap: 'break-word',
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
        }
      }
    }
  }
}));
