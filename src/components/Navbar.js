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
        <li><Link to="pengelola-sampah">Pengelolahan Sampah</Link></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Hubungi Kami</a></li>
      </ul>
      <div>
        <span className="hover">
          <span className='Link' style={{color:'#282A35'}}>
            <img src={point} alt="poin"/> 
            100 Poin
          </span>
        </span>
        <span className="hover">
          <img src={notif} alt="notif"/>
        </span>
        <span className="hover p-dd">
          <span className='Link' style={{color:'#5C5E6A'}}>
            Hi, Hisyam
            <img src={Avatar} alt="avatar"/>
          </span>
          <ul className='dropdown-profil'>
            <li><Link to={'/setting'} className='link'>Pengaturan Akun</Link></li>
            <li><Link to={'/poin'} className='link'>Penukaran Poin</Link></li>
            <li><Link to={'/sampah'}>Transaksi Sampah</Link></li>
            <li>Kelola Alamat</li>
            <li>Keluar</li>
          </ul>
        </span>
      </div>
    </nav>
  )
}

export default Navbar;