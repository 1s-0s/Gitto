
export default (state=null,action) =>{
    console.log("---from authreducer: ",action.payload);
    switch(action.type){
        case "GET_USER":
            return action.payload || false;
        default:
            return state;    
    }
}