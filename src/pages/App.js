// config
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages dan Component
import { Setting, ExchangePoin, Main } from '.';
import { Navbar, Footer } from '../components'

// css
import '../assets/css/App.css'
import { useState } from 'react';

function App() {
  const [navigasi, setNavigasi] = useState('profil')
  const [poin, setPoin] = useState('wallet')

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/setting' element={<Setting nav={setNavigasi} choose={navigasi} />} />
            <Route path='/poin' element={<ExchangePoin nav={setPoin} choose={poin} />} />
            <Route path='/' element={<Main />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
