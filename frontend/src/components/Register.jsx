import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { userRegister } from '../store/actions/authAction';
import { useAlert } from 'react-alert';
import { ERROR_CLEAR, SUCCESS_MESSAGE_CLEAR } from '../store/types/authType';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Register = () => {

     const navigate = useNavigate();
     const alert = useAlert();

     const {loading,authenticate,error,successMessage,myInfo} = useSelector(state=>state.auth);
     console.log(myInfo);

     const dispatch = useDispatch();

     const [isTyping, setIsTyping] = useState({
          userName: false,
          email: false,
          password: false,
          confirmPassword: false,
     });

     const [state,setstate] = useState({
          userName : '',
          email:'',
          password:'',
          confirmPassword : '',
          image : ''
     })

     const [loadImage, setLoadImage] = useState('');

     const inputHendle = e => {
          setstate({
               ...state,
               [e.target.name] : e.target.value 
          })
          setIsTyping({
          ...isTyping,
          [e.target.name]: e.target.value !== '',
          });
     }

     const fileHendle = e =>{
          if(e.target.files.length !==0){
               setstate({
                    ...state,
                    [e.target.name] : e.target.files[0]
               })
          }

          const reader = new FileReader();
          reader.onload = () => {
               setLoadImage(reader.result);
          }
          reader.readAsDataURL(e.target.files[0]);
     }

     const register = e =>{

          const {userName,email,password,confirmPassword, image} = state;
          e.preventDefault();

          const formData = new FormData();

          formData.append('userName',userName);
          formData.append('email',email);
          formData.append('password',password);
          formData.append('confirmPassword',confirmPassword);
          formData.append('image',image);

          dispatch(userRegister(formData));          
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
          <div className="login_btn">
               <span>Already playing with MeChat?</span>
              <Link to="/messenger/login" className='btn' >Login</Link>
          </div>
          <img src={'/image/bg_pattern.png'} className='bg-pattern'/>
          <div className='card'>
               <span className='top-effect'></span>
               <div className='card-header'>
          <h3>Register</h3>
               </div>

     <div className='card-body'>
          <form onSubmit={register}>
               <div className='form-group icon-input'>
                    {!isTyping.userName && <FaUser />}
                    <label htmlFor='username'>User Name</label>
               <input type="text" onChange={inputHendle} name="userName" value={state.userName}  className='form-control' placeholder='User Name' id='username' /> 
               </div>

               <div className='form-group icon-input'>
                    {!isTyping.email && <FaEnvelope />}
                    <label htmlFor='email'>Email</label>
               <input type="email" onChange={inputHendle} name="email" value={state.email}  className='form-control' placeholder='Email' id='email' /> 
               </div>

               <div className='form-group icon-input'>
                    {!isTyping.password && <FaLock />}
                    <label htmlFor='password'>Password</label>
               <input type="password"  onChange={inputHendle} name="password" value={state.password}  className='form-control' placeholder='Password' id='password' /> 
               </div>


               <div className='form-group icon-input'>
                    {!isTyping.confirmPassword && <FaLock />}
                    <label htmlFor='confirmPassword'>Confirm Password</label>
               <input type="password"  onChange={inputHendle} name="confirmPassword" value={state.confirmPassword} className='form-control' placeholder='Confirm Password' id='confirmPassword' /> 
               </div>

               <div className='form-group'>
                  <div className='file-image'>
                         <div className='image'>
     {loadImage ? <img src={loadImage} /> : ''  }                         
                         </div>
               <div className='file'>
               <label htmlFor='image'>Select Image</label>
               <input type="file" onChange={fileHendle}  name="image" className='form-control' id='image' />
               </div>

             </div>
               </div>

               <div className='form-group'>
               <input type="submit" value="register" className='btn' />
               </div>


               <div className='form-group'>
     <span><Link to="/messenger/login"> Login Your Account </Link></span>
               </div>  
          </form> 
     </div>


               </div> 

     </div>

     )
};

export default Register;
