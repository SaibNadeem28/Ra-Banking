import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: url("/hero.png") center center/cover no-repeat;
    color: #ffffff;

    @media (max-width: 768px) { 

    }

    @media (max-width: 480px) { 
       
    }
`;

const RelandLogo = styled.img`
    height: 40px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        height: 30px;
    }
`;

const Heading = styled.h1`
    font-size: 48px;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const SubText = styled.p`
    font-size: 18px;
    margin-bottom: 40px;
    max-width: 600px;
    text-align: justify;
    color: #ffffff;
    margin-left: 10px;
    margin-right: 10px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Button = styled.a`
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s;
    margin-right: 20px;

    &:hover {
        background-color: #555;
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
    }
`;

const HomePage = () => {
    return (
        <Container id='home'>
            <Heading>Your Wealth,&nbsp;Our&nbsp;Wisdom:<br />A Partnership for Prosperity<br />with RA Banking</Heading>
            <SubText>
            At RA Banking, we serve as your gateway to European markets, offering specialized services and insights that empower you to make informed decisions on your financial journey. We are committed to transforming your wealth into generational assets, all while fostering a culture of giving back to humanity.
            </SubText>
            <Button href='#contact'>CONNECT NOW</Button>
        </Container>
    );
};

export default HomePage;
