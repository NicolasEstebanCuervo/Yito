import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import {
    testimonialImage1,
    testimonialImage2,
    testimonialImage3,
    testimonialImage4,
    backgroundPattern,
} from "../../assets/images";
import SectionHeader from "../../componentes/sectionHeader";
import TestimonialCard from "../../componentes/testimonialCard";
import { SectionContainer } from "../../styles/sectionContainer";

export default function Testimonials() {
    const testimonials = [
        {
            image: testimonialImage1,
            name: "Sofia Martínez",
            role: "CEO",
            comment:
                "Yito's team is creative and technically sound. They delivered solutions that exceeded our expectations, making a real impact on our business. I highly recommend them for any company seeking innovative ideas.",
            alt: "Testimonial from Sofia Martínez",
        },
        {
            image: testimonialImage2,
            name: "David Hernández",
            role: "Product Manager",
            comment:
                "Yito's professional approach and commitment to excellence have transformed our brand. Their tailored solutions helped us improve our performance and connect better with our customers. We've seen notable growth in key areas thanks to their support.",
            alt: "Testimonial from David Hernández",
        },
        {
            image: testimonialImage3,
            name: "Laura González",
            role: "Marketing Director",
            comment:
                "Yito has helped us grow our online presence significantly. Their strategies boosted our engagement and helped us stand out in a competitive market. We saw a noticeable increase in conversions and brand awareness.",
            alt: "Testimonial from Laura González",
        },
        {
            image: testimonialImage4,
            name: "Miguel Rodríguez",
            role: "Creative Director",
            comment:
                "Yito's creativity and attention to detail have elevated our campaigns. Their innovative ideas brought our vision to life, delivering impactful results. We’ve achieved great success with their partnership in our creative projects.",
            alt: "Testimonial from Miguel Rodríguez",
        },
    ];

    return (
        <TestimonialsSection>
            <BackgroundImage src={backgroundPattern} alt="" />
            <GradientOverlayLeft />
            <SectionHeader
                sectionTitle="This is why we do what we do"
                sectionSubtitle="We love our clients - and they´ve got some pretty great things to say about working with us"
                overlineText="TESTIMONIALS"
                titleColor={Color.SoftWhite}
                subtitleColor={Color.SoftWhite}
                iconColor={Color.SoftWhite}
            />

            <TestimonialsWrapper>
                {[...testimonials, ...testimonials].map(
                    (testimonial) => (
                        <>
                            <TestimonialCard
                                key={`${testimonial.name}-1`}
                                imgSrc={testimonial.image}
                                imgAlt={testimonial.alt}
                                customerName={testimonial.name}
                                customerRole={testimonial.role}
                                customerComment={testimonial.comment}
                            />
                        </>
                    )
                )}
            </TestimonialsWrapper>
            <GradientOverlayRight />
        </TestimonialsSection>
    );
}

const TestimonialsSection = styled(SectionContainer)`
    max-width: 100vw;
    overflow: hidden;
    position: relative;
    background: ${Color.DeepMidnight};
    white-space: pre-wrap;
`;

const BackgroundImage = styled.img`
    position: absolute;
    width: 100%;
    z-index: 0;
    height: 100%;
    object-fit: cover;
`;

const TestimonialsWrapper = styled.div`
    animation: slide 50s linear infinite;
    display: flex;
    gap: 2rem;
    width: calc(430px * 4);

    @keyframes slide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }

    @media (max-width: 500px) {
        width: calc(270px * 4);
    }
`;

const GradientOverlayLeft = styled.div`
    background: linear-gradient(
        -90deg,
        rgba(21, 21, 54, 0),
        ${Color.DeepMidnight} 91%
    );
    width: 100px;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 20;
`;

const GradientOverlayRight = styled.div`
    background: linear-gradient(
        90deg,
        rgba(21, 21, 54, 0),
        ${Color.DeepMidnight} 91%
    );
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    z-index: 20;
`;
