// External Dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Internal Dependencies
import LoadingPage from './pages/LoadingPage';

// Local Variables
const LazyHomePageRoute = React.lazy(() =>
  import('./pages/LandingPage')
);

const HomePage = (props: any) => <LazyHomePageRoute {...props} />;

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/weddingPlannerSite">
        <React.Suspense fallback={<LoadingPage />}>
          <div>
            <Route path="/" exact component={HomePage} />
          </div>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
