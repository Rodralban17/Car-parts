import {React} from 'react';
import Hero from '../Components/Hero';
const HomePage = () => {
  return (
   <div>  
         <main className=" ">
        <section className=" bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <Hero/>
        </section>
       
      </main>    
    </div>
  );
}
export default HomePage;