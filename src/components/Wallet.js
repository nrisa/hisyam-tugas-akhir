import { poff, wallet } from '../assets/img'

const Wallet = (props) => {
  return (
    <>
      <div className="cpoin">
        <div className='cp cp-on' onClick={()=> props.sub('wallet')}>
          <img src={wallet} width="25px" />
          <span className='label label-on'>E-Wallet</span>
        </div>
        <div className='cp' onClick={() => props.sub('pulsa')}>
          <img src={poff} width="18px" />
          <span className='label'>Pulsa</span>
        </div>
      </div>

      <div className='card-ii'>
        <h3>E-Wallet</h3>
        <br/>
        <span class="btn-wallet">
          Gopay
        </span>
        <span class="btn-wallet">
          Ovo
        </span>
        <span class="btn-wallet on-btn-wallet">
          Dana
        </span>
        <br/><br/><br/>
        <form>
          <label className='wl'>Nomor E-Wallet</label><br/><br/>
          <input type="text" className='iw' placeholder='Masukan Nomer E-Wallet'/><br/><br/>
          <div class="conin">
            <div class="card-poin">
              <h5>5.000</h5>
              <p>100 Poin</p>
            </div> 
            <div class="card-poin">
              <h5>10.000</h5>
              <p>200 Poin</p>
            </div> 
            <div class="card-poin">
              <h5>20.000</h5>
              <p>350 Poin</p>
            </div> 
            <div class="card-poin">
              <h5>40.000</h5>
              <p>500 Poin</p>
            </div> 
            <div class="card-poin">
              <h5>50.000</h5>
              <p>650 Poin</p>
            </div> 
            <div class="card-poin">
              <h5>100.000</h5>
              <p>1000 Poin</p>
            </div> 
          </div>
          <br/>
          <button className='btn-w'>Tukar</button>
        </form>
      </div>
    </>
  )
}

export default Wallet;