import styled from 'styled-components';
import CountUp from 'react-countup';

const StatsContainer = styled.div`
    display: flex;
    justify-content: center; /* Adjusted to center */
    align-items: center;
    background-color: #FAF3E0; 
    padding: 20px; /* Adjusted for consistent padding */
    gap: 40px; /* Sets a consistent gap between child elements */
`;

const StatBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; /* Centers the text if it breaks into multiple lines */
`;

const Number = styled.div`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Label = styled.div`
    font-size: 16px;
    color: #555;
`;

const StatsComponent = () => {
    return (
        <StatsContainer>
            <StatBox>
                <Number>
                    <CountUp end={100} duration={3} />
                </Number>
                <Label>COMPLETED PROJECTS</Label>
            </StatBox>
            <StatBox>
                <Number>
                    <CountUp end={10} duration={3} />
                </Number>
                <Label>YEARS OF EXPERIENCE</Label>
            </StatBox>
            <StatBox>
                <Number>
                    <CountUp end={50} duration={3} />
                </Number>
                <Label>PROJECTS UNDERWAY</Label>
            </StatBox>
            {/*<StatBox>
                <Number>
                    <CountUp end={45} duration={3} />
                </Number>
                <Label>JOINT VENTURES COMPLETED</Label>
            </StatBox>*/}
        </StatsContainer>
    );
};

export default StatsComponent;
