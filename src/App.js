import bgimg from "./cover.jpg"
import Footer from './components/Footer';
import Nav from './components/Nav';
import './index.css';

export default function App() {
  return (

    <div className='h-auto w-screen bg-[#0F141C] '>  
    <Nav/>
    <div className="flex md:flex-row flex-col-reverse  w-screen items-center p-8">
         <div className=" w-[60%] h-auto flex flex-col justify-center md:items-center  md:p-8 p-2">
          <div className="text-white text-[3rem]  text-center">Hi, I am <span className="text-red-700">Rajesh</span> </div>
          <div className="text-xl text-white text-center font-thin">Full Stack Developer</div>
         </div>
          <img src={bgimg} className="  md:h-[20rem] rounded-full "></img>
          </div>
</div>
  
    
  );
}
