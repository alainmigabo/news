import React, { useEffect, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import "../styles/loginpopup.css";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../features/authSlice/authSlice';
import { userRegister } from '../features/authSlice/authSlice';
import { useNavigate } from 'react-router-dom';
import {TiTick} from 'react-icons/ti';

export const Popup = () => {
    const loginstatus = useSelector((state)=>state.authorizer.loginstatus);
    const userRole = useSelector((state)=>state.authorizer.role)
    const {usercreated} = useSelector((state)=>state.authorizer)
    const [username,setUsername] = useState("");
    const [usermail,setEmail] = useState("");
    const [userpassword,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if (loginstatus && (userRole === "admin")) {
            navigate("/dashboard")
        }
        else if (loginstatus && (userRole != "admin")) {
            document.getElementById("login-popup").style.display = "none";
            document.getElementById("successful-login").style.display = "flex";
            document.getElementById("account-creation-login").innerHTML = "Logged In";
        }
    },[loginstatus])
    return(
        <div id='background'>
            <div id='login-popup'>
                <div id='popuphide' onClick={()=>{
                    document.getElementById("background").style.display = "none";
                }}>
                    <RxCross1/>
                </div>
                <div id='logintitle'>Log In</div>
                <div id='newbie'>Don't have an account? <span onClick={()=>{
                    document.getElementById("login-popup").style.display = "none";
                    document.getElementById("create-account-popup").style.display = "flex";
                }}>Create Your Account,</span> It takes less than a minute.</div>
                <form id='popup-login-form' className='popup-form'>
                    <label>Email (use: agent)</label>
                    <input type={"text"} id='popup-username' onChange={(event)=>{
                        setEmail(event.target.value);
                    }} />
                    <label>Password (use: agent)</label>
                    <input type={"password"} id='popup-password' onChange={(event)=>{
                        setPassword(event.target.value)
                    }} />
                    <div id='error'>Invalid Email or Password</div>
                    <button className='popup-buttons' id='loginbutton' onClick={(e)=>{
                        e.preventDefault();
                        dispatch(userLogin({
                            email: usermail,
                            password: userpassword,
                        }))
                    }} >LOGIN</button>
                </form>
                <div id='login-with-fb'>
                    <FaFacebook className='fb-google-icon'/>
                    <span>LOGIN WITH FACEBOOK</span>
                </div>
                <div id='login-with-google'>
                    <AiOutlineGoogle className='fb-google-icon'/>
                    <span>LOGIN WITH GOOGLE</span>
                </div>
                <div id='forget' onClick={()=>{
                    document.getElementById("login-popup").style.display = "none";
                    document.getElementById("forgot-password-popup").style.display = "flex";
                }}>
                    Lost Your Password?
                </div>
            </div>
            <div id='create-account-popup'>
                <div id='popuphide' onClick={()=>{
                    document.getElementById("background").style.display = "none";
                }}>
                    <RxCross1/>
                </div>
                <div id='logintitle'>Create Account</div>
                <div id='newbie'>It takes less than a minute If you already have an account <span onClick={()=>{
                    document.getElementById("create-account-popup").style.display = "none";
                    document.getElementById("login-popup").style.display = "flex";
                }}>Login.</span></div>
                <form id='popup-newbie-form' className='popup-form'>
                    <label>Username<span>*</span></label>
                    <input type={"text"} id='newbie-username' onChange={(event)=>{
                        setUsername(event.target.value);
                    }} />
                    <label>Email<span>*</span></label>
                    <input type={"text"} id='newbie-email' onChange={(event)=>{
                        setEmail(event.target.value);
                    }} />
                    <div className='newbie-double'>
                        <div className='newbie-double-left'>
                            <label>First Name</label>
                            <input type={"text"} id='newbie-fname' />
                        </div>
                        <div className='newbie-double-right'>
                            <label>Last Name</label>
                            <input type={"text"} id='newbie-lname'/>
                        </div>
                    </div>
                    <label>Mobile</label>
                    <input type={"tel"} id='newbie-telephone'/>
                    <div className='newbie-double'>
                        <div className='newbie-double-left'>
                            <label>Password<span>*</span></label>
                            <input type={"text"} id='newbie-password' onChange={(event)=>{
                                setPassword(event.target.value);
                            }} />
                        </div>
                        <div className='newbie-double-right'>
                            <label>Password again<span>*</span></label>
                            <input type={"text"} id='newbie-password-confirm'/>
                        </div>
                    </div>
                    <div id='acception'>
                        <input type={"checkbox"} id='accept-checkbox'  name='terms'/>
                        <label id='terms-label'>I accept the <span id='terms'>terms & Conditions</span></label>
                    </div>
                    <button id='create-account' className='popup-buttons' onClick={(event)=>{
                        event.preventDefault();
                        if (!usercreated) {
                            dispatch(userRegister({
                                username: username,
                                email: usermail,
                                password: userpassword,
                            }));
                            document.getElementById("create-account-popup").style.display = "none";
                            document.getElementById("successful-login").style.display = "flex";
                            document.getElementById("account-creation-login").innerHTML = "Created Account";
                        }
                        
                    }} >Create Account</button>
                </form>
            </div>
            <div id='forgot-password-popup'>
                <div id='popuphide' onClick={()=>{
                    document.getElementById("background").style.display = "none";
                }}>
                    <RxCross1/>
                </div>
                <div id='logintitle'>Log In</div>
                <div id='newbie'>Enter your username or Email and we'll send you the link you can use to recover your password.</div>
                <form id='forgot-password-form' className='popup-form'>
                    <label>Username or Email</label>
                    <input type={"text"} id='popup-credential' />
                    <button className='popup-buttons' id='new-password'>GET NEW PASSWORD</button>
                </form>
            </div>
            <div id='successful-login'>
                <div id='tick'>
                    <TiTick/>
                </div>
                <p>You Have Successfully<br/> <span id="account-creation-login">Logged In</span></p>
                <button id='ok-button' onClick={()=>{
                    document.getElementById("successful-login").style.display = "none";
                    document.getElementById("login-popup").style.display  = "flex";
                    document.getElementById("background").style.display = "none";
                }}>ok</button>
            </div>
        </div>
    )
}