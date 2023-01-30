import 'antd/dist/reset.css';

import { ConfigProvider } from 'antd';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import SuspenseLoading from './components/suspense-loading';
import router from './router';

const App = () => (
  <SuspenseLoading>
    <ConfigProvider theme={{}}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </SuspenseLoading>
);

export default App;
