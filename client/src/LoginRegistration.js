import React, {useState} from 'react'
import './LoginRegistration.css'
import { Navigate, useNavigate } from 'react-router-dom';

function LoginRegistration() {
    const [message, setMessage] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const navigate = useNavigate();

const showMessages = (message) => {
    setMessage(message);
    setTimeout(() => setMessage(''),3000);
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    const formdata = new FormData(e.currentTarget);
    const values = [...formdata.values()];
    if(values.includes('')){
            showMessages("Empty value not allowed");
    }else{
        e.currentTarget.reset()
        navigate('/feed');
    }

}


  return (
    <section className='LoginRegistration'>
        <form action="" className='form' onSubmit={handleSubmit}>
            <div className="LR_title">
                <h1>Welcome to Insta-like</h1>
            </div>
            <div className='LR_message'>
                <p>{message}</p>
            </div>
            <div className='LR_div LR_id'>
                <input type="text" name="id" id="id" className='LR_input'/>
                <label htmlFor="id">Unique ID </label>
            </div>
            <div className="LR_div LR_username">
                <input type="text" name="username" id="username" className='LR_input' />
                <label htmlFor="username">username </label>
            </div>
            <button type='submit' className='LR_button'>{isRegistered?"Login" : "Register"}</button>
            <p className="LR_footer" onClick={()=>setIsRegistered(!isRegistered)}>{isRegistered?"Not a member yet?" : "Already a member?"}</p>
        </form>
    </section>
  )
}

export default LoginRegistration