import styled from "@emotion/styled";
import { SectionContainer } from "../../styles/sectionContainer";
import SectionHeader from "../../componentes/sectionHeader";
import ServicesCard from "../../componentes/servicesCard";

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
        <ServicesSection as="section" id="servicesSection">
            <SectionHeader
                sectionTitle="See what we can do for you"
                sectionSubtitle="       We're your go-to creative partner, offering a range of services that will elevate your brand and keep things running smoothly."
                overlineText="SERVICES"
            />
            <ServicesCardsContainer>
                <ServicesCard
                    cardHeading="Most popular"
                    buttonText="See Example"
                    serviceList={popularServices}
                    hasBackground={true}
                ></ServicesCard>
                <ServicesCard serviceList={additionalServices}></ServicesCard>
                <ServicesCard serviceList={otherServices}></ServicesCard>
            </ServicesCardsContainer>
        </ServicesSection>
    );
}

const ServicesSection = styled(SectionContainer)``;

const ServicesCardsContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
`;
