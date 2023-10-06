import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sizes = {
    tablet: '768px',
    phone: '576px',
};

const device = {
    tablet: `(max-width: ${sizes.tablet})`,
    phone: `(max-width: ${sizes.phone})`,
};

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 50px 100px;
    background-color: #111;
    color: #ebebeb;
    position: relative;

    @media ${device.tablet} {
        flex-direction: column;
        padding: 30px 50px;
        align-items: center;
    }

    @media ${device.phone} {
        padding: 20px 30px;
    }
`;

const Logo = styled.img`
    max-width: 150px;
    margin-bottom: 20px;

    @media ${device.tablet} {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`;

const Section = styled.div`
    flex: 1;
    margin-bottom: 20px;

    @media ${device.tablet} {
        text-align: center;
        width: 100%;
    }
`;

const Header = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #fff;

    @media ${device.phone} {
        font-size: 1.2rem;
    }
`;

const Address = styled.p`
    margin-bottom: 5px;
    color: #ebebeb;
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

    @media ${device.tablet} {
        width: 100%;
    }
`;

const SubmitButton = styled.button`
    padding: 10px 15px;
    background-color: #8a8a8a;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0b0909;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    @media ${device.tablet} {
        position: static;
        margin-top: 20px;
        justify-content: center;
    }
`;

const Icon = styled.a`
    color: #ebebeb;
    font-size: 1.2rem;

    @media ${device.phone} {
        font-size: 1.5rem;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Section>
                <Logo src='/lockup white.svg' alt="Logo" />
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
