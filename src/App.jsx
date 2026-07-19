import Topbar from "./components/Topbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/layout/Navbar";


export default function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <AppRoutes />
      <Footer />
      <WhatsAppButton />
    </>
  );
}