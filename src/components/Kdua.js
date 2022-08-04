import { arr2, help, logo, done } from "../assets/img";

const Kdua = (props) => {
    return (
        <>
        <div className="sidebar">
            <img src={logo} alt="logo" className="lfix" />
            <span className="back-page">
                <img src={arr2} className='arrv2' /> 
                Kembali ke halaman awal
            </span>
            <span className="step-text">Tahap pengiriman</span>
            <ul className="step-by">
                <li><span><img src={done} width="15px" /></span><span className="done-step">Pilih mitra pengelola sampah</span></li>
                <li className="on-step"><span>2.</span><span>Pilih mitra pengelola sampah</span></li>
                <li><span>3.</span><span>Pilih mitra pengelola sampah</span></li>
            </ul>
        </div>
        <div className="main-fix">
            <h2 className="tfk">Pengiriman Sampah</h2>
            <div className="card-fix lofsmac">                    
                <span className="t-cms dfc"><b>Formulir Pengiriman Sampah</b><img src={help} width="16px" /></span>
                <div className="main-cms dfmc">
                    <div className="kirif">
                        <h5>Pengiriman</h5>
                        <div className="panel-fix pkf">
                            <h5>Alamat Anda</h5>
                            <div><span className="cab">
                                + Tambah alamat baru    
                            </span></div>
                        </div>
                        <h5>Pengiriman</h5>
                        <div className="panel-fix">
                            <h5>Alamat Mitra</h5>
                            <span className="fganti">Ganti</span>
                            <p className="fpage">
                               <b>Waste4Change Bekasi</b> 
                            </p>
                            <p className="ntf">082111100170</p>
                            <p className="ntf">Komplek Vida Bumipala, Jl. Alun Alun Utara, RT.003/RW.005, Padurenan, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17156</p>
                        </div>
                    </div>
                    <div className="kananf">
                        <h5>Detail Sampah</h5>
                        <div className="panel-fix fhp">
                            <h5>Jenis Pengiriman Sampah</h5>
                            <from>
                                <div className="pudf">
                                    <span className="flni">
                                        <input type="radio" className="radio" name="satu"/>
                                        <label className="lrf">Mengirimkan sampah langsung ke mitra</label>
                                    </span>
                                    <span className="flni">
                                        <input type="radio" className="radio" name="satu"/>
                                        <label className="lrf">Mengirimkan sampah ke pihak ekspedisi</label>
                                    </span>
                                </div>
                            </from> 
                            <span className="mtfskp"></span>
                            <h5 className="dfc">Pihak Ekspedisi <img src={help} width="16px" style={{marginLeft:'5px'}}/></h5> 
                            <div className="panel-fix fref">
                             <span className="textrf">Pilihan Jasa</span>
                             <span className="textrf">&#62;</span>
                            </div>  
                            <small>Ongkos kirim ditanggung oleh pengirim sampah*</small>  
                            <span className="mtfskp"></span>  
                            <h5>Jenis sampah yang dikirim</h5>  
                            <small>Pilih Jenis sampah yang akan anda kirim. Dapat dipilih lebih dari 1*</small>
                            <div className="kcheck">
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Kertas/HVS/Koran</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Karton/Kardus</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Gelas/PiringKaca</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Cermin/Vas</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Kemasan Botol</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Kemasan Skincare</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Kaleng Bekas</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Besi/Seng</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Kemasan Plastik</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Alumunium foil</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Minyak Jelantah</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Barang Bahan Metal</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Lainnya</span>
                                </span>
                            </div>                          
                            <span className="llainnya">
                                Lainnya
                            </span>
                        </div>

                    </div>
                </div>
                <button className="btn btn-fix-s" onClick={()=>props.sub('step3')}>Selanjutnya</button>
            </div>
            <footer className="footer-fix">
                <center>2021 &copy; Waste4Change</center>
            </footer>
        </div>        
        </>
    )
}

export default Kdua;