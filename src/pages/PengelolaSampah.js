import { Link } from 'react-router-dom'

const PengelolaSampah = () => {
    return (
        <div>
            <div className="jumbotron">
                <h1>Kami membantu anda untuk mengolah sampah</h1>
                <br />
                <p>Percayakan daur ulang sampahmu kepada Waste4Change</p>
                <br />
                <Link to="/kirim">
                <button className="btn-jumb">Kirim Sampah</button>
                </Link>
            </div>
            <br /><br /><br /><br />
            <center>
                <h3 className='title-text-lp'>Cara Mengirim Sampah</h3>
                <span className='linegreen'></span>
            </center>
            <br /><br />
        </div>
    )
}

export default PengelolaSampah;