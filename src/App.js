import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import './App.scss';
import { Provider } from 'react-redux';
import Router from 'routers';
import createStore from './stores/createStore';

function App() {
  const { store, persistor } = createStore();
  return (
    <div className="App">
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router />
        </Provider>
      </PersistGate>
    </div>
  );
}

export default App;
