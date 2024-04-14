import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Buses from './components/Buses';
import Search from './components/Search';
import AddBus from './components/AddBus';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes >
   <Route path ='/' element={<Buses/>}/>
   <Route path ='/Search' element={<Search />} />
   <Route path ='/Add' element={<AddBus />} />
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
