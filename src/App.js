import logo from './logo.svg';
import './App.css';
import DemoClass from './Components/DemoClass';
import DemoFunction from './Components/DemoFunction';
import Home from './Home/Home';
import Databiding from './Databinding/Databiding';
import HandleEvent from './HandieEvent/HandleEvent';
import DemoState from './State/DemoState';
import StyleRender from './StyleRendeer/StyleRender';
import BaitapState from './State/BaitapState';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaitapRenderMap from './BaitapRenderMap/BaitapRenderMap';
import DemoProps from './Props/DemoProps';
import ProductList from './BaitapProps/ProductList';
import BaiTapXemChiTiet from './BaiTapXemChiTiet/BaiTapXemChiTiet';
import ExerciseCarStone from './ExeciseCarStone/ExerciseCarStone';
import REACTJS_BUOI1 from './REACTJS_BUOI1/Bai1';
import ShoesStore from './ShoesStore/ShoesStore';
import {Outlet,NavLink} from 'react-router-dom'
//component
function App() {
  return (
  //   <div className="App">
  //     <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
  //       <NavLink className="navbar-brand" to="/">Navbar</NavLink>
  //       <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  //       <div className="collapse navbar-collapse" id="collapsibleNavId">
  //         <ul className="navbar-nav me-auto mt-2 mt-lg-0">
  //           <li className="nav-item active">
  //             <NavLink className={({isActive})=>isActive ? 'bg-light text-white nav-link': 'nav-link'}
  //             style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} to="/home">Home 
  //             <span className="visually-hidden">(current)</span></NavLink>
  //           </li>
  //           <li className="nav-item">
  //            <NavLink className={({isActive})=>isActive ? 'bg-light text-white nav-link': 'nav-link'} to="/login">Login</NavLink>
  //           </li>
  //           <li className="nav-item">
  //            <NavLink className={({isActive})=>isActive ? 'bg-light text-white nav-link': 'nav-link'} to="/register">Register</NavLink>
  //           </li>
  //           <li className="nav-item">
  //            <NavLink className={({isActive})=>isActive ? 'bg-light text-white nav-link': 'nav-link'} to="/about">About</NavLink>
  //           </li>
  //           <li className="nav-item">
  //            <NavLink className={({isActive})=>isActive ? 'bg-light text-white nav-link': 'nav-link'} to="/contact">Contact</NavLink>
  //           </li>
  //           <li className="nav-item">
  //            <NavLink className={({isActive})=>isActive ? 'bg-light text-white nav-link': 'nav-link'} to="/ProductManagement">react form</NavLink>
  //           </li>
  //           {/* <li className="nav-item dropdown">
  //             <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
  //             <div className="dropdown-menu" aria-labelledby="dropdownId">
  //               <a className="dropdown-item" href="#">Action 1</a>
  //               <a className="dropdown-item" href="#">Action 2</a>
  //             </div>
  //           </li> */}
  //         </ul>
  //       <form className="d-flex my-2 my-lg-0">
  //       <input className="form-control me-sm-2" type="text" placeholder="Search" />
  //       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  //     </form>
  //   </div>
  // </nav>

      
  //     {/* noi dung thay doi boi path con */}
  //     <Outlet /> 
  //   </div>
  <div className='App'>
    <REACTJS_BUOI1></REACTJS_BUOI1>
  </div>
  );
}

export default App;
