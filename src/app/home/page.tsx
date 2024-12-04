import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ProductCard from "../components/ProductCard";
import Box from "../components/cube";

export default function Home() {

  return (
<main>

  <Navbar></Navbar>

  <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white animate-typing overflow-hidden whitespace-nowrap border-r-4">
                  
                  Afeeni Phillips :)
                   
                  
                  </h5>
<Box></Box>
  <ProductCard></ProductCard>
  <Footer></Footer>

</main>
  );
  
}
