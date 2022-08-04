// config
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages dan Component
import { Setting, ExchangePoin, Main, Detail, Kirim, PengelolaSampah } from '.';
import { Navbar, Footer } from '../components'

// css
import '../assets/css/App.css'
import { useState } from 'react';

function App() {
  const [navigasi, setNavigasi] = useState('profil')
  const [poin, setPoin] = useState('wallet')
  const [sampah, setSampah] = useState('proses')
  const [step, setStep] = useState('step1')

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/detail' element={<Detail />} />
            <Route path='/setting' element={<Setting nav={setNavigasi} choose={navigasi} />} />
            <Route path='/poin' element={<ExchangePoin nav={setPoin} choose={poin} />} />
            <Route path='/sampah' element={<Main nav={setSampah} choose={sampah} />} />
            <Route path='/kirim' element={<Kirim step={step} next={setStep}/>} />
            <Route path='/pengelola-sampah' element={<PengelolaSampah />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
