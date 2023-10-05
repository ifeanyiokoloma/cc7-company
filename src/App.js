import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Layout from "./components/Layout";
import ModalProvider from "./providers/ModalProvider";
import FullScreenDialog from "./components/RegisterModal";
import { SnackbarProvider } from "notistack";
import EmailVerification from "./pages/EmailVerification";

const App = () => {
  return (
    <ModalProvider>
      <SnackbarProvider />
      <FullScreenDialog />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/verify-email/:token" element={<EmailVerification />} />
        </Routes>
      </Layout>
    </ModalProvider>
  );
};

export default App;
