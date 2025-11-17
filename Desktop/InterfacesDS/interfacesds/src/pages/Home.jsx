import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Revolutionalize from "../components/Revolutionalize";
import Testimonials from "../components/Testimonials";
import PricingPlans from "../components/PricingPlans";
import Connect from "../components/Connect";
import Elevate from "../components/Elevate";

function Home() {
    return ( 
        <div className="px-20 pt-16 pb-96 md:space-y-70 space-y-32">
            <Hero></Hero>
            <Discover></Discover>
            <Revolutionalize></Revolutionalize>
            <Testimonials></Testimonials>
            <PricingPlans></PricingPlans>
            <Connect></Connect>
            <Elevate></Elevate>
        </div>
     );
}

export default Home;