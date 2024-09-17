import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div
        className="d-flex flex-column min-vh-100"
        style={{
          backgroundImage: `url()`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Navbar />
        <main className="flex-grow-1 d-flex justify-content-center align-items-center">
          {/* The content will be centered */}
          <div className="container-fluid p-0">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
