const Navbar = () => {
    return ( 
        <div className="grid grid-cols-3 gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Home</button>
            <button className="btn-blue">Projects</button>
            <div>YouTube</div>
        </div>
    );
}
 
export default Navbar;