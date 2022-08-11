import { getAllByAltText } from '@testing-library/react'
import React from 'react'
import logo from "../images/logo.svg"
import Alert from './Alert'
import FormRow from './FormRow'
import {useGlobalContext} from "../context"
import "./Register.css"
const Register = () => {
    let [submit,setsubmit]=React.useState(false)
    let values = {
        name: "",
        email: "",
        password: "",
        isMember: false,
    }

    let state=useGlobalContext()
    console.log(state)


    let [initialvalue, setinitialvalue] = React.useState(values)

   
    function handlechange(e) {
        setinitialvalue((pre) => {
            return {
                ...pre,
                [e.target.name]: e.target.value
            }
        })
    }

    function submitbtn(){
        if(initialvalue.name==="" || initialvalue.password===""  || initialvalue.email===""){
            setsubmit(false)
        }
        else{
            setsubmit(true)
        }  

    }

    function togglebtn(){
        setinitialvalue((pre)=>{
            return {...pre,isMember:!pre.isMember}
        })
    }

    // console.log(initialvalue)
    return (
        <div className='register'>
            {
                !initialvalue.isMember ?
                    <div className='register-main'>
                        <img src={logo} alt="ss" className='logo' />
                        <h2>Register</h2>

                        {state.showAlert && <Alert/>}
                        

                        <FormRow name="name" type="text" handlechange={handlechange} value={initialvalue.name} />

                        <FormRow name="email" type="email" handlechange={handlechange} value={initialvalue.email} />

                        <FormRow name="password" type="password" handlechange={handlechange} value={initialvalue.password} />

                        <button className='btn' style={{ width: "90%" }} onClick={submitbtn}>Register</button>

                        <p>Already a member ?<span onClick={togglebtn}>Login</span></p>
                    </div>
                    :
                    <div className='register-main'>
                        <img src={logo} alt="ds" className='logo' />
                        <h2>Login</h2>

                        <FormRow name="email" type="email" handlechange={handlechange} value={initialvalue.email} />

                        <FormRow name="password" type="password" handlechange={handlechange} value={initialvalue.password} />
                        <button className='btn' onClick={submitbtn} style={{ width: "90%" }}>Login</button>
                        <p>Not a member yet?<span onClick={togglebtn}>Register</span></p>
                    </div>
            }
        </div>
    )
}

export default Register