import styled from 'styled-components';

const InquiryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
`;

const InquiryBox = styled.div`
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 60%;
`;

const InquiryHeader = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #000;
`;

const InquiryText = styled.p`
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #000;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    width: 40%;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #0b0909;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #8a8a8a;
    }
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #000;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 10px;
`;

const QuickInquiry = () => {
    return (
        <InquiryContainer>
            <InquiryBox>
                <InquiryHeader>Inquiry</InquiryHeader>
                <InquiryText>Got questions? Lets chat! We are eager to assist and guide you right away.</InquiryText>
                
                <Input type="text" placeholder="Your name" />
                <Input type="tel" placeholder="Phone number" />

                <CheckboxContainer>
                    <Checkbox />
                    <label>I accept Terms & Conditions for processing personal data</label>
                </CheckboxContainer>

                <SubmitButton>Submit</SubmitButton>
            </InquiryBox>
        </InquiryContainer>
    );
};

export default QuickInquiry;
