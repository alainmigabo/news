import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Homepage } from "./pages/homepage";
import { OurProperties } from "./pages/OurProperties";
import { About } from "./pages/about";
import { Communities } from "./pages/communities";
import { Contact } from "./pages/contact";
import { MlsSearch } from "./pages/mlssearch";
import { Services } from "./pages/services";
import { News } from "./pages/news";
import {More} from "./pages/moreonblog";

function App(){
  return(
    <div>
      <Routes>
        <Route path='/' element = {<Homepage/>} />
        <Route path='OurProperties' element = {<OurProperties/>} />
        <Route path='mlssearch' element = {<MlsSearch/>} />
        <Route path='communities' element = {<Communities/>} />
        <Route path='services' element = {<Services/>} />
        <Route path='about' element = {<About/>} />
        <Route path='contact' element = {<Contact/>} />
        <Route path='news' element = {<News/>} />
        <Route path='/news/blog' element= {<More/>} />
      </Routes>
    </div>
  );
}

export default App;
