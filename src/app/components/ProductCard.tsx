import Image from "next/image";


const ProductCard = () => {
    return ( 
        // <h1>product card</h1>

        <div className="flex justify-center my-32">
<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <Image className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-s-lg h-96" src="/images/main.JPG" alt="photo of Afeeni" width={500} height={500} />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Afeeni Phillips</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Empowering innovation as a leader in technical solutions.</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I bring expertise in front-end engineering, quality assurance testing, and technical project management to deliver impactful, high-quality results.</p>
    </div>
</div>

</div>

     );
}
 
export default ProductCard;