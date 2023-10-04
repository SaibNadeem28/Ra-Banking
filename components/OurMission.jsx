// components/MissionSection.js
import styled from 'styled-components';
import Image from 'next/image';

const MissionContainer = styled.div`
    display: flex;
    background-color: #FFF; 
    padding: 50px 100px; 
    align-items: center;
    justify-content: center; // Center items horizontally

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    padding-right: 50px;
    display: flex;
    align-items: center;  
    justify-content: center; 
    margin-left: 100px; 

    img {
        max-width: 100%;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        padding-right: 0;
        padding-bottom: 20px;
        margin-right: 0; 
    }
`;


const ContentContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;  
    text-align: justify;   
`;

const MissionHeader = styled.div`
    font-size: 14px;
    text-transform: uppercase;
    font-weight: normal;
    margin-bottom: 20px;
    margin-right: 100px;
    color: #000
`;

const MissionTitle1 = styled.h2`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-right: 190px;
    line-height: 1.3;
    color: #000;
`;

const MissionTitle2 = styled.h2`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-right: 60px;
    line-height: 1.3;
    color: #000;
`;

const MissionTitle3 = styled.h2`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-right: -100px;
    line-height: 1.3;
    color: #000;
`;

const MissionDescription = styled.p`
    font-size: 16px;
    margin-bottom: 30px;
    max-width: 500px;
    color: #000
`;

const Button = styled.a`
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #555;
    }
`;

const MissionSection = () => {
    return (
        <MissionContainer>
            <ImageContainer>
                <Image 
                    src="/mission.svg" 
                    alt="Team working on a project" 
                    width={400}  
                    height={400} 
                />
            </ImageContainer>
            <ContentContainer>
                <MissionHeader>OUR MISSION</MissionHeader>
                <MissionTitle1>Bridging to Europe </MissionTitle1>
                    <MissionTitle2> Building Legacies </MissionTitle2> 
                    <MissionTitle3> Benefiting Humanity </MissionTitle3>
                <MissionDescription>
                At RA Banking, our mission is to serve as the trusted bridge to European financial markets, empowering our clients with specialized services and insights. We are dedicated to transforming individual wealth into generational assets, fostering a legacy of prosperity. As we navigate the complexities of global finance, we remain steadfast in our commitment to ethical practices, ensuring that our growth contributes positively to humanity and the communities we touch.
                </MissionDescription>
            </ContentContainer>
        </MissionContainer>
    );
};

export default MissionSection;
