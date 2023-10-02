import ig1 from '../../assets/ig.jpg'
import ig2 from '../../assets/ig2.jpg'
import ig3 from '../../assets/ig3.jpg'
import ig4 from '../../assets/ig4.jpg'
const IG = () => {
  return (
    <div className="fontstyle2 py-20 lg:px-14 px-5  ">
      <h2 className="text-2xl font-semibold text-center ">Instagram @sismyanmar</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10">
      <img src={ig1} className='h-full object-cover' alt="" />
      <img src={ig2} alt="" />
      <img src={ig3} alt="" />
      <img src={ig4} alt="" />
        
      </div>
    </div>
  );
};

export default IG;
