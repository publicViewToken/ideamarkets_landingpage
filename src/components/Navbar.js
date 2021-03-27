import React, {useState} from 'react';
import logo from '../images/logo.png';
import anim from '../images/ideaanim.gif';

function Navbar(){
const [nav, setnav] = useState(false);
const changeBackground = () => {

if(window.scrollY >= 50){
	setnav(true);
}
else{
setnav(false);
}
}

window.addEventListener('scroll', changeBackground);
return(

<nav className={nav ? 'nav active': 'nav'}>
<a href='#' className='anim'>
<img src={anim} alt =''/>
 <div className='active'>Idea Market</div>
</a>
<input type='checkbox' className='menu-btn' id='menu-btn'/>
<label className='menu-icon' for ='menu-btn'>
<span className='nav-icon'></span>
</label>
<ul className='menu'>
<li><a href='#'>Home</a></li>
<li><a href='https://ideamarket.io/'>Join</a></li>
<li><a href='https://docs.ideamarket.io/introduction'>Docs</a></li>
</ul>

</nav>


)


}

export default Navbar;