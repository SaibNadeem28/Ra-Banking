import styled from 'styled-components';
import Image from 'next/image';

const ServicesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
`;

const ImageSection = styled.div`
    width: 50%;
`;

const TextSection = styled.div`
    width: 50%;
    padding-left: 40px;
`;

const HeaderSmall = styled.p`
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 20px;
`;

const HeaderLarge = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
`;

const ServiceList = styled.ul`
    list-style-type: disc;
    padding-left: 20px;
    line-height: 1.8;
`;

const ServicesSection = () => {
    return (
        <ServicesContainer>
            {/* Image Section */}
            <ImageSection>
                <Image src="/lockup black.png" width={500} height={700} alt="Living Space" />
            </ImageSection>
            
            {/* Text Section */}
            <TextSection>
                <HeaderSmall>Our Services</HeaderSmall>
                <HeaderLarge>Business Setup & Registration</HeaderLarge>
                <ServiceList>
                    <li>Operational Optimization</li>
                    <li>Comprehensive Business Plan Writing</li>
                    <li>Global Business Start-up Assistance</li>
                    <li>Financial Forecasting & Budgeting</li>
                    <li>Business Process Outsourcing</li>
                    <li>Human Resources & Talent Acquisition</li>
                    <li>Training & Development Programs</li>
                    <li>Franchising Opportunities & Consultation</li>
                    <li>E-commerce Setup & Strategy</li>
                </ServiceList>
            </TextSection>
        </ServicesContainer>
    );
};

export default ServicesSection;
