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
        <li><a href="">Pengelolahan Sampah</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Hubungi Kami</a></li>
      </ul>
      <div>
        <span>
          <img src={point} alt="poin"/> 
          100 Poin
        </span>
        <span>
          <img src={notif} alt="notif"/>
        </span>
        <span>
          Hi, Hisyam
          <img src={Avatar} alt="avatar"/>
        </span>
      </div>
    </nav>
  )
}

export default Navbar;