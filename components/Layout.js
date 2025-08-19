import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
