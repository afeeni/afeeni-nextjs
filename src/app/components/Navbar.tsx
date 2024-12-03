import { UserIcon, CodeBracketIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from "next/link";


const Navbar = () => {
    return ( 

        <div className="grid grid-cols-3 gap-3 my-6 mx-24 justify-center">
            <Link href="/" className='flex justify-center'> <button className="btn-blue"> <HomeIcon className="size-5 mx-2"/>Home</button></Link>
            <Link href="/about" className='flex justify-center'> <button className="btn-blue"> <CodeBracketIcon className="size-5 mx-2"/> Projects</button></Link>
            <Link href="/about" className='flex justify-center'> <button className="btn-blue"> <UserIcon className="size-5 mx-2"/>About Me</button></Link>
        </div>
    );
}
 
export default Navbar;