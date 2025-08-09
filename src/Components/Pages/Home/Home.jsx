import React from 'react';
import Banner from '../Banner/Banner';
import Specialized from '../Specialized/Specialized';
import Services from '../Services/Services';
import Development from '../Development/Development';
import ChooseUs from '../ChooseUs.jsx/ChooseUs';
import StackPower from '../StackPower/StackPower';
import FAQSection from '../FAQSection/FAQSection';
import ClientStory from '../ClientStory/ClientStory';
import ContactUs from '../ContactUs/ContactUs';



const Home = () => {
    return (
        <div>
           
            <Banner></Banner> 
            
            <Specialized></Specialized>
            <Services></Services>
             <Development></Development> 
            <ChooseUs></ChooseUs>
            <StackPower></StackPower>
            <FAQSection></FAQSection>
            <ClientStory></ClientStory>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;