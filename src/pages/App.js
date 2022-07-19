import { Banner, Navbar, Footer } from '../components'

// css
import '../assets/css/App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Banner title="Pengaturan Akun" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
