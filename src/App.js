// import ExerciseCarStore from "./Props/ExerciseCarStore/ExerciseCarStore";
import { NavLink, Outlet } from 'react-router-dom'



//Component 
function App() {
  return (
    <div>
      {/* bs5-navbar-barckground*/}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className={({isActive})=>isActive ? 'bg-dark text-white nav-link' :'nav-link'} 
              style={({isActive})=>isActive ? {borderRadius:'5px'}:{}}to="/home">Home 
              <span className="visually-hidden">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? 'bg-dark text-white nav-link' :'nav-link'} to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? 'bg-dark text-white nav-link' :'nav-link'} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? 'bg-dark text-white nav-link' :'nav-link'} to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? 'bg-dark text-white nav-link' :'nav-link'} to="/register">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? 'bg-dark text-white nav-link' :'nav-link'} to="/reactform">reactform</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link' : 'nav-link' } to="/lifecycle">Lifecycle</NavLink>
            </li>
            {/* <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link' : 'nav-link' } to="/demoredux">DemoRedux</NavLink>
            </li> */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/demoredux">vi du tang giam so luong</NavLink>
                <NavLink className="dropdown-item" to="/democolorcar">changColo</NavLink>
                <NavLink className="dropdown-item" to="/qlsv">QLSV</NavLink>
                <NavLink className="dropdown-item" to="/giohang">DemoGioHang</NavLink>
                <NavLink className="dropdown-item" to="/demoburger">DemoBurger</NavLink>
                <NavLink className="dropdown-item" to="/baitapform">BaiTapForm</NavLink>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <Outlet></Outlet>
      <div style={{minHeight:800}}></div>
      <footer className='bg-dark text-white text-center p-5'>
        footer
      </footer>
    </div>
  );
}

export default App;