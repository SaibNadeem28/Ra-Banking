import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 100px;
    background-color: #111;
    color: #ebebeb;
`;

const Section = styled.div`
    flex: 1;
`;

const Header = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

const Address = styled.p`
    margin-bottom: 5px;
`;

const Email = styled.a`
    display: block;
    margin-bottom: 5px;
    color: #ebebeb;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const PhoneNumber = styled.a`
    display: block;
    color: #ebebeb;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Link = styled.a`
    display: block;
    margin-bottom: 10px;
    color: #ebebeb;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Input = styled.input`
    padding: 10px;
    width: 80%;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
`;

const SubmitButton = styled.button`
    padding: 10px 15px;
    background-color: #d9a567;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #c28f51;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 10px;
`;

const Icon = styled.a`
    color: #ebebeb;
    font-size: 1.2rem;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Section>
                <Header><img src='/lockup white.svg'></img></Header>
            </Section>
            <Section>
                <Header>CONTACT</Header>
                <Address>Quezon City, Manila, Philippines</Address>
                <Email href="mailto:relandgroup@mail.com">info@ra-banking.com</Email>
            </Section>
            <Section>
                <Header>USEFUL LINKS</Header>
                <Link href="#">Terms & Conditions</Link>
                <Link href="#">Privacy Policy</Link>
            </Section>
            <Section>
                <Header>NEWSLETTER</Header>
                <Input type="email" placeholder="Email address..." />
                <SubmitButton>{'>'}</SubmitButton>
            </Section>
            <SocialIcons>
                <Icon><FontAwesomeIcon icon={['fab', 'facebook-f']} /></Icon>
                <Icon><FontAwesomeIcon icon={['fab', 'instagram']} /></Icon>
                <Icon><FontAwesomeIcon icon={['fab', 'twitter']} /></Icon>
                <Icon><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></Icon>
            </SocialIcons>
        </FooterContainer>
    );
};

export default Footer;
