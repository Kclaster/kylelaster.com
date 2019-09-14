// External Dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Internal Dependencies
import './App.css';
import Header from './components/Header';
import { ROUTES } from './constants/routes';
import LoadingPage from './pages/LoadingPage';

// Local Variables
const LazyHomePageRoute = React.lazy(() =>
  import('./pages/LandingPage')
);
const LazyBlogRoute = React.lazy(() => import('./pages/Blog'));
const LazyClientPortalRoute = React.lazy(() => import('./pages/ClientPortal'));
const LazyContactMeRoute = React.lazy(() => import('./pages/ContactMe'));

const HomePage = (props: any) => <LazyHomePageRoute {...props} />;
const BlogPage = (props: any) => <LazyBlogRoute {...props} />;
const ClientPortal = (props: any) => <LazyClientPortalRoute {...props} />;
const ContactMe = (props: any) => <LazyContactMeRoute {...props} />;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <React.Suspense fallback={<LoadingPage />}>
          <div>
            <Header />
            <Route path="/" exact component={HomePage} />
            <Route path={ROUTES.BLOG} component={BlogPage} />
            <Route path={ROUTES.CLIENT_PORTAL} component={ClientPortal} />
            <Route path={ROUTES.CONTACT_ME} component={ContactMe} />
          </div>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
