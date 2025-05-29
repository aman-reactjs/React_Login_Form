import React, { useState } from 'react'


const Feature1 = () => {
    const[isLogin, setIsLogin]= useState(true);
  return (
    <>
    <div className="container">
        <div className="login-signUp">

        <button onClick={()=>setIsLogin(true) } className={isLogin ? 'active':''} >Login</button>
        <button onClick={()=> setIsLogin(false)} className={!isLogin ? 'active':''}>SignUp</button>
      
        </div>
          {isLogin ?<>
          <h2>Login</h2>
<div className="login-input">
<input type='email' placeholder='Email Address'/>
<input type='password' placeholder ='Password'/>
      <a className='forgotPassword' href="#"onClick={()=>setIsLogin(false)}>Forgot password?</a>
      <button>Login</button>
      <p>Not a member? <a href= "#"onClick={()=>setIsLogin(false)}>Signup now</a></p>
</div>
          </>:<>
              <h2>Singup form</h2>
            <div className="signupDiv">
              <input type='email' placeholder='Email Address'/>
              <input type='password' placeholder='Password'/>
              <input type='email' placeholder='confirm password'/>
              <br />
              <br />
              <button>Signup</button>
            </div>
          </>}
    </div>
    </>
  )
}

export default Feature1