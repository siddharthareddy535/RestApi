import React from 'react';
import { Provider } from 'react-redux';
import CountryList from './components/CountryList';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
