import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './papes/Home/Home'
import About from './papes/About/About'
import Contact from './papes/Contact/Contact'
import Login from './papes/Login/Login'
import Register from './papes/Register/Register'
import ProductManagement from './papes/ProductManagement/ProductManagement';
import ReactLifeCycle from './ReactLifeCycle/ReactLifeCycle';
import {Provider} from 'react-redux'
import {store} from './redux/configStore'
import DemoTangGiamSoLuong from './papes/DemoRedux/DemoTangGiamSoLuong/DemoTangGiamSoLuong';
import DemoChangecolo from './papes/DemoRedux/DemoChangecolo/DemoChangecolo';
import DemoQLSV from './papes/DemoRedux/DemoQLSV/DemoQLSV';
import DemoGioHang from './papes/DemoGioHang/DemoGioHang';
import DemoBurger from './papes/DemoBurger/DemoBurger';
import BaiTapForm from './papes/ReactForm/BaiTapForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<App />} >
                    <Route path=''element={<Home />}></Route>
                    <Route path='home'element={<Home />}></Route>
                    <Route path='about' element={<About />}></Route>
                    <Route path='contact' element={<Contact />}></Route>
                    <Route path='login' element={<Login />}></Route>
                    <Route path='register' element={<Register />}></Route>
                    <Route path='reactform'element={<ProductManagement />}></Route>
                    <Route path="lifecycle" element={<ReactLifeCycle />} > </Route>
                    <Route path='demoredux' element={<DemoTangGiamSoLuong />}></Route>
                    <Route path='democolorcar'element={<DemoChangecolo />}></Route> 
                    <Route path='qlsv' element={<DemoQLSV />}></Route>
                    <Route path='giohang' element={<DemoGioHang/>}></Route>
                    <Route path='demoburger'element={<DemoBurger></DemoBurger>}></Route>
                    <Route path='baitapform' element={<BaiTapForm></BaiTapForm>}></Route>
                    <Route path='*'element={<Navigate to="" />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();