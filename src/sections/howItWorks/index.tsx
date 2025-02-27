import styled from "@emotion/styled";
import {
    BrokenGradientLineSVG,
    GradientVerticalLineLightSVG,
    GradientVerticalLineStrongSVG,
} from "../../assets/SVGFigures";
import {
    pickAPlan,
    receiveAndRefine,
    submitYourRequests,
} from "../../assets/images";
import { SectionContainer } from "../../styles/sectionContainer";
import SectionHeader from "../../componentes/sectionHeader";
import HowItWorksCard from "../../componentes/howItWorksCard";

export default function HowItWorks() {
    return (
        <SectionContainer className="section--how-it-works">
            <SectionHeader
                sectionTitle="Work that wows in theree simple steps"
                sectionSubtitle="Why should delivering quality creative work be complicated? We´ve boiled it down to theree easy steps that get you results,fast."
                overlineText="HOW IT WORKS"
            />
            <HowItWorksCardsWrapper>
                <HowItWorksCard
                    imgSrc={pickAPlan}
                    decorativeLine={<GradientVerticalLineStrongSVG />}
                    cardHeading="Pick a plan"
                    cardContent="Choose a plan, get instant access to our team and submit unlimited tasks with no individual project fees."
                    hrefCard=""
                    linkText="See our plans"
                />

                <HowItWorksCard
                    imgSrc={submitYourRequests}
                    decorativeLine={<BrokenGradientLineSVG />}
                    cardHeading="Submit your requests"
                    cardContent="We'll work on one task at a time and on average you'll receive the work in just a few business days."
                    hrefCard=""
                    linkText="See our services"
                />
                <HowItWorksCard
                    imgSrc={receiveAndRefine}
                    decorativeLine={<GradientVerticalLineLightSVG />}
                    cardHeading="Receive and refine"
                    cardContent="Review delivered work and request unlimited revisions until it's exactly how you envisioned it."
                    hrefCard=""
                    linkText="Book a discovery call"
                />
            </HowItWorksCardsWrapper>
        </SectionContainer>
    );
}

const HowItWorksCardsWrapper = styled.section`
    display: flex;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;
