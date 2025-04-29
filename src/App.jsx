
import { Provider } from 'react-redux'
import './App.css'
import Dashboard from './components/Dashboard'

import store from './utils/appStore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Provider store={store}>
      <div className="bg-gray-100 min-h-screen">
        <Navbar/>
        <Dashboard />
        <Footer/>
      </div>
    </Provider>
    </>
  );
}

export default App
