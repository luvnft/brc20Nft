import { ThemeProvider } from '@material-ui/core';
import { useHomeStyle } from './useHomeStyle';
import { Box } from '@material-ui/core';
import { getTheme } from 'modules/common/utils/getTheme';
import { CurrentTheme } from 'modules/themes/types';
import classNames from 'classnames';
import { StepOne } from './components/StepOne'
import { StepTwo } from './components/StepTwo'
import { StepThree } from './components/StepThree'
import { StepFour } from './components/StepFour'
import bgBig from 'assets/img/home/bg-big.png'
import lauch from 'assets/img/home/lauch.png'
import earth from 'assets/img/home/earth.png'
import code from 'assets/img/home/code.png'
import xter from 'assets/img/home/x-ter.png'
import space from 'assets/img/home/space.png'
import bellowQuot from 'assets/img/home/bellow-quot.png'
import bellowLine from 'assets/img/home/bellow-line.png'
import footerLine from 'assets/img/home/footer-line.png'

export const Home = () => {
  const classes = useHomeStyle();
  return (
    <ThemeProvider theme={getTheme(CurrentTheme)}>
      <Box className={classNames(classes.root)}>
        {/* 上半部分 */}
        <Box className={classNames(classes.top)}>
          <img src={bgBig} alt="" className={classNames('top-bg')} />
          <Box  className={classNames('top-title')}>
            <p className={classNames('top-title-h2')}>Introducing</p>
            <p className={classNames('top-title-h3')}>X Terminals</p>
            <p className={classNames('top-title-h4')}>A Fairlaunch Platform on Scroll</p>
          </Box>
          <Box
            className={classNames('top-app')}
          >
           <img src={lauch} alt="" />
          </Box>
        </Box>
        {/* 中间部分 */}
        <Box className={classNames(classes.center)}>
          <Box className={classNames('center-left')}>
            <Box className={classNames('center-left-space')}>
              <img src={space} alt="space" />
              <div className={classNames('center-left-space-p')}>
                A space for community-driven stories and launches 
              </div>
            </Box>
            <Box className={classNames('center-left-code')}>
              <img src={code} alt="code" />
              <div className={classNames('center-left-code-p')}>
                Code is simply a way to write the reality that you want. Software and programming allow us to rewire how our world works. 
              </div>
            </Box>
          </Box>

          <Box className={classNames('center-center')}>
            <img src={xter} alt="xter" />
            <p className={classNames('center-center-title')}>
              X Terminal
            </p>
            <p className={classNames('margin')}>
              Give your project advanced capabilities through zero-knowledge technology. 
            </p>
            <p>
              For example, "Proof of Human" logins and confidential lotteries that are still verifiably random.
            </p>
          </Box>

          <Box className={classNames('center-right')}>
            <img src={earth} alt="earth" />
            <p>
              Unroll on Scroll: build using compliance tools, privacy, and scalability through X Terminals.
            </p>
          </Box>
        </Box>
        {/* 下半部分 */}
        <Box className={classNames(classes.bottom)}>
          <Box className={classNames('bottom-bellow')}>
            <Box className={classNames('bottom-bellow-title')}>
              <p>Below are a few benefits Scroll offers.</p>
              <img src={bellowQuot} alt="" className={classNames('bottom-bellow-quot')} />
            </Box>
            
          </Box>
          <Box className={classNames('bottom-bellow-line')}>
            <img src={bellowLine} alt="" />
          </Box>
        </Box>
        {/* step1 */}
        <StepOne/>
        {/* step2 */}
        <StepTwo/>
        {/* step3 */}
        <StepThree />
        {/* step4 */}
        <StepFour />
        {/* footer */}
        <Box className={classNames(classes.footer) }>
          <p>Through x terminal,</p>
          <p>you can scale Ethereum, protect privacy, and </p>
          <p>operate in compliance - <span>all on Scroll <img src={footerLine} alt=""/></span>.</p>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
