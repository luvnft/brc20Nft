import classNames from 'classnames';
import { Box } from '@material-ui/core';
import { useStepTwoStyles } from './StepTwoStyle';
import { StepTitle } from '../StepTitle'
import { StepTwoCard } from '../StepTwoCard'
import stepTwoLine from 'assets/img/home/step2/Line.png'
import stepTwoLineMobile from 'assets/img/home/step2/LineMobile.png'
import stepTwoImage1 from 'assets/img/home/step2/image1.png'
import stepTwoImage2 from 'assets/img/home/step2/image2.png'
import stepTwoImage3 from 'assets/img/home/step2/image3.png'
import stepTwoquotLeft from 'assets/img/home/step2/quot-left.png'
import stepTwoquotRight from 'assets/img/home/step2/quot-right.png'
import stepTwoHeader from 'assets/img/home/step2/header.png'
import stepTwoLine2 from 'assets/img/home/step2/Line2.png'
import {useIsSMDown} from "modules/themes/useTheme";
export const StepTwo = () => {
  const classes = useStepTwoStyles();
  const mobile=useIsSMDown();
  return (
    <Box className={classNames(classes.steptwo)}>
      <Box className={classNames('steptwo-wrap')}>
      <Box className={classNames('steptwo-wrap-title')}>
        <Box className={classNames('steptwo-wrap-title-privacy')}>
          <StepTitle number='02' title='Privacy Focused' />
        </Box>
        <img src={ mobile ? stepTwoLineMobile : stepTwoLine } alt="stepTwoLine" />
      </Box>
      <Box className={classNames('steptwo-wrap-main')}>
        <Box className={classNames('steptwo-wrap-main-ONE')}>
          {
            mobile && <img src={stepTwoImage1} alt="stepOneRight" />
          }
          <StepTwoCard title="ONE" desc="X Terminals leverages Scroll's built-in zero-knowledge technology to empower developers to build privacy into the dApps." content="Though X Terminals, Scroll becomes the best place to launch a private DeFi dApp. Founders can create projects that are ready for real-world business use because they can offer confidential transfers that will protect IP, consumer data, and sensitive information. DeFi is growing up through X Terminals and Scroll."/>
          {
            !mobile && <img src={stepTwoImage1} alt="stepOneRight" />
          }
        </Box>
        <Box className={classNames('steptwo-wrap-main-evaluate')}>
          <Box className={classNames('steptwo-wrap-main-evaluate-left')}>
            <img className={classNames('quot-left')} src={ stepTwoquotLeft } alt="" />
            <img className={classNames('quot-right')} src={stepTwoquotRight} alt="" />
            <p>
              Our goal [through zk] is to ensure that everyone, from individual users to large institutions, can <span>transact securely</span> without exposing their financial history to the world.
            </p>
          </Box>
          <Box className={classNames('steptwo-wrap-main-evaluate-right')}>
            <p>Nocturne CEO</p>
            <Box className={classNames('header')}>
              <img src={stepTwoHeader} alt="header" />
              <span>Luke Tchang</span>
            </Box>
            <img className={classNames('stepTwoLine2')} src={stepTwoLine2} alt="stepTwoLine2" />
          </Box>
        </Box>
          <Box className={classNames('steptwo-wrap-main-TWOandThree')}>
          {
            !mobile && <Box className={classNames('steptwo-wrap-main-TWOandThree-img')}>
            <img src={stepTwoImage2} alt="stepTwoImage2" />  
          </Box>
          }
          <Box className={classNames('steptwo-wrap-main-TWOandThree-card')}>
            <StepTwoCard title="TWO" desc="Extending Privacy to Identity" content="As on-chain (and online) identities become increasingly important, privacy becomes more important as well. On X Terminals, you can build projects that will give users control of their identity and advanced protection against cyber attacks."/>
          </Box>
          {
            mobile && <Box className={classNames('steptwo-wrap-main-TWOandThree-img')}>
              <img src={stepTwoImage2} alt="stepTwoImage2" />  
            </Box>
          }
        </Box>
        <Box className={classNames('steptwo-wrap-main-TWOandThree')}>
          <Box className={classNames('steptwo-wrap-main-TWOandThree-card', 'paddingLeft')}>
            <StepTwoCard title="THREE" desc="Projects that launch on X Terminals will give users the ability to control who sees their data and assets." content="Blockchain is about more than tokens. Not your keys, not your data. Privacy prepares blockchains real-world use." />
          </Box>
          <Box className={classNames('steptwo-wrap-main-TWOandThree-img')}>
            <img src={stepTwoImage3} alt="stepTwoImage3" />  
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
  );
};
