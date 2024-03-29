import React from 'react';
import s from './Login_Container.module.css'
import LoginForm from './LoginForm';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {authLoginThunk} from "../../Redux/Auth-reducer";
import {withAuthRedirect} from "../hoc/withAuthHoc";



const LoginContainer = (props:any) => {
    const onSubmit = (formData:any) =>{
        props.authLoginThunk(formData.login, formData.password, true)
    }
    if(props.isAuth)  return <Redirect to={'/profile'}/>
    return (
        <div className={s.LoginContainer}>
            <div >
                <LoginForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

const mapDispatchToProps = (state:any) => {
    return{
        isAuth: state.AuthReducer.isAuth
    }

}
export default React.memo(connect(mapDispatchToProps, {authLoginThunk})(LoginContainer))


