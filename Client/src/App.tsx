import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import './App.css';

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
        <NavTabs />
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
