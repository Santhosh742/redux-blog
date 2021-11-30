export const Userreducers = (state = [], action) => {
    switch(action.type){
         case 'FETCHUSER':
           return [...state, action.payload]; 
        default:
          return state;
    }
  }