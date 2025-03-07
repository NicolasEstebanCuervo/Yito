import styled from "@emotion/styled";
import SectionHeader from "../../componentes/sectionHeader";
import FeatureSection from "../../componentes/featureCard";
import { SectionContainer } from "../../styles/sectionContainer";

export default function WorkingTogether() {
    return (
        <WorkingTogetherSection as="section">
            <SectionHeader
                sectionTitle="Go with the workflow"
                sectionSubtitle="We've refined how we work to make sure your projects flow smoothly, from start to finish."
                overlineText="WORKING TOGETHER"
                alignItems="flex-start"
            />
            <>
                <FeatureSection />
            </>
        </WorkingTogetherSection>
    );
}

const WorkingTogetherSection = styled(SectionContainer)`
    align-items: start;

    @media (max-width: 1200px) {
        align-items: center;
    }
`;
