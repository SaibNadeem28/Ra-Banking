import styled from 'styled-components';
import Image from 'next/image';

const sizes = {
    desktop: '1200px',
    tablet: '768px',
    phone: '576px',
};

const device = {
    desktop: `(max-width: ${sizes.desktop})`,
    tablet: `(max-width: ${sizes.tablet})`,
    phone: `(max-width: ${sizes.phone})`,
};

const FeaturedProjectsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 150px;
    background-color: #d4d4d4;
    margin: 0 auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%; // Ensure the container takes the full width

    @media ${device.tablet} {
        flex-direction: column;
        padding: 50px;
    }
`;

const FeaturedTextContainer = styled.div`
    flex: 1;

    @media ${device.tablet} {
        text-align: center;
        margin-bottom: 30px;
    }
`;

const FeaturedTitle = styled.h1`
    font-size: 48px;
    margin-bottom: 30px;
    font-weight: bold;
    color: #0b0909;

    @media ${device.tablet} {
        font-size: 36px;
    }
`;

const FeaturedSubtitle = styled.h2`
    font-size: 18px;
    margin-bottom: 50px;
    color: #0b0909;
`;

const ImageContainer = styled.div`
    flex: 1.5;
    position: relative;
    width: 60%;
    height: 500px;
    border-radius: 8px;
    overflow: hidden;

    @media ${device.tablet} {
        width: 100%;
        height: auto;
    }
`;

const ImageTitle = styled.p`
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
    color: #0b0909;
`;

const ImageSubtitle = styled.p`
    font-size: 16px;
    color: #0b0909;
`;

const FeaturedProjects = () => {
    return (
        <FeaturedProjectsContainer>
            <FeaturedTextContainer>
                <FeaturedSubtitle>FEATURED PROJECTS</FeaturedSubtitle>
                <FeaturedTitle>Collaborating with industry leaders to deliver unparalleled financial solutions and insights for our clients</FeaturedTitle>
            </FeaturedTextContainer>
            <ImageContainer>
                <Image
                    src="/lockup black.png"
                    alt="Your alt text"
                    width={500}  
                    height={500}  
                    layout="responsive"
                />
                <ImageTitle>PARAGON HOTEL CONCEPT</ImageTitle>
                <ImageSubtitle>NEW ORLEANS, LA</ImageSubtitle>
            </ImageContainer>
        </FeaturedProjectsContainer>
    );
};

export default FeaturedProjects;
