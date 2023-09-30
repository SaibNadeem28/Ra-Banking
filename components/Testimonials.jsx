import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
    padding: 100px 0;
    text-align: center;
`;

const Testimonial = styled.div`
    display: inline-block;
    width: calc(33.33% - 20px);
    margin-right: 20px;
    vertical-align: top;
    &:last-child {
        margin-right: 0;
    }
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 20px;
    }
    blockquote {
        font-style: italic;
        margin-bottom: 20px;
        position: relative;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        &:before {
            content: "";
            position: absolute;
            top: 100%;
            left: 30px;
            border-width: 10px 10px 0;
            border-style: solid;
            border-color: #f9f9f9 transparent transparent transparent;
        }
    }
    h3 {
        margin-bottom: 10px;
    }
    p {
        color: #888;
    }
`;

const Testimonials = () => {
    return (
        <TestimonialsSection>
            <h2>TRUSTED BY THOUSANDS OF OUR HAPPY CUSTOMERS</h2>
            
            <Testimonial>
                <img src="/lockup black.svg" alt="Jeffrey Kreshek" />
                <blockquote>
                    {"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"}
                </blockquote>
                <h3>JEFFREY KRESHEK</h3>
                <p>NEW YORK</p>
            </Testimonial>

            <Testimonial>
                <img src="/lockup dark grey.svg" alt="Mike Stevenson" />
                <blockquote>
                    {"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"}
                </blockquote>
                <h3>MIKE STEVENSON</h3>
                <p>FLORIDA</p>
            </Testimonial>

            <Testimonial>
                <img src="/lockup light grey.svg" alt="Merrin Dardenne" />
                <blockquote>
                    {"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"}
                </blockquote>
                <h3>MERRIN DARDENNE</h3>
                <p>CHARLOTTE</p>
            </Testimonial>
        </TestimonialsSection>
    );
};

export default Testimonials;
