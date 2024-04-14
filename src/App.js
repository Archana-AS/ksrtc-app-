import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Buses from './components/Buses';
import Search from './components/Search';
import AddBus from './components/AddBus';
import Delete from './components/Delete';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes >
   <Route path ='/' element={<Buses/>}/>
   <Route path ='/Search' element={<Search />} />
   <Route path ='/Add' element={<AddBus />} />
   <Route path ='/Delete' element={<Delete/>} />
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
