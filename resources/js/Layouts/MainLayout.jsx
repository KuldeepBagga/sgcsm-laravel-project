import Header from '@/Common/Header';
import Navbar from '@/Common/Navbar';
import Footer from '@/Common/Footer';

export default function MainLayout({ children }) {

    return (
        <div className="bg-gray-50 text-gray-800">

            <Header />

            <Navbar />

            <main>
                {children}
            </main>

            <Footer />

        </div>
    );
}