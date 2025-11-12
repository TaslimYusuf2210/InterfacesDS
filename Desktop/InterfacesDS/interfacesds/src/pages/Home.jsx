import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Revolutionalize from "../components/Revolutionalize";
import Testimonials from "../components/Testimonials";
import PricingPlans from "../components/PricingPlans";

function Home() {
    return ( 
        <div className="px-16">
            <Hero></Hero>
            <Discover></Discover>
            <Revolutionalize></Revolutionalize>
            <Testimonials></Testimonials>
            <PricingPlans></PricingPlans>
        </div>
     );
}

export default Home;