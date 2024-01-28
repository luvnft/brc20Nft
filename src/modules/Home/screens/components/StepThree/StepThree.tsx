import classNames from 'classnames';
import { Box } from '@material-ui/core';
import { useStepThreeStyles } from './StepThreeStyle';
import { StepTitle } from '../StepTitle'
import { StepThreeCard } from '../StepThreeCard'
import stepThreeStar from 'assets/img/home/step3/star.png'
import stepThreeImage1 from 'assets/img/home/step3/image1.png'
import stepThreeImage2 from 'assets/img/home/step3/image2.png'
import stepThreeImage3 from 'assets/img/home/step3/image3.png'
const stepThreeText1 = `<div style="width: 100%"><span style="color: rgba(255, 255, 255, 0.50); font-size: 2.4rem; font-family: Gravity; font-weight: 700; word-wrap: break-word">Beyond privacy<br/></span><span style="color: white; font-size: 3.2rem; font-family: Gravity; font-weight: 700; word-wrap: break-word">X Terminals will offer compliance tools</span><span style="color: white; font-size: 2.4rem; font-family: Gravity; font-weight: 700; word-wrap: break-word">, <br/></span><span style="color: rgba(255, 255, 255, 0.50); font-size: 2.4rem; font-family: Gravity; font-weight: 700; word-wrap: break-word">Adoption is impossible without compliance.X Terminals prepares your project for adoption through compliance tools.</span></div>`
const stepThreeText2 = `<div style="width: 100%; color: white; font-size: 2.4rem; font-family: Gravity; font-weight: 700; line-height: 3.2rem; word-wrap: break-word">X Terminal incorporates “deposit managers” and “screeners,” which are designed to find and stop illegal fund transfers. <br/>Not only will projects have the ability to protect user data in compliance with consumer protection laws, <br/>but they’ll also be able to abide by AML regulations or other laws.</div>`
const stepThreeText3 = `<div style="width: 100%; color: white; font-size: 2.4rem; font-family: Gravity; font-weight: 700; line-height: 3.2rem; word-wrap: break-word">X Terminals allows projects to seperate asset storage and execution through Teller and Handler contracts to make reporting more simple. <br/> <br/><br/>Through its built-in tools, X Terminals gives Scroll projects the ability to rewrite how global finance works.</div>`
export const StepThree = () => {
  const classes = useStepThreeStyles();
  return (
    <Box className={classNames(classes.stepThree)}>
    <Box className={classNames('stepThree-wrap')}>
      <Box className={classNames('stepThree-wrap-title')}>
        <StepTitle number='03' title='Compliance & Security' />
        <img src={ stepThreeStar } alt="stepThreeStar"/>
      </Box>
      <Box className={classNames('stepThree-wrap-cardList')}>
        <Box className={classNames('stepThree-wrap-cardList-left')}>
          <StepThreeCard icon={ stepThreeImage1 } indexText='01' background="linear-gradient(93deg, #70DD6E 0%, #935EEB 40%, #994AFF 100%)">
            <Box className={classNames('left-desc')}> <p dangerouslySetInnerHTML={{__html: stepThreeText1}}></p> </Box>
          </StepThreeCard>
          <StepThreeCard icon={ stepThreeImage2 } indexText='02' background="linear-gradient(93deg, #70DD6E 0%, #935EEB 40%, #994AFF 100%)">
            <Box className={classNames('left-desc')}> <p dangerouslySetInnerHTML={{__html: stepThreeText2}}></p> </Box>
          </StepThreeCard>
        </Box>
        <Box className={classNames('stepThree-wrap-cardList-right')}>
          <StepThreeCard icon={ stepThreeImage3 } indexText='03' background="linear-gradient(77deg, #994CFF 0%, #4A7DFF 100%)" height="100%">
            <Box className={classNames('right-desc')}> <p dangerouslySetInnerHTML={{__html: stepThreeText3}}></p> </Box>
          </StepThreeCard>
        </Box>
      </Box>
    </Box>
  </Box>
  );
};
