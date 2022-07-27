import { Link } from 'react-router-dom';

import { 
  logo, 
  point, 
  notif, 
  Avatar
} from '../assets/img/index'

const Navbar = () => {
  return (
    <nav className='container'>
      <h1><img src={logo} alt="logo"/></h1>
      <ul>
        <li><a href="">Beranda</a></li>
        <li><Link to="/">Pengelolahan Sampah</Link></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Hubungi Kami</a></li>
      </ul>
      <div>
        <span className="hover">
          <Link to={'/poin'} className='Link' style={{color:'#282A35'}}>
            <img src={point} alt="poin"/> 
            100 Poin
          </Link>
        </span>
        <span className="hover">
          <img src={notif} alt="notif"/>
        </span>
        <span className="hover">
          <Link to={'/setting'} className='Link' style={{color:'#5C5E6A'}}>
            Hi, Hisyam
            <img src={Avatar} alt="avatar"/>
          </Link>
        </span>
      </div>
    </nav>
  )
}

export default Navbar;