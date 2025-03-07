import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { TinyText } from "../../styles/fonts";
import { SectionContainer } from "../../styles/sectionContainer";
import SectionHeader from "../../componentes/sectionHeader";
import { AccordionCard } from "../../componentes/accordionCard";
import { Fragment, useState } from "react";

export default function FAQ() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const handleCardClick = (cardId: number) => {
        setActiveCard(activeCard === cardId ? null : cardId);
    };

    const faqItems = [
        {
            title: "Why choose Yito?",
            description: (
                <>
                    Finding the right senior talent is tough – not to mention
                    expensive. Salaries can start at £50,000, plus the extra
                    hiring costs. And once they’re on board, there’s no hitting
                    pause during slow periods. <br />
                    <br />
                    With Yito, you skip those headaches. Our subscription
                    service gives you top-tier creative support with the
                    flexibility to pause or cancel whenever you need. Get the
                    talent you want, when you need it, on your terms. <br />
                    <br />
                    Your subscription with Yito could save you a minimum of{" "}
                    <TinyText color={Color.BluePurple} fontWeight={"bold"}>
                        £31,000
                    </TinyText>{" "}
                    per year.* <br />
                    <br />
                    *Assuming a £50,000 per year full time senior talent salary,
                    according to Glassdoor.
                </>
            ),
        },
        {
            title: "What services does Yito offer?",
            description: (
                <>
                    We provide comprehensive design, development and copywriting
                    services. Our expert team experts is dedicated to bringing
                    your creative projects to life with high-quality work that
                    meets your business needs.
                </>
            ),
        },
        {
            title: "How does the subscription model work?",
            description: (
                <>
                    Our subscription model is simple and transparent. Choose a
                    plan that suits your business, and gain access to unlimited
                    projects and revisions for a flat monthly fee. This approach
                    ensures you can scale your creative output without worrying
                    about individual project costs.
                </>
            ),
        },
        {
            title: "Can I change my subscription plan?",
            description: (
                <>
                    Absolutely! You can upgrade, downgrade, or cancel your
                    subscription at any time. Our flexible plans are designed to
                    grow with your business, giving you the freedom to adjust
                    your subscription as your needs change.
                </>
            ),
        },
        {
            title: "How fast will I receive my completed projects?",
            description: (
                <>
                    Turnaround times vary, but we typically deliver within a few
                    business days. We prioritise efficiency and quality to
                    ensure you receive your projects swiftly without
                    compromising on the standard of work.
                </>
            ),
        },

        {
            title: "What if I'm not satisfied with a delivered project?",
            description: (
                <>
                    Your satisfaction is our top priority. If you're not 100%
                    satisfied with the work delivered, we offer unlimited
                    revisions until it meets your expectations. Our goal is to
                    ensure you're thrilled with the final product.
                </>
            ),
        },
        {
            title: "How does Yito ensure the quality of its services?",
            description: (
                <>
                    Quality assurance is integral to our process. All projects
                    are reviewed and approved by our directors to maintain high
                    standards. Additionally, our team consists of skilled
                    professionals who excel in their respective fields, ensuring
                    that every project we deliver is of premium quality.
                </>
            ),
        },

        {
            title: "How does Yito's loyalty program work?",
            description: (
                <>
                    We love our long-term partners! Stay with us for six months
                    and we'll treat you to a free week of Yito Boost as a thank
                    you.
                </>
            ),
        },

        {
            title: "How does Yito support sustainability?",
            description: (
                <>
                    For every month you're with us, we'll plant 50 trees on
                    behalf of your business. This initiative is part of our
                    effort to positively contribute to the environment and
                    support our clients in making a sustainable impact.
                </>
            ),
        },

        {
            title: "Is there a catch to having unlimited requests?",
            description: (
                <>
                    There's no catch! Our aim is to offer a flexible,
                    high-quality service that adapts to your changing needs. The
                    only limitation is that we complete tasks sequentially to
                    maintain high standards.
                </>
            ),
        },
    ];

    return (
        <FAQSection as="section">
            <SectionHeader
                sectionTitle="Your questions answered"
                overlineText="FAQ"
            />

            <FAQList>
                {faqItems.map((card, index) => (
                    <Fragment key={index}>
                        <AccordionCard
                            cardHeading={card.title}
                            cardContent={card.description}
                            cardId={index + 1}
                            isActive={activeCard === index + 1}
                            onClick={handleCardClick}
                        />
                    </Fragment>
                ))}
            </FAQList>
        </FAQSection>
    );
}

const FAQSection = styled(SectionContainer)``;

const FAQList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 500px) {
        gap: 2rem;
    }
`;
