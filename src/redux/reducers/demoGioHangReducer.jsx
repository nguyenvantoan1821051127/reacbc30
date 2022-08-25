const stateDefault={
    gioHang:[
        // {maSP:1,tenSP:'Iphone X',giaBan:'1000',soLuong:1,hinhAnh:'https://picsum.photos/200/200'},
        // {maSP:2,tenSP:'Iphone V',giaBan:'2000',soLuong:1,hinhAnh:'https://picsum.photos/200/200'}
    ],
    arrSanPham:[
        { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg" },
    { maSP: 2, tenSP: "Meizu 16Xs", manHinh: "AMOLED, FHD+ 2232 x 1080 pixels", heDieuHanh: "Android 9.0 (Pie); Flyme", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 7600000, hinhAnh: "./img/meizuphone.jpg" },
    { maSP: 3, tenSP: "Iphone XS Max", manHinh: "OLED, 6.5, 1242 x 2688 Pixels", heDieuHanh: "iOS 12", cameraSau: "Chính 12 MP & Phụ 12 MP", cameraTruoc: "7 MP", ram: "4 GB", rom: "64 GB", giaBan: 27000000, hinhAnh: "./img/applephone.jpg" }
    ]
}
export const demoGioHangReducer =(state=stateDefault,action)=>{
    switch(action.type){
        case 'THEM_GIO_HANG':{
            //B1: lay gio tri tu action gui len
            let{sanPhamClick}=action.payload;
            //B2: close cac state object array
            let gioHangUpdate=[...state.gioHang];
            
            sanPhamClick={...sanPhamClick,soLuong:1};
            //su ly them gio hang
            let sp=gioHangUpdate.find(spGH=>spGH.maSP===sanPhamClick.maSP);
            if(sp){//neu ton tai
                sp.soLuong+=1
            }
            else{
                gioHangUpdate.push(sanPhamClick)
            }
            
            // gioHangUpdate.push(sanPhamClick)
            //buoc 3:cap nhat ;ai state
            state.gioHang=gioHangUpdate
            return {...state};
        }
        case 'XOA_GIO_HANG':{
            //b1:lay gio tri tu action gui len
            let{maSPClick}=action.payload;
            //b2:xu ly clone arr hoac object ra 1 bien
            let gioHangUpdate=[...state.gioHang];
            gioHangUpdate=gioHangUpdate.filter(sp=>sp.maSP !==maSPClick);
            //b3:cap nhat lai state
            // state.gioHang=gioHangUpdate
            return {...state,gioHang:gioHangUpdate}
        }
        case 'TANG_GIAM_SO_LUONG':{
            let{maSP,soLuong}=action.payload;
            let gioHangUpdate=[...state.gioHang];
            let sp=gioHangUpdate.find(sp=>sp.maSP===maSP);
            if(sp){
                sp.soLuong+=soLuong;
                if(sp.soLuong<1){
                    //xu ly xoa
                    if(window.confirm('ban co muon xoa khong')){
                        gioHangUpdate=gioHangUpdate.filter(sp=>sp.maSP !== maSP);

                    }else{
                        // sp.soLuong -=soLuong;
                        sp.soLuong=1;
                    }
                }
            }
            state.gioHang=gioHangUpdate;
            return{...state}
        }
        default:return state;
    }
}