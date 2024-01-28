import classNames from 'classnames';
import { Box } from '@material-ui/core';
import { useStepFourStyles } from './StepFourStyle';
import { StepTitle } from '../StepTitle'
import { StepFourCard } from '../StepFourCard'
import stepFourStar from 'assets/img/home/step4/star.png'
import StepFourImage1 from 'assets/img/home/step4/image1.png'
import StepFourImage2 from 'assets/img/home/step4/image2.png'
import StepFourImage3 from 'assets/img/home/step4/image3.png'
export const StepFour = () => {
  const classes = useStepFourStyles();
  return (
    <Box className={classNames(classes.stepFour)}>
      <Box className={classNames('stepFour-wrap')}>
        <Box className={classNames('stepFour-wrap-title')}>
          <StepTitle number='04' title='X Terminals: <br/> Scaling Ethereum Through ZK' />
          <img src={ stepFourStar } alt="stepFourStar"/>
        </Box>
        <Box className={classNames('stepFour-wrap-cardList')}>
          <StepFourCard img={StepFourImage1} desc="Scroll's powerful zkEVM means that projects on X Terminals offer high-throughput and low slippage - perfect for DeFi."/>
          <StepFourCard img={StepFourImage2} desc="As a fair launch platform, X Terminals is perfect for community-focused projects and offers unique tools like KOL networks, Business Development support, and cutting-edge technical capabilities."/>
          <StepFourCard img={StepFourImage3} desc="Zk means that X Terminals also offers projects privacy and compliance at the same time. This prepares DeFi for real-world use, giving them the ability to obey laws in local jurisdictions.Shape the future, not just a market cycle."/>
        </Box>
      </Box>
    </Box>
  );
};
