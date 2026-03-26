import Image from "next/image";
import HomePage from "./home/HomePage";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
export default function Home() {
  return (
    <>
    <div className="bg-black">
      <HomePage/>
    </div>
    <Footer/>
    </>
  );
}
