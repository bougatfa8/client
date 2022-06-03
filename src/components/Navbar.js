import React, {useContext} from 'react';
import $ from 'jquery';
import {userContext} from '../App';
import {NavLink, Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css';
import 'font-awesome/css/font-awesome.min.css'
const Navbar = ()=> {

    const {state, dispatch} = useContext(userContext)
    const history = useHistory()
    const renderList=()=>{
      if(!state){ 
        return [
          // <li><Link to="/feed"><i class="fa fa-rss"></i>&nbsp; Feed</Link></li>,
          <li><Link to="/signin"><i class="fa fa-sign-out"></i>&nbsp; Sign In</Link></li>,
          <li><Link to="/signup"><i class="fa fa-sign-out" aria-hidden="true"></i>&nbsp; Sign Up</Link></li>
        ]
      }
      else{
        return [
          <li><Link to="/AddPost">&nbsp;Insert Project</Link></li>,
          <li><Link to="/Signup">&nbsp;Insert Employer</Link></li>,
          <li><Link to="/AddPost2">&nbsp;Insert Departement</Link></li>,
          

          



          
          <li><Link to="#" onClick={()=>{
              localStorage.clear();
              dispatch({type:"CLEAR"})
              history.push('/signin')
          }} ><i class="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Log Out</Link></li>
        ]
      }
    }
    
    return (
        <div>
            <header class="header">
  <span className="logo"><img style={{width:"45px",height:"45px",borderRadius:"50%"}}
        src = {require("../assets/logo1.PNG")}/></span>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul class="menu">
   {renderList()}
  </ul>
</header>
    
        </div>
    )
    
}
export default Navbar
