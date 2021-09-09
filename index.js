const {createStore} = require('redux') 


const initialState= 0

const contador = (state = initialState, action)=>{
    
    switch(action.type){
        case 'incremenetar':
            return state + 1
        case 'decrementar':
            return state - 1
        default:
            return state
            
    }
}



const store = createStore(contador)

store.subscribe(()=>console.log(store.getState()))
store.dispatch({type: 'incrementar'})
store.dispatch({type: 'incrementar'})
store.dispatch({type: 'incrementar'})
store.dispatch({type: 'decrementar'})
store.dispatch({type: 'decrementar'})
store.dispatch({type: 'decrementar'})
