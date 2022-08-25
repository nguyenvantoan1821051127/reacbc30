
const stateDefoult=10;

export const numberReducar=(state=stateDefoult,action)=>{
    switch(action.type){
        case 'TANG_SO_LUONG':{
            state=action.newNumber;
            return state;
        }
        case 'GIAM_SO_LUONG':{
            state=action.newNumber;
            return state;
        }
        default : return state;
    }; 
}