import {Field, reduxForm} from "redux-form";
import React from "react";
import {textInput} from "../../component/InputText";
import {maxLength, required} from "../../utils/validate";
const maxLength32 = maxLength(32)




function LoginForm (props:any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='login' component={textInput} name='login' validate={[required,maxLength32]}/>
            </div>
            <div>
                <Field placeholder='password' component={textInput} name='password' validate={[required,maxLength32]} type={'password'}/>
            </div>
            <div>
                <Field type='checkbox' component='input' name='checkbox'/>
                <span>Remember Me</span>
            </div>
            <div>
                <button type='submit'>Sing In</button>
            </div>
        </form>
    )

}
export default reduxForm<any,any>({form:'login' })(LoginForm)

