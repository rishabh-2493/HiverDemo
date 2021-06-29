const initialState={
    isExpanded:false,
    index:0
}
  
const RepositoryReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'CLICK':
            return {...state, isExpanded:action.payload.isExpanded, index:action.payload.index}
        break;
        default:
            return state;
    }
}
  
export default RepositoryReducer;