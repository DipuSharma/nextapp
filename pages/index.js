import { red } from "@mui/material/colors";
import Featured from "../components/Featured";
import HomeProduct from "../components/HomeProduct";


const Home = ({ data }) => {
  return (
    <>
      <Featured />
      <HomeProduct/>
    </>
  );
};
export default Home;
