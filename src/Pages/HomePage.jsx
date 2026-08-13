import {React} from 'react';
import Hero from '../Components/Hero';
import CategoryGrid from '../Components/CategoryGrid';
const HomePage = () => {
  return (
   <div>  
         <main className=" ">
        <section className=" bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <Hero/>
        </section>
       <CategoryGrid/>
      </main>    
    </div>
  );
}
export default HomePage;