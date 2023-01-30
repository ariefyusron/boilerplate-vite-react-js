import React from 'react';
import { RouterProvider } from 'react-router-dom';

import SuspenseLoading from './components/suspense-loading';
import router from './router';

const App = () => (
  <SuspenseLoading>
    <RouterProvider router={router} />
  </SuspenseLoading>
);

export default App;
