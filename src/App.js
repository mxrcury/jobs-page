import { Route, Routes } from "react-router";
import {DetailedPage, Home} from './pages';
import {Map} from './components';


const App = () => {
    
    return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/info/:id' element={<DetailedPage/>} />
        </Routes>
    </>
    );
}

export default App