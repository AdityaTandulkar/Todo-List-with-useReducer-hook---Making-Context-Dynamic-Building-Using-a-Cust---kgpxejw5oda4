const todoReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE' :
            let obj = {
                title : action.payload,
                id : Date.now()
            }
            return [...state, obj];
        case 'DELETE' :
            let obj2 = state.filter((item)=>{
                return item.id !== action.payload;
            });
            return [...obj2];
        default :
            return state;
    }
}

export { todoReducer }