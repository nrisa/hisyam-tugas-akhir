// config
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages dan Component
import { SetProfil, ExchangePoin, Main } from '.';
import { Navbar, Footer } from '../components'

// css
import '../assets/css/App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/setprofile' element={<SetProfil />} />
            <Route path='/poin' element={<ExchangePoin />} />
            <Route path='/' element={<Main />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
