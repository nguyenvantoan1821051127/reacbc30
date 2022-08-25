import {combineReducers, createStore} from 'redux';
import { numberReducar } from './reducers/numberReducer';
import {imgCarReducer} from './reducers/imgCarReducer'
import { qlsvReducer } from "./reducers/qlsvReducer";
import { demoGioHangReducer } from './reducers/demoGioHangReducer';
import { demoBurgerReducer } from './reducers/demoBurgerReducer';
import { baitapFrom } from './reducers/qlsvForm';
//rootREducer:state tong cua ung dung
const rootReducer=combineReducers({
    number: numberReducar,
    imgCar:imgCarReducer,
    qlsvReducer,
    demoGioHangReducer:demoGioHangReducer,
    demoBurgerReducer,
    baitapFrom
});

export const store =createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
