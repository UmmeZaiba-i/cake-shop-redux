import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksContainer from './components/HooksContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <ItemContainer/>
    <ItemContainer cake/>
     <CakeContainer/>
     <HooksContainer/>
     <IceCreamContainer/>
     <NewCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
