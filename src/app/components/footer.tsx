
const Footer = () => {
    return ( 

<footer className="fixed bottom-0 left-0 z-20 w-full h-6 p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Connect with me!
    </span>
    <ul className="flex flex-wrap items-center mt-4 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.linkedin.com/in/afeeni/" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
        </li>
        <li>
            <a href="https://github.com/afeeni/afeeni-nextjs" target="_blank" className="hover:underline me-4 md:me-6">GitHub</a>
        </li>
        <li>
            <a href="/" target="_blank" className="hover:underline me-4 md:me-6">Send a message!</a>
        </li>
    </ul>
</footer>


);
}
 
export default Footer;