import { Switch, Redirect, HashRouter } from 'react-router-dom';
import { MainLayout } from 'modules/layout/components/MainLayout';
import { PageNotFound } from 'modules/router/components/PageNotFound';
import { PageComingSoon } from 'modules/router/components/PageComingSoon';
import { CurrentTheme } from 'modules/themes/types';
import { HomeRoutes, HomeRoutesConfig } from 'modules/Home/Routes';
import { AnimateSwitch } from './modules/common/components/AnimateSwitch';
import { ProgressBar } from './modules/common/components/ProgressBar';

export function Routes() {
  return (
    <MainLayout headerTheme={CurrentTheme}>
      <AnimateSwitch>
        <HashRouter>
          <ProgressBar
            exact
            path='/'
            render={() => <Redirect to={HomeRoutesConfig.Index.path} />}
          />
          <ProgressBar
            exact
            path={HomeRoutesConfig.Index.path}
            render={() => (
              <HomeRoutes />
            )}
          />
          <ProgressBar
            exact
            path={'/coming_soon'}
            render={() => (
              <PageComingSoon />
            )}
          />

          <ProgressBar
            render={() => (
              <PageNotFound />
            )}
          />
        </HashRouter>
      </AnimateSwitch>

    </MainLayout>
  );
}
