import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const router = useRouter();
  const showHeader = router.pathname === '/admin' ? false : true;
  console.log("Admin Url___________________", showHeader);
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
