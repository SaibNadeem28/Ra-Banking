import '../app/font';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import Counter from '../components/Counter';
import OurMission from '../components/OurMission';
import OurProject from '../components/OurProject';
import Testimonials from '../components/Testimonials';
import OurServices from '../components/OurServices';
import TeamMembers from '../components/Team';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../app/globals.css';



const Index = () => {
    return <div>
        <Navbar />
        <HomePage />
        <OurMission />
        <OurProject />
        <OurServices />
        <Contact />
        <Footer />
        </div>
};

export default Index;
