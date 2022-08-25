
const stataDefault={
    arrSinhVien:[{id:1,name:'Nguyen van a',email:'nguyenvana@gmail.com',phone:'7483927432'},
            {id:2,name:'Nguyen van a',email:'nguyenvana@gmail.com',phone:'7483927432'}],
    sinhVien:{id:'',name:'',email:'',phone:''},
    errors:{id:'',name:'',email:'',phone:''},
    updateSinhVien:{id:'',name:'',email:'',phone:''},
}
export const baitapFrom=(state=stataDefault,action)=>{
    switch(action.type){
        case 'HANDLE_CHANGE_INPUT':{
            let{id,value}=action;
            state.sinhVien[id]=value;
            state.sinhVien={...state.sinhVien}
            return {...state}
        }
        case 'THEM_SINH_VIEN':{
            //buoc1: lay du lieu ti actoin ra
            let {sinhVien}=action;
            //buoc2: clone state (object,array)
            let arrSinhVienUpdate=[...state.arrSinhVien];
            arrSinhVienUpdate.push(sinhVien);
            //buoc3: cap nhat lai state
            state.arrSinhVien=arrSinhVienUpdate;
            return {...state}
        }
        case 'XOA_SINH_VIEN':{
            //b1:lay gio tri tu action gui len
            let{maSVClick}=action.payload;
            //b2:xu ly clone arr hoac object ra 1 bien
            let sinhVienUpdate=[...state.arrSinhVien];
            sinhVienUpdate=sinhVienUpdate.filter(sv=>sv.id !==maSVClick);
            //b3:cap nhat lai state
            // state.gioHang=gioHangUpdate
            return {...state,arrSinhVien:sinhVienUpdate}
        }
        case 'SUA_SINH_VIEN':{
            let {maSVClick}=action.payload;
            let sinhVienUpdate=[...state.arrSinhVien];
            sinhVienUpdate=sinhVienUpdate.filter(sv=>sv.id ===maSVClick);
            return {...state,updateSinhVien:sinhVienUpdate}
            
        }
        default: return state
    }
}