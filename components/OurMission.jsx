import styled from 'styled-components';
import Image from 'next/image';

const MissionContainer = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    background-color: #FFF; 
    padding: 50px 100px;
    text-align: left; 

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 20px;
        text-align: center;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    position: relative;
    width: 40%; 
    height: auto;
    border-radius: 8px;
    overflow: hidden;
    margin-right: 50px; // space between the image and text

    @media (max-width: 768px) {
        width: 80%;
        height: auto;
        margin-bottom: 20px;
        margin-right: 0; // reset the margin for mobile view
    }
`;

const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const MissionHeader = styled.div`
    font-size: 14px;
    text-transform: uppercase;
    font-weight: normal;
    margin-bottom: 20px;
    color: #000;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const MissionTitle = styled.h2`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 10px;
    line-height: 1.3;
    color: #000;

    @media (max-width: 768px) {
        font-size: 36px;
    }
`;

const MissionDescription = styled.p`
    font-size: 16px;
    margin-top: 20px;
    max-width: 700px;
    color: #000;

    @media (max-width: 768px) {
        font-size: 14px;
        max-width: 90%;
    }
`;

const MissionSection = () => {
    return (
        <MissionContainer id='about'>
            <ImageContainer>
                <Image 
                    src="/mission.svg" 
                    alt="Team working on a project" 
                    layout="responsive"
                    width={300}  
                    height={300} 
                />
            </ImageContainer>
            <TextContainer>
                <MissionHeader>OUR MISSION</MissionHeader>
                <MissionTitle>Bridging to Europe</MissionTitle>
                <MissionTitle>Building Legacies</MissionTitle>
                <MissionTitle>Benefiting Humanity</MissionTitle>
                <MissionDescription>
                    At RA Banking, our mission is to serve as the trusted bridge to European financial markets, empowering our clients with specialized services and insights. We are dedicated to transforming individual wealth into generational assets, fostering a legacy of prosperity. As we navigate the complexities of global finance, we remain steadfast in our commitment to ethical practices, ensuring that our growth contributes positively to humanity and the communities we touch.
                </MissionDescription>
            </TextContainer>
        </MissionContainer>
    );
};

export default MissionSection;
