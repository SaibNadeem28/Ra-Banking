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
    width: 100%;

    @media ${device.tablet} {
        flex-direction: column-reverse;
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
    font-size: 40px;
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

const SVGWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin-left: 50px;

    @media ${device.tablet} {
        width: 100%;
        margin-left: 0;
        margin-bottom: 30px;
    }
`;

const FeaturedProjects = () => {
    return (
        <FeaturedProjectsContainer id='projects'>
            <FeaturedTextContainer>
                <FeaturedSubtitle>FEATURED PROJECTS</FeaturedSubtitle>
                <FeaturedTitle>Collaborating with industry leaders to deliver unparalleled financial solutions and insights for our clients</FeaturedTitle>
            </FeaturedTextContainer>
            <SVGWrapper>
                <Image
                    src="/projects.svg"
                    alt="Your alt text"
                    width={500}  
                    height={500}  
                    layout="responsive"
                />
            </SVGWrapper>
        </FeaturedProjectsContainer>
    );
};

export default FeaturedProjects;
