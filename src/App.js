import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksContainer from './components/HooksContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer/>
     <HooksContainer/>
     <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
