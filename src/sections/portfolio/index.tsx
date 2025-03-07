import styled from "@emotion/styled";
import {
    portfolioImage1,
    portfolioImage2,
    portfolioImage3,
    portfolioImage4,
} from "../../assets/images";
import { SectionContainer } from "../../styles/sectionContainer";
import SectionHeader from "../../componentes/sectionHeader";

export default function Portfolio() {
    return (
        <PortfolioSection as="section" id="portfolioSection">
            <SectionHeader
                sectionTitle="The proof is in the pixels"
                sectionSubtitle="Here's a taste of the high-impact designs and sites we've crafted to give businesses that extra boost."
                overlineText="PORTFOLIO"
            />

            <PortfolioImagesContainer>
                <PortfolioImage
                    src={portfolioImage1}
                    alt="Design of a financial app with an intuitive interface for managing transactions and budgets"
                />
                <PortfolioImage
                    src={portfolioImage2}
                    alt="Brand identity design showcasing color palette, typography, and visual elements for brand representation"
                />
                <PortfolioImage
                    src={portfolioImage3}
                    alt="Social media platform design featuring user profiles, posts, and interaction elements"
                />
                <PortfolioImage
                    src={portfolioImage4}
                    alt="App design for work and meetings, featuring video calls, file management, and various productivity tools"
                />
            </PortfolioImagesContainer>
        </PortfolioSection>
    );
}

const PortfolioSection = styled(SectionContainer)``;

const PortfolioImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const PortfolioImage = styled.img`
    width: 100%;
    max-height: 400px;
    border-radius: 10px;
`;
