import styled from 'styled-components';

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

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Input = styled.input`
    padding: 10px;
    flex: 1;
    border: none;
    border-radius: 5px;
`;

const SubmitButton = styled.button`
    padding: 10px 15px;
    margin-left: 10px;  // Space between input and button
    background-color: #8a8a8a;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0b0909;
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
                <Address>Blk 8 Lot 14 Camella Cielo Brgy.Kaybanban City of San Jose Del Monte Bulacan</Address>
                <Email href="mailto:relandgroup@mail.com">info@ra-banking.com</Email>
            </Section>
            <Section>
                <Header>USEFUL LINKS</Header>
                <Link href="#">Terms & Conditions</Link>
                <Link href="#">Privacy Policy</Link>
            </Section>
            <Section>
                <Header>NEWSLETTER</Header>
                <InputWrapper>
                    <Input type="email" placeholder="Email address..." />
                    <SubmitButton>{'>'}</SubmitButton>
                </InputWrapper>
            </Section>
            {/* <SocialIcons>
                // ...
            </SocialIcons> */}
        </FooterContainer>
    );
};

export default Footer;
