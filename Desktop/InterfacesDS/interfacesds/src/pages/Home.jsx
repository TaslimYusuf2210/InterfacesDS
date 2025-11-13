import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Revolutionalize from "../components/Revolutionalize";
import Testimonials from "../components/Testimonials";
import PricingPlans from "../components/PricingPlans";
import Connect from "../components/Connect";

function Home() {
    return ( 
        <div className="px-16">
            <Hero></Hero>
            <Discover></Discover>
            <Revolutionalize></Revolutionalize>
            <Testimonials></Testimonials>
            <PricingPlans></PricingPlans>
            <Connect></Connect>
        </div>
     );
}

export default Home;