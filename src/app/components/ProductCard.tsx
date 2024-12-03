import Image from "next/image";
import Link from "next/link";


const ProductCard = () => {
    return ( 
        // <h1>product card</h1>

<div className="flex justify-center my-32">
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-s-lg h-96" src="/images/main.JPG" alt="photo of Afeeni" width={500} height={500} />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Afeeni Phillips</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Empowering innovation as a leader in technical solutions.</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I bring expertise in front-end engineering, data management, quality assurance testing, and technical project management to deliver impactful, high-quality
                    technical solutions.</p>
                <Link href="https://github.com/afeeni/afeeni-nextjs" target="_blank"><button className="mt-6 text-xs text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-40"> View on Github </button> </Link>
            </div>
    </div>
</div>

     );
}
 
export default ProductCard;