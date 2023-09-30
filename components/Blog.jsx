import styled from 'styled-components';

const NewsContainer = styled.div`
    padding: 50px;
    text-align: center;
`;

const NewsHeader = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 40px;
`;

const ExploreButton = styled.button`
    margin-bottom: 30px;
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

const NewsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

const NewsCard = styled.div`
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const NewsImage = styled.img`
    width: 100%;
    height: auto;
`;

const NewsTitle = styled.h3`
    margin: 20px;
    font-size: 1.5rem;
`;

const NewsDate = styled.p`
    color: #999;
`;

const NewsAuthor = styled.p``;

const LatestNews = () => {
    return (
        <NewsContainer>
            <NewsHeader>Latest News & Events</NewsHeader>
            <ExploreButton>Explore All</ExploreButton>
            
            <NewsGrid>
                {/* Repeat this NewsCard for each news item */}
                <NewsCard>
                    <NewsImage src="/lockup black.png" alt="News Title" />
                    <NewsTitle>Apartments Designed by The Leading Interior Experts</NewsTitle>
                    <NewsDate>May 19, 2023</NewsDate>
                    <NewsAuthor>Nicole Willis</NewsAuthor>
                </NewsCard>
                {/* ... */}
            </NewsGrid>
        </NewsContainer>
    );
};

export default LatestNews;
