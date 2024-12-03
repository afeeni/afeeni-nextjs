// import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import ProductCard from "./components/ProductCard";
import bg from '../../public/images/YKK.jpg'


export default function Home() {

  return (
<main>
  <div style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '900px',
      opacity: '100%'
      }} >

  <Navbar></Navbar>
  <ProductCard></ProductCard>
  <Footer></Footer>

  </div>
</main>
  );
  
}
