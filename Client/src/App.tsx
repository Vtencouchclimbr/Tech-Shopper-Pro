import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar stays at the top on all screen sizes */}
      <Navbar />

      {/* Main content area */}
      <main style={{ backgroundColor: '#f8f5e6'}} className="flex-grow-1 d-flex justify-content-center align-items-center">
        {/* Responsive container for the content */}
        <div className="container-fluid p-3">
          <Outlet />
        </div>
      </main>

      {/* MediaTab component */}
      <Footer />
    </div>
  );
}

export default App;
