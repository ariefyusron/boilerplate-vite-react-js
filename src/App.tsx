import 'antd/dist/reset.css';

import { ConfigProvider } from 'antd';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import SuspenseLoading from './components/suspense-loading';
import router from './router';

const App = () => (
  <SuspenseLoading>
    <ConfigProvider theme={{}}>
      <ThemeProvider theme={{}}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ConfigProvider>
  </SuspenseLoading>
);

export default App;
