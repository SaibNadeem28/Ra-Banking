import styled from 'styled-components';

const TeamContainer = styled.div`
    padding: 50px;
    text-align: center;
`;

const TeamHeader = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 40px;
`;

const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

const MemberCard = styled.div`
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const MemberImage = styled.img`
    width: 100%;
    height: auto;
`;

const ViewAllButton = styled.button`
    margin-top: 30px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #555;
    }
`;

const TeamMembers = () => {
    return (
        <TeamContainer>
            <TeamHeader>Meet With Our Amazing Team Members</TeamHeader>
            
            <TeamGrid>
                {/* Repeat this MemberCard for each team member */}
                <MemberCard>
                    <MemberImage src="/lockup black.png" alt="Team Member Name" />
                </MemberCard>
                {/* ... */}
            </TeamGrid>
            
            <ViewAllButton>View All Members</ViewAllButton>
        </TeamContainer>
    );
};

export default TeamMembers;
