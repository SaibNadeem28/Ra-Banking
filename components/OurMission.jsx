import styled from 'styled-components';
import Image from 'next/image';

const MissionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF; 
    padding: 50px 100px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const ImageContainer = styled.div`
    width: 80%;
    margin-bottom: 20px;

    img {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        width: 60%;
    }
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
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
    line-height: 1.3;
    color: #000;

    @media (max-width: 768px) {
        font-size: 28px;
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
        <MissionContainer>
            <ImageContainer>
                <Image 
                    src="/mission.svg" 
                    alt="Team working on a project" 
                    layout="responsive"
                    width={400}  
                    height={400} 
                />
            </ImageContainer>
            <MissionHeader>OUR MISSION</MissionHeader>
            <MissionTitle>Bridging to Europe</MissionTitle>
            <MissionTitle>Building Legacies</MissionTitle>
            <MissionTitle>Benefiting Humanity</MissionTitle>
            <MissionDescription>
                At RA Banking, our mission is to serve as the trusted bridge to European financial markets, empowering our clients with specialized services and insights. We are dedicated to transforming individual wealth into generational assets, fostering a legacy of prosperity. As we navigate the complexities of global finance, we remain steadfast in our commitment to ethical practices, ensuring that our growth contributes positively to humanity and the communities we touch.
            </MissionDescription>
        </MissionContainer>
    );
};

export default MissionSection;
