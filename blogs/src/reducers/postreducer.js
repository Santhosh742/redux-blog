export const Postreducers = (state = [], action) => {
  switch(action.type){
      case 'FETCHPOSTS':
        return action.payload;
      default:
        return state;
  }
}