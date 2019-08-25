// External Dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Internal Dependencies
import LoadingPage from './pages/LoadingPage';
import {ROUTES} from './constants/routes';
import NavBar from './components/NavBar';

// Local Variables
const LazyHomePageRoute = React.lazy(() =>
  import('./pages/LandingPage')
);
const LazyBlogRoute = React.lazy(() => import('./pages/Blog'))
const LazyClientPortalRoute = React.lazy(() => import ('./pages/ClientPortal'));

const HomePage = (props: any) => <LazyHomePageRoute {...props} />;
const BlogPage = (props: any) => <LazyBlogRoute {...props} />;
const ClientPortal = (props: any) => <LazyClientPortalRoute {...props} />;

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/weddingPlannerSite">
        <React.Suspense fallback={<LoadingPage />}>
          <div>
            <NavBar />
            <Route path="/" exact component={HomePage} />
            <Route path={ROUTES.BLOG} component={BlogPage} />
            <Route path={ROUTES.CLIENT_PORTAL} component={ClientPortal} />
          </div>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
