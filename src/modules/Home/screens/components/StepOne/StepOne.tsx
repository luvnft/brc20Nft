import classNames from 'classnames';
import { Box } from '@material-ui/core';
import { useStepOneStyles } from './StepOneStyles';
import { StepTitle } from '../StepTitle'
import stepOneLeft from 'assets/img/home/step1/left.png'
import stepOneCenter from 'assets/img/home/step1/center.png'
import stepOneRight from 'assets/img/home/step1/right.png'
const stepOneText1 = `<div style="width: 100%"><span style="color: rgba(255, 255, 255, 0.50); font-size: 2.3rem; font-family: Gravity; font-weight: 700; line-height: 3.2rem; word-wrap: break-word">Writing code on Scroll lets you access the </span><span style="color: white; font-size: 2.3rem; font-family: Gravity; font-weight: 700; line-height: 3.2rem; word-wrap: break-word">advantages of zero-knowledge cryptography.</span></div>`
const stepOneText2 = `<div style="width: 100%"><span style="color: rgba(255, 255, 255, 0.50); font-size: 2.3rem; font-family: Gravity; font-weight: 700; line-height: 3.2rem; word-wrap: break-word">As a zkEVM, Scroll is a way to scale Ethereum. This means that dApps built on Scroll will have the security of Ethereum but with scalability to create a system of finance available to everyone. Scroll was created with a focus on</span><span style="color: white; font-size: 2.3rem; font-family: Gravity; font-weight: 400; line-height: 3.2rem; word-wrap: break-word"> </span><span style="color: white; font-size: 2.3rem; font-family: Gravity; font-weight: 700; line-height: 3.2rem; word-wrap: break-word">Web3 payments & derivatives & RWAs &  money-streaming services.</span><span style="color: white; font-size: 2.3rem; font-family: Gravity; font-weight: 400; line-height: 3.2rem; word-wrap: break-word"> </span><span style="color: rgba(255, 255, 255, 0.50); font-size: 2.3rem; font-family: Gravity; font-weight: 700; line-height: 3.2rem; word-wrap: break-word">You can build all of these on Scroll through X Terminals. </span></div>`
const stepOneText3 = `<div style="width: 100%"><span style="color: rgba(255, 255, 255, 0.50); font-size: 2.3rem; font-family: Gravity; font-weight: 700; line-height: 3.2rem; word-wrap: break-word">Launching on X Terminals means your project will </span><span style="color: white; font-size: 2.3rem; font-family: Gravity; font-weight: 700; line-height: 3.2rem; word-wrap: break-word">have access to the largest DeFi ecosystem in Web3 </span><span style="color: rgba(255, 255, 255, 0.50); font-size: 2.3rem; font-family: Gravity; font-weight: 700; line-height: 3.2rem; word-wrap: break-word">and arguably the most mature constellation of </span><span style="color: white; font-size: 2.3rem; font-family: Gravity; font-weight: 700; line-height: 3.2rem; word-wrap: break-word">dApps available.</span></div>`
export const StepOne = () => {
  const classes = useStepOneStyles();
  return (
    <Box className={classNames(classes.stepOne)}>
      <Box className={classNames('stepOne-wrap')}>
        <StepTitle number='01' title='EVM Compatibility' />
        <Box className={classNames('stepOne-wrap-card')}>
          <Box className={classNames('stepOne-wrap-card-left')}>
            <img src={stepOneLeft} alt="stepOneLeft" />
            <p dangerouslySetInnerHTML={{__html: stepOneText1}}></p>
          </Box>
          <Box className={classNames('stepOne-wrap-card-center')}>
            <img src={stepOneCenter} alt="stepOneCenter" />
            <p dangerouslySetInnerHTML={{__html: stepOneText2}}></p>
          </Box>
          <Box className={classNames('stepOne-wrap-card-right')}>
            <img src={stepOneRight} alt="stepOneRight" />
            <p dangerouslySetInnerHTML={{__html: stepOneText3}}></p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
