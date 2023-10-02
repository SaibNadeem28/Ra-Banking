import styled from 'styled-components';
import Image from 'next/image';

const sizes = {
    tablet: '768px',
    phone: '576px',
};

const device = {
    tablet: `(max-width: ${sizes.tablet})`,
    phone: `(max-width: ${sizes.phone})`,
};

const ServicesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;

    @media ${device.tablet} {
        flex-direction: column;
    }
`;

const ImageSection = styled.div`
    width: 50%;

    @media ${device.tablet} {
        width: 100%;
        margin-bottom: 20px;
    }
`;

const TextSection = styled.div`
    width: 50%;
    padding-left: 40px;

    @media ${device.tablet} {
        width: 100%;
        padding-left: 0;
    }
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
                <Image src="/lockup white.png" width={500} height={700} alt="Living Space" />
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
