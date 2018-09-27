import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

const allPosts = (state=[], action) => {
    let nvoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'DATA_LOADED':
            nvoEstado = state.concat(action.data);
            return nvoEstado;  
        case 'CLEAR_DATA':
            nvoEstado = [];
            return nvoEstado;   
        default:
            return state;
    }
}

const userCreated = (state={}, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'USER_CREATED':
            nuevoEstado = {mensaje: "El usuario se creo con exito!"}
            return nuevoEstado;
        case 'USER_ERROR':
            nuevoEstado = {mensaje: "El usuario no ha sido creado o los datos no son correctos"}
            return nuevoEstado;
        default:
            return {}; //para que retorne el state vacio  y pueda usar el msj tmb en login
    }
}

const sessions = (state = null, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case "LOGIN":
            nuevoEstado = action.data; // me duelve los datos del login
            return nuevoEstado;
        case "LOGOUT":
        nuevoEstado = null; // me duelve los datos del login
        return nuevoEstado;

        default:
            return state;
    }
}

const reducer = combineReducers({
    allPosts: allPosts,
    form: formReducer,
    userStatus: userCreated 
});

const store = createStore(reducer);

export default store;