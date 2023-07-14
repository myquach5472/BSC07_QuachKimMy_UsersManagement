import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import UserManager from './Template/UserManager';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserManager/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
