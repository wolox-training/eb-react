import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from 'components/App';
import 'config/i18n';
import 'scss/application.scss';

import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, refetchOnMount: false } }
});

const renderApp = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </QueryClientProvider>,
    document.getElementById('root')
  );
};

// Render once
renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
