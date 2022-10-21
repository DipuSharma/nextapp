import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

const Empty = () => {
  const router = useRouter();

  const handleInput = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <Navbar />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>200</h1>
          </div>
          <h2>We are sorry, Record not found!</h2>
          <p>After product details add, will be show on page.</p>

          <a onClick={handleInput}>Back To Homepage</a>
        </div>
      </div>
    </>
  );
};

export default Empty;
