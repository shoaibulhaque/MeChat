import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { userLogin } from '../store/actions/authAction';
import { useAlert } from 'react-alert';
import {useDispatch,useSelector} from "react-redux"
import { ERROR_CLEAR, SUCCESS_MESSAGE_CLEAR } from '../store/types/authType';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {

     const navigate = useNavigate();

     const alert = useAlert();

     const {loading,authenticate,error,successMessage,myInfo} = useSelector(state=>state.auth);


     const dispatch = useDispatch();

     const [isTyping, setIsTyping] = useState({
          email: false,
          password: false,
     });

     const [state, setState] = useState({
          email: '',
          password : ''
     });

     const inputHendle = e => {
          setState({
               ...state,
               [e.target.name] : e.target.value 
          })
          setIsTyping({
          ...isTyping,
          [e.target.name]: e.target.value !== '',
          });

     }

     const login = (e) => {
          e.preventDefault();
          dispatch(userLogin(state))
     }

     useEffect(()=>{
          if(authenticate){
               navigate('/messenger');
          }
          if(successMessage){
               alert.success(successMessage);
               dispatch({type : SUCCESS_MESSAGE_CLEAR })
          }
          if(error){
               alert.error(error);
               dispatch({type : ERROR_CLEAR })
          }

     },[successMessage,error])

     return (
          <div className='register'>
          <div className="Terms">
               <p>By clicking the button above,</p>
               <p>you agree to our Terms of Service and Privacy Policy</p>
          </div>
          

          <img src = {'/image/mechat_logo.png'} className='mechat_logo' />
          <div className="register_btn">
               <span>Dont have any account ?</span>
              <Link to="/messenger/register" className='btn' >Register</Link>
          </div>
          <img src={'/image/bg_pattern.png'} className='bg-pattern'/>
          <div className='card'>
               <span className='top-effect'></span>
               <div className='card-header'>
          <h3>Login</h3>
               </div>

     <div className='card-body'>
          <form onSubmit={login}>
                

               <div className='form-group icon-input'>
                    {!isTyping.email && <FaEnvelope />}
                    <label htmlFor='email'>Email</label>
                    <input type="email" onChange={inputHendle} name="email" value={state.email} className='form-control' placeholder='Email' id='email' /> 
               </div>

               <div className='form-group icon-input'>
                    {!isTyping.password && <FaLock />}
                    <label htmlFor='password'>Password</label>
                    <input type="password"  onChange={inputHendle} name="password" value={state.password} className='form-control' placeholder='Password' id='password' /> 
               </div>


               <div className='form-group'>
               <input type="submit" value="login" className='btn' />
               </div>


               <div className='form-group'>
     <span><Link to="/messenger/register"> Don't have any Account ? </Link></span>
               </div>  
          </form> 
     </div>


               </div> 

     </div>
     
          )
};

export default Login;
