import bg from '../../../public/images/w97.jpg';


const Bgimg = () => {
    return ( 

 <div
      style={{
      backgroundImage: `url(${bg.src})`,
      width: '10000px',
      height: '10000px',
      opacity: '50%'
    }} />

);
};
 
export default Bgimg