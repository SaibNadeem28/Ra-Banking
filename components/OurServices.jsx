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
        align-items: center;
    }
`;

const ImageSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.tablet} {
        width: 100%;
        margin-bottom: 20px;
    }
`;

const TextSection = styled.div`
    flex: 1;
    padding-left: 30px;

    @media ${device.tablet} {
        width: 100%;
        padding-left: 0;
        text-align: center;
    }
`;

const HeaderSmall = styled.p`
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 20px;

    @media ${device.phone}{
        font-size: 16px;
    }
`;

const HeaderLarge = styled.h1`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const ServiceList = styled.ul`
    list-style-type: disc;
    padding-left: 20px;
    line-height: 1.8;
    text-align: left;
`;

const ServicesSection = () => {
    return (
        <ServicesContainer id='services'>
            <ImageSection>
                <Image src="/services.svg" width={500} height={700} alt="Living Space" />
            </ImageSection>
            
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
