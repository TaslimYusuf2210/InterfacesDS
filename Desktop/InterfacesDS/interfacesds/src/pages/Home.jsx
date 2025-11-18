import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Revolutionalize from "../components/Revolutionalize";
import Testimonials from "../components/Testimonials";
import PricingPlans from "../components/PricingPlans";
import Connect from "../components/Connect";
import Elevate from "../components/Elevate";

function Home() {
    return ( 
        <div className="lg:px-20 md:px-14 px-8  pt-16 pb-36 lg:pb-96 lg:space-y-70 space-y-32">
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