

const stataDefault={
    burger:[{name:'salad',quantity:2},{name:'cheese',quantity:2},{name:'beef',quantity:2}]
    // arrSalad:[],
    // arrCheese:[],
    // arrBeef:[]
}
export const demoBurgerReducer= (state=stataDefault,action)=>{
    switch(action.type){
        case 'CHANGE_QUANTITY':{
            const {name,quantity}=action.payload;
            let burgerUpdate=[...state.burger];
            let item=burgerUpdate.find(p=>p.name ===name);
            if(item){
                item.quantity+=quantity;
                if(item.quantity<1){
                    alert('toi thieu la 1');
                    item.quantity=1;
                }
            }
            state.burger=burgerUpdate
            return {...state}
        }
        default :return state;
    }
}