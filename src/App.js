import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import Publishers from './components/Publishers';
import Advertising from './components/Advertising';

function App() {
  return (
    <>
       
  
<BrowserRouter>
<Navbar/>

<Routes>
<Route path='/' element={<Homepage/>}/>
  
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/publishers' element={<Publishers/>}/>

  <Route path='/advertising' element={<Advertising/>}/>

</Routes>



 

  
  
    </BrowserRouter>
    </>
    
  );
}

export default App;
