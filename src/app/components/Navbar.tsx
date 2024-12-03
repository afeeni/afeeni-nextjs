import { BriefcaseIcon, CodeBracketIcon, HomeIcon, SparklesIcon} from '@heroicons/react/24/outline'
import Link from "next/link";


const Navbar = () => {
    return ( 

        <div className="grid grid-cols-4 gap-3 py-8 mx-24 justify-center">
            <Link href="/" className='flex justify-center'> <button className="btn-blue"> <HomeIcon className="size-5 mx-2"/>Home</button></Link>
            <Link href="/about" className='flex justify-center'> <button className="btn-blue"> <CodeBracketIcon className="size-5 mx-2"/> Projects</button></Link>
            <Link href="/about" className='flex justify-center'> <button className="btn-blue"> <SparklesIcon className="size-5 mx-2"/>Skills</button></Link>
            <Link href="/about" className='flex justify-center'> <button className="btn-blue"> <BriefcaseIcon className="size-5 mx-2"/>Experience</button></Link>
            
        </div>
    );
}
 
export default Navbar;