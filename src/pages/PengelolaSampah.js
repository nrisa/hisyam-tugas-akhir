import { Link } from 'react-router-dom'
import { guide, i1, i2, i3, i4, i5, i6 } from '../assets/img';
import {Faq} from '../components';

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
                <span className='linegreen'></span><br/>
                <p className='small'>Ikuti tata cara pengiriman sampah berikut, jangan sampai terlewat ya</p>
            </center>
            <br /><br />
            <div className="container container-cuts">
                <div className="cucsy">
                    <span className='apnn'><span className='aabajs'>1</span>Pilah Sampah Mandiri</span>
                    <p className='assagt'>Pilah sampah anda secara mandiri
                    pengiriman sampah individual hanya menerima sampah anorganik </p>
                </div>
                <div className="cucsy">
                    <span className='apnn'><span className='aabajs'>2</span>Pengisian form website</span>
                    <p className='assagt'>Masukkan data pengiriman menggunakan website dan salin kode transaksi sampah</p>
                </div>
                <div className="cucsy">
                    <span className='apnn'><span className='aabajs'>3</span>Kemas Sampah anda</span>
                    <p className='assagt'>Kemas sampah anda di dalam kotak/kardus. Sematkan kode transaksi dari website </p>
                </div>
                <div className="cucsy">
                    <span className='apnn'><span className='aabajs'>4</span>Kirim sampah anda</span>
                    <p className='assagt'>Kirimkan sampah telah anda kemas menggunakan jasa ekspedisi kepada mitra pengolahan sampah kami </p>
                </div>
            </div>
            
            <br /><br /><br /><br />
            <center>
                <h3 className='title-text-lp'>Jenis sampah yang didaur ulang</h3>
                <span className='linegreen'></span><br/>
                <p className='small'>Berikut sampah yang dapat anda kirimkan untuk kami daur ulang</p>
            </center>
            <br /><br /><br />
            <div className="container-cuts">
                <div className="gtapbt">
                    <img src={i1} width="50px" /><br />
                    <span className="apnn">Kertas</span>
                    <span className="assagt" align="center">
                    Kertas HVS, Kertas Karton, Koran, Majalah, Kardus, <br/>
                    Karton Makanan/Minuman, dan lain-lain
                    </span>
                    <span className="dammg">
                    Lihat Detail Sampah
                    </span>
                </div>
                <div className="gtapbt">
                    <img src={i2} width="50px" /><br />
                    <span className="apnn">Kaca</span>
                    <span className="assagt" align="center">
                    Botol Kaca, Cermin, Vas Kaca, Piring, Gelas, <br /> 
                    dan Barang berbahan kaca lainnya.
                    </span>
                    <span className="dammg">
                    Lihat Detail Sampah
                    </span>
                </div>
                <div className="gtapbt">
                    <img src={i3} width="50px" /><br />
                    <span className="apnn">Minyak Jelantah</span>
                    <span className="assagt" align="center">
                    Kami menerima limbah minyak goreng bekas pakai <br />
                    untuk didaur ulang menjadi energi baru terbarukan
                    </span>
                    <span className="dammg">
                    Lihat Detail Sampah
                    </span>
                </div>
            </div><br /><br/><br />
            <div className="container-cuts">
                <div className="gtapbt">
                    <img src={i5} width="50px" /><br />
                    <span className="apnn">Plastik</span>
                    <span className="assagt" align="center">
                    Botol Minum, Botol Shampo, Toples Makanan, <br />
                    dan Barang berbahan plastik lainnya dengan kode 1 - 7
                    </span>
                    <span className="dammg">
                    Lihat Detail Sampah
                    </span>
                </div>
                <div className="gtapbt">
                    <img src={i4} width="50px" /><br />
                    <span className="apnn">Kaleng atau Besi</span>
                    <span className="assagt" align="center">
                    Kaleng Minuman Makanan, Peralatan Makan, <br />
                    Masak Besi, Seng, dan Barang berbahan metal lainnya.
                    </span>
                    <span className="dammg">
                    Lihat Detail Sampah
                    </span>
                </div>
                <div className="gtapbt">
                    <img src={i6} width="50px" /><br />
                    <span className="apnn">Kemasan Plastik</span>
                    <span className="assagt" align="center">
                    Kemasan makanan ringan, sabun dan shampo sachet, <br /> 
                    mie instan, serta kopi instan  dan alumunium foil.
                    </span>
                    <span className="dammg">
                    Lihat Detail Sampah
                    </span>
                </div>
            </div>
            
            <br /><br /><br /><br />
            <center>
                <h3 className='title-text-lp'>Begini cara sampah sebelum dikirim</h3>
                <span className='linegreen'></span><br/>
                <p className='small'>Sebelum mengirimkan sampah, Simak bagaimana mengolahnya agar mudah untuk dikemas dan didaur ulang</p>
            </center>
            <br />
            <div className="container-cuts-b">    
                <div className="knict knict-on">
                    pemilahan sampah
                </div>
                <div className="knict">
                Pencucian sampah
                </div>
                <div className="knict">
                Pengolahan botol plastik
                </div>
                <div className="knict">
                Pengolahan sampah kertas
                </div>
            </div>
            <br /><br />
            <div className="container container-cuts">
                <img src={guide} width="45%" />
                <div className="tabsda">
                    <span className="tbay">Hal yang perlu diperhatikan</span>
                    <h2>Perlakuan sampah secara umum</h2>
                    <br /><br /><br />
                    <h4>Cara memilah sampah untuk dikirim:</h4>
                    <ul className='naagpp'>
                        <li className='bajah'>Pastikan sampah dalam keadaan kering, tidak lembab dan juga tidak dalam keadaan basah. </li>
                        <li className='bajah'>Pisahkan berdasarkan jenis sampah yang akan di kirim.</li>
                        <li className='bajah'>Apabila sampah yang dikirimkan jenisnya berbeda namun dalam kuantitas sedikit dapat disatukan dengan sampah jenis lain.</li>
                        <li className='bajah'>Pastikan sampah yang Anda kirim telah sesuai dengan jenis sampah yang didaur ulang oleh Waste4Change</li>
                    </ul>
                </div>
            </div>
            <br /><br /><br />
            <Faq />
        </div>
    )
}

export default PengelolaSampah;