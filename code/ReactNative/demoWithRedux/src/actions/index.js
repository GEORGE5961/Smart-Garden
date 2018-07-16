import axios from 'axios';
import {
    LOAD_USER,
    REGISTER,
    REGISTER_REJECTED,
    USER_LOG_OUT,
    CLEAR_REGISTER,
    MODIFY_USER,
    GET_SENSORS_WITH_GARDENID,
    UPDATE_SENSOR} from '../constants';
import qs from 'qs';

export const get_user = (email,password) => {
    return {
        type: LOAD_USER,
        payload: {
            promise: axios.get("http://192.168.56.1:8080/users/loginWithEmail",{params:{email:email,password:password}})
        }
    };
};

export const log_out =()=>{
    return{
        type: USER_LOG_OUT
    }
};

export const register = (username,phone,email,password) => {
    if(username===""||phone===""||email===""||password==="")
        return{
            type: REGISTER_REJECTED,
        };
    else{
        const params={
            username: username,
            password: password,
            email: email,
            phone: phone
        };
        return {
            type: REGISTER,
            payload: {
                promise: axios.post("http://192.168.56.1:8080/users/addUser",qs.stringify(params))
            }
        };
    }

};

export const modifyUser = (userId,userType,username,phone,email,password) =>{
    const params={
        userId:userId,
        userType:userType,
        phone:phone,
        email:email,
        password:password,
        username:username
    };
    return{
        type:MODIFY_USER,
        payload:{
            promise: axios.post("http://192.168.56.1:8080/users/updateUser",qs.stringify(params))
        },
        meta:{
            userId:userId,
            userType:userType,
            username:username,
            phone:phone,
            email:email,
            password:password
        }
    }

};

export const clear_register =()=>{
    return{
        type:CLEAR_REGISTER,
    }
};

export const get_sensors_with_gardenId=(gardenId)=>{
    return{
        type: GET_SENSORS_WITH_GARDENID,
        payload:{
            promise: axios.get("http://192.168.56.1:8080/sensors/getSensorByGardenId",{params:{gardenId:gardenId}})
        }
    }
}