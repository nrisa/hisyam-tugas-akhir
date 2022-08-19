import { logow } from '../assets/img';
import '../assets/css/auth.css';

const Login = () => {
    return (
        <div className="auth">
            <div className="banner-auth">
                <img src={logow} className="l-auth" width={'100px'} />
                <span className='sub-t-auth'>
                “Memulai hal kecil namun bermanfaat<br/> 
                selalu lebih lebih baik daripada tidak sama sekali”
                </span>
            </div>
            <div className="form-auth">
            <br /><br /><br /><br /><br /><br />
                <span className="pnp-auth">
                    Selamat Datang di Wasted4Change
                </span><br />
                <span className="bnb-auth">
                    Silahkan Masuk
                </span>
                <br /><br />
                
        <table className='form-t-auth'>
          <tbody className='sub-form-profil'>
            <tr>
              <td><label>Email</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" style={{color:'gray'}} placeholder={'masukan email'} id="tlp" /></td>
            </tr>      
            <tr>
              <td><label>Password</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="password" style={{color:'gray'}} placeholder="masukan password" id="mail" /></td>
            </tr>
            <tr>
              <td><button className='btn btn-plus' style={{marginTop:'13px'}}>Edit</button></td>
            </tr>       
          </tbody>
        </table>
            </div>
        </div>
    )
}

export default Login;