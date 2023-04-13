import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
