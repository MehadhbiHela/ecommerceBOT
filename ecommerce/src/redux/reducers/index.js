import {CHANGE_USERNAME,CHANGE_EMAIL,CHANGE_PASSWORD,SUBSCRIBE,ADD_TO_MAILING_LIST} from '../actions/Types'
  
  const initialState={
     userName:"",
     email:"",
     password:"",
     isAdded:false
  };

 export  function reducerApp(state = initialState, action) {
    switch (action.type) {
        case CHANGE_USERNAME:
            return {...state,userName:action.username};break;

        case CHANGE_EMAIL:
            return {...state,email:action.email};break;

        case CHANGE_PASSWORD:
            return {...state,password:action.password};break;

        case ADD_TO_MAILING_LIST:
            return {...state,isAdded:action.isAdded};break;
      default:
        return state
    }
  }