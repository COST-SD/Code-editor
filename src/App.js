import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import EditorPage from './pages/EditorPage'
function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path ='/' element= {<Home/>} ></Route>
              <Route path ='/editor/:roomId' element= {<EditorPage/>} ></Route>
              
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
