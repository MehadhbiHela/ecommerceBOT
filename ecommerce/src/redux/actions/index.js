import {CHANGE_USERNAME,CHANGE_EMAIL,CHANGE_PASSWORD,SUBSCRIBE,ADD_TO_MAILING_LIST} from "./Types";

export const changeUsername=(username)=>{
 return {type:CHANGE_USERNAME,username};
}

export const changeMail=(email)=>{
 return {type:CHANGE_EMAIL,email};
}

export const changePassword=(password)=>{
 return {type:CHANGE_PASSWORD,password};
}

export const addToMailingList=(isAdded)=>{
    return {type:ADD_TO_MAILING_LIST,isAdded};
   }