import loadable, { LoadableComponent } from '@loadable/component';
import { QueryLoadingAbsolute } from 'modules/common/components/QueryLoading/QueryLoading';
import { RouteConfiguration } from 'modules/common/types/RouteConfiguration';
import { Route } from 'react-router-dom';
const PATH_HOME = '/home';
export const HomeRoutesConfig: { [key: string]: RouteConfiguration } = {
  Index: {
    path: PATH_HOME,
    generatePath: () => PATH_HOME,
  },
};

const LoadableHomeContainer: LoadableComponent<any> = loadable(
  async () =>
    import('./screens').then(module => module.Home),
  {
    fallback: <QueryLoadingAbsolute />,
  },
);


export function HomeRoutes() {
  return (
    <Route
      path={HomeRoutesConfig.Index.path}
      exact={true}
      component={LoadableHomeContainer}
    />
  );
}
