import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import './App.scss';
import { Provider } from 'react-redux';
import Loading from 'commons/components/Loading';
import Router from 'routers';
import createStore from './stores/createStore';

function App() {
  const { store, persistor } = createStore();
  return (
    <div className="App">
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Provider store={store}>
          <Router />
        </Provider>
      </PersistGate>
    </div>
  );
}

export default App;
