import styled from "@emotion/styled";
import { SectionContainer } from "../../styles/sectionContainer";
import SectionHeader from "../../componentes/sectionHeader";
import ServiceCard from "../../componentes/serviceCard";

export default function Services() {
    const popularServices = [
        "Logos and Branding",
        "Website Design",
        "Brand Guidelines",
        "Webflow Development",
        "Newsletter Emails",
        "Website & Blog Copywriting",
        "Social Media Graphics",
        "Design Systems",
    ];

    const additionalServices = [
        "Email Copywriting",
        "Landing Pages",
        "Sales & Marketing Emails",
        "Presentations & Pitch Decks",
        "HTML Ad Banners",
        "Social Media Ads",
        "WordPress Development",
        "Flyers & Brochures",
    ];

    const otherServices = [
        "Google Display Ads",
        "PPC Ads    ",
        "Banner Ads",
        "SEO",
        "Maintenance & Hosting",
        "HubSpot Development",
        "Automation",
        "And more...",
    ];

    return (
        <SectionContainer className="section--services">
            <SectionHeader
                sectionTitle="See what we can do for you"
                sectionSubtitle="       We're your go-to creative partner, offering a range of services that will elevate your brand and keep things running smoothly."
                overlineText="SERVICES"
            />
            <ServiceCardsWrapper>
                <ServiceCard
                    cardHeading="Most popular"
                    buttonText="See Example"
                    serviceList={popularServices}
                    hasBackground={true}
                ></ServiceCard>
                <ServiceCard serviceList={additionalServices}></ServiceCard>
                <ServiceCard serviceList={otherServices}></ServiceCard>
            </ServiceCardsWrapper>
        </SectionContainer>
    );
}

const ServiceCardsWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
`;
