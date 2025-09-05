import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-cyberblack text-white">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Layout;


