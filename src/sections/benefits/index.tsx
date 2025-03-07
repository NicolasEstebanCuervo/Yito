import styled from "@emotion/styled";
import {
    flexibility,
    guarantee,
    quality,
    scalability,
    sustainability,
    transparency,
} from "../../assets/images";
import { SectionContainer } from "../../styles/sectionContainer";
import SectionHeader from "../../componentes/sectionHeader";
import BenefitCard from "../../componentes/benefitCard";

export default function Benefits() {
    return (
        <BenefitsSection as="section" id="benefitsSection">
            <SectionHeader
                sectionTitle="Why Yito? We're glad you asked…"
                sectionSubtitle="       Say farewell to flaky freelancers and sayonara to
                    skyrocketing senior salaries. It's time to do things
                    differently."
                overlineText="BENEFITS"
            />

            <BenefitCardsContainer>
                <BenefitCard
                    imgSrc={quality}
                    imgAlt="Cards with checkmarks indicating completed tasks, representing a focus on quality work"
                    cardHeading="Quality work"
                    cardContent="Everything is director-approved - and trust us, they've been there, done it and got the novelty t-shirts to prove it."
                />
                <BenefitCard
                    imgSrc={scalability}
                    imgAlt="Card showing an 'update' button, symbolizing the concept of swift scaling"
                    cardHeading="Swift scaling"
                    cardContent="Need to ramp up or slow down? No problem! Adjust your subscription as your workload changes."
                />
                <BenefitCard
                    imgSrc={transparency}
                    imgAlt="Switch button with 'You Plan' label, representing the option to easily cancel or activate the plan"
                    cardHeading="No strings or surprises"
                    cardContent="Pause, cancel, skip a month - it's all in your hands, with zero hidden fees."
                />
                <BenefitCard
                    imgSrc={flexibility}
                    imgAlt="Cards with profile pictures and checkmarks, representing the inclusion of talent"
                    cardHeading="Top talent on a single salary"
                    cardContent="Design, copy, dev, project management - all the pros you need are included in your price."
                />
                <BenefitCard
                    imgSrc={sustainability}
                    imgAlt="AWS logo spinning, symbolizing the use of renewable energy to power servers"
                    cardHeading="Sustainability"
                    cardContent="All our servers are powered almost completely by renewable energy."
                />
                <BenefitCard
                    imgSrc={guarantee}
                    imgAlt="Calendar icon symbolizing a 14-day money-back guarantee"
                    cardHeading="Money where our mouths are"
                    cardContent="We've never had to do it, but if you're not happy after 14 days, you'll get your money back, no questions asked."
                />
            </BenefitCardsContainer>
        </BenefitsSection>
    );
}

const BenefitsSection = styled(SectionContainer)``;

const BenefitCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
