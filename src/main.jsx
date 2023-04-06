import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Provider } from 'react-redux'
import store from './util/Store'
import './index.styl'
import Router from './util/Router'
import { history } from './util/Store'
import { ConnectedRouter } from 'connected-react-router'

const root = document.getElementById('root');
const CreateDOM = createRoot(root)



CreateDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>
)
