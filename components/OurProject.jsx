import styled from 'styled-components';
import Image from 'next/image';

const FeaturedProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 150px;
  background-color: #FFF;
  max-width: 1200px; 
  margin: 0 auto; 
`;

const FeaturedTextContainer = styled.div`
  flex: 1;
`;

const FeaturedTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 30px;
  font-weight: bold;
`;

const FeaturedSubtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: transparent;
  border: 1px solid #000;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #000;
    color: #FFF;
  }
`;

const ImageContainer = styled.div`
  flex: 1.5;
  position: relative;
  width: 60%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
`;

const ImageTitle = styled.p`
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
`;

const ImageSubtitle = styled.p`
  font-size: 16px;
`;

const FeaturedProjects = () => {
  return (
    <FeaturedProjectsContainer>
      <FeaturedTextContainer>
      <FeaturedSubtitle>FEATURED PROJECTS</FeaturedSubtitle>
        <FeaturedTitle>DISCOVER OUR UNDERCONSTRUCTION AND COMPLETE PROJECTS</FeaturedTitle>
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
