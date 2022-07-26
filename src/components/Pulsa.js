import { woff, pulsa } from '../assets/img'

const Pulsa = (props) => {
  return (
    <>
      <div className="cpoin" onClick={()=>props.sub('wallet')}>
        <div className='cp'>
          <img src={woff} width="25px" />
          <span className='label'>E-Wallet</span>
        </div>
        <div className='cp cp-on' onClick={()=>props.sub('pulsa')}>
          <img src={pulsa} width="18px" />
          <span className='label label-on'>Pulsa</span>
        </div>
      </div>
      <div class="card-ii">
      <h3>Pulsa</h3>
      <br/>
        <form>
          <label className='wl'>Nomor Telepon</label><br/>
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

export default Pulsa;