
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import WhatsAppButton from "./components/WhatsAppButton";
import Topbar from "./components/layout/Topbar";

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