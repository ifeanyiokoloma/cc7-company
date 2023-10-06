import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Layout from "./components/Layout";
import EmailVerification from "./pages/EmailVerification";
import SignInDialog from "./components/SignInDialog";
import SignUpDialog from "./components/SignUpDialog";

const App = () => {
  return (
    <Layout>
      <SignInDialog />
      <SignUpDialog />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/verify-email/:token" element={<EmailVerification />} />
      </Routes>
    </Layout>
  );
};

export default App;
