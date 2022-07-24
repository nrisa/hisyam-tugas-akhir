import { Banner } from '../components';
import { wallet, poff } from '../assets/img'

const ExchangePoin = () => {
  return (
    <>
      <Banner title="Penukaran Poin" sub="Riwayat Penukaran" />
      <div className="cpoin">
        <div className='cp cp-on'>
          <img src={wallet} width="25px" />
          <span className='label label-on'>E-Wallet</span>
        </div>
        <div className='cp'>
          <img src={poff} width="18px" />
          <span className='label'>Pulsa</span>
        </div>
      </div>
    </>
  )
}

export default ExchangePoin;
