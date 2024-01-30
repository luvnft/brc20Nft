
import { makeStyles, Theme } from '@material-ui/core';
export const useStepTwoStyles = makeStyles<Theme>(theme => ({
  steptwo: {
    '& .steptwo-wrap-title': {
      padding: '0 15rem',
      height: '79.1rem',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        height: '47rem',
      },
      '& .steptwo-wrap-title-privacy': {
        width: '100%',
        position: 'relative',
        top: '41.6rem',
        [theme.breakpoints.down('sm')]: {
          top: '20rem',
        },
      },
      '& img': {
        width: 'calc(100% - 40rem)',
        position: 'absolute',
        top: '-4rem',
        left: '20rem',
        [theme.breakpoints.down('sm')]: {
          top: '-10rem',
          left: '0rem',
          width: '100%',
          height: '129%',
        },
      },
    },
    '& .steptwo-wrap-main': {
      padding: '0 15rem',
      [theme.breakpoints.down('sm')]: {
        padding: '0 4rem',
      },
      '& .steptwo-wrap-main-ONE': {
        display: 'flex',
        gap: '21.6rem',
        paddingLeft: '9rem',
        paddingRight: '16.4rem',
        '& img': {
          width: '50rem',
          [theme.breakpoints.down('sm')]: {
            marginLeft: '2.8rem'
          },
        },
        [theme.breakpoints.down('sm')]: {
          padding: '0 3rem',
          flexDirection: 'column',
          gap: '7rem',
          // alignItems: 'center',
        },
      },
      '& .steptwo-wrap-main-evaluate': {
        color: 'white',
        marginTop: '9.7rem',
        background: '#1A1B31',
        borderRadius: '4rem',
        display: 'flex',
        gap: '19.3rem',
        height: '46.9rem',
        padding: '9.3rem 12.6rem 8.6rem 17.1rem',
        [theme.breakpoints.down('sm')]: {
          height: 'auto',
          padding: '11rem 4rem 6rem 4rem',
          flexDirection: 'column',
          gap: '9.2rem',
          marginTop: '16rem'
        },
        '& .steptwo-wrap-main-evaluate-left': {
          width: '80rem',
          position: 'relative',
          [theme.breakpoints.down('sm')]: {
            width: 'auto',
          },
          '& p': {
            width: '100%',
            fontSize: '4.2rem',
            fontFamily: 'Gravity',
            fontWeight: '700',
            wordWrap: 'break-word',
            [theme.breakpoints.down('sm')]: {
              fontSize: '4.8rem',
            },
            '& span': {
              color: '#43DF7B',
            }
          },
          '& .quot-left': {
            width: '5.8rem',
            position: 'absolute',
            top: 0,
            left: '-11.1rem',
            [theme.breakpoints.down('sm')]: {
              left: '0rem',
              top: '-7rem',
            },
          },
          '& .quot-right': {
            width: '5.8rem',
            position: 'absolute',
            bottom: 0,
            right: '-7rem',
            [theme.breakpoints.down('sm')]: {
              right: '0rem',
              bottom: '-7rem',
            },
          }
        },
        '& .steptwo-wrap-main-evaluate-right': {
          width: '33rem',
          position: 'relative',
          '& p': {
            fontSize: '2.4rem',
            fontFamily: 'Gravity',
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom: '2.4rem',
          },
          '& .header': {
            borderRadius: '2rem', border: '1px white solid',
            display: 'flex',
            gap: '2.3rem',
            justifyContent: 'center',
            padding: '1.3rem 0',
            '& img': {
              height: '5rem',
              borderRadius: '50%',
            },
            '& span': {
              fontSize: '3.2rem',
              fontFamily: 'Gravity',
              fontWeight: '700',
              wordWrap: 'break-word'
            }
          },
          '& .stepTwoLine2': {
            height: '11.2rem',
            position: 'absolute',
            bottom: '0rem',
            left: '-3.3rem',
            [theme.breakpoints.down('sm')]: {
              left: '38.7rem',
              bottom: '2rem',
            },
          }
        }
      },
      '& .steptwo-wrap-main-TWOandThree': {
        display: 'flex',
        gap: '13rem',
        marginTop: '4rem',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          gap: '4rem',
          marginTop: '8rem',
          // alignItems: 'center',
        },
        '& .steptwo-wrap-main-TWOandThree-img': {
          width: '80rem',
          height: '48rem',
          background: '#1A1B31',
          borderRadius: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          [theme.breakpoints.down('sm')]: {
            width: 'auto',
            height: '40rem',
          },
          '& img': {
            height: '27rem',
          }
        },
        '& .steptwo-wrap-main-TWOandThree-card': {
          flex: '1',
          paddingTop: '8rem',
          [theme.breakpoints.down('sm')]: {
            padding: '8rem 3rem 0 3rem',
          },

          '&.paddingLeft': {
            paddingLeft: '9rem',
            [theme.breakpoints.down('sm')]: {
              padding: '8rem 3rem 0 3rem',
            },
          }
        }
      }
    }
  },
}));
