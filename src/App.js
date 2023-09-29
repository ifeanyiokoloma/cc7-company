import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Layout from "./components/Layout";
import ModalProvider from "./providers/ModalProvider";
import FullScreenDialog from "./components/RegisterModel";

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <ModalProvider>
      <FullScreenDialog />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Layout>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
