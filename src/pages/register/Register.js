import './register.scss'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
     <div className='card'>
       <div className='left'>
           <h1>Lama Social</h1>
           <p> 
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos architecto laborum minima, sit, delectus neque veniam sequi excepturi natus ipsa in! Excepturi omnis in repellat id quaerat, fugit repudiandae reiciendis.
           </p>
           <span>Do you have an account?</span>
           <Link to='/login'>

            <button>Login</button>
           </Link>


       </div>
       <div className='right'>
          <h1>Register</h1>
          <form>

          <input type='text' placeholder='UserName'></input>
          <input type='email' placeholder='Email'></input> 
          <input type='password' placeholder='Password'></input> 
          <input type='password' placeholder='Name'></input> 
          <button>Register</button>
          </form>
       </div>
     </div>
    </div>
  )
}

export default Register