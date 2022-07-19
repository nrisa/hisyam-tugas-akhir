import { Banner } from '../components'

const SetProfil = () => {
  return (
    <>
      <Banner title="Pengaturan Akun" />
      <div className="card">
        <ul className='menu'>
          <li className="list-menu on-menu">Edit Profil</li>
          <li className="list-menu">Ubah Kata Sandi</li>
          <li className="list-menu">Pengaturan Akun</li>
          <li className="list-menu danger">Hapus Akun</li>
        </ul>
        <table className='form-profil'>
          <tbody className='sub-form-profil'>
            <tr>
              <td><label>Nama</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" value='Hisyam Hawari' /></td>
            </tr>      
            <tr>
              <td><label>Jenis Kelamin</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" value='Laki-Laki' /></td>
            </tr>   
            <tr>
              <td><label>Tanggal Lahir</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" value='1 Agustus 2000' /></td>
            </tr>   
            <tr>
              <td><button className='btn' style={{marginTop:'13px'}}>Edit</button></td>
            </tr>       
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SetProfil;
