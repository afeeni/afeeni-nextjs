import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ProductCard from "../components/ProductCard";


export default function Home() {

  return (
<main>

  <Navbar></Navbar>

  <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white animate-typing overflow-hidden whitespace-nowrap border-r-4">
                  
                  Afeeni Phillips :)
                   
                  
                  </h5>

  <ProductCard></ProductCard>
  <Footer></Footer>

</main>
  );
  
}
