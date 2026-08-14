import {React} from 'react';
import Hero from '../Components/Hero';
import CategoryGrid from '../Components/CategoryGrid';
import FeaturedProducts from '../Components/FeaturedProducts';
import ReviewsSection from '../Components/ReviewsSection';
const HomePage = () => {
  return (
   <div>  
         <main className=" ">
        <section className=" bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <Hero/>
        </section>
       <CategoryGrid/>
       <FeaturedProducts/>
       <ReviewsSection/>
      </main>    
    </div>
  );
}
export default HomePage;