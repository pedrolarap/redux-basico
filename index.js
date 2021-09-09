const {createStore} = require('redux') 

//actions
const INCREMENTAR = 'incrementar'
const DECREMENTAR = 'decrementar'

//actions creator 
const incrementar =()=>({type:INCREMENTAR})
const decrementar =()=>({type:DECREMENTAR})

const initialState= 0

const contador = (state = initialState, action)=>{
    
    switch(action.type){
        case INCREMENTAR:
            return state + 1
        case DECREMENTAR:
            return state - 1
        default:
            return state
            
    }
}



const store = createStore(contador)

store.subscribe(()=>console.log(store.getState()))
store.dispatch(incrementar())
store.dispatch(incrementar())
store.dispatch(incrementar())
store.dispatch(incrementar())
store.dispatch(decrementar())
store.dispatch(decrementar())
