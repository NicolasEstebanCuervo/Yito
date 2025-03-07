import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { cloudlineElement, backgroundPattern } from "../../assets/images";
import { NarrowStarIcon } from "../../assets/SVGIcons";
import { MediumSmallText, SmallText } from "../../styles/fonts";
import OverlineText from "../../componentes/overlineText";
import { SectionContainer } from "../../styles/sectionContainer";

export default function CaseStudy() {
    return (
        <CaseStudySection as="section">
            <CaseStudyBackgroundImage
                src={backgroundPattern}
                alt="Background pattern"
            />

            <CaseStudyContent>
                <OverlineText
                    text="CASE STUDY"
                    textColor={Color.SoftWhite}
                    icon={<NarrowStarIcon color={Color.SoftWhite} />}
                />

                <MediumSmallText color={Color.SoftWhite} fontWeight={500}>
                    “Yito has revolutionised our digital strategy, dramatically
                    improving our website and social media engagement, with fast
                    turnarounds and high-quality content. This partnership not
                    only enhanced our sales cycle efficiency but also expanded
                    our access to a broader range of marketing channels,
                    capabilities we couldn't have imagined achieving on our
                    own.”
                </MediumSmallText>

                <CaseStudyAuthorDetails>
                    <MediumSmallText color={Color.SoftWhite}>
                        Chares Rogers
                    </MediumSmallText>
                    <SmallText color={Color.SoftWhite}>
                        Co-Founder & CEO at Cloudline
                    </SmallText>
                </CaseStudyAuthorDetails>
            </CaseStudyContent>

            <CaseStudyImageWrapper>
                <CaseStudyImage
                    src={cloudlineElement}
                    alt="Screenshots of a website showcasing the digital transformation of a brand, highlighting improvements in design, content, and user engagement."
                />
            </CaseStudyImageWrapper>
        </CaseStudySection>
    );
}

const CaseStudySection = styled(SectionContainer)`
    flex-direction: row;
    padding: 0;
    position: relative;
    background: linear-gradient(
        90deg,
        rgba(18, 103, 103, 1) 17%,
        rgba(18, 103, 103, 1) 50%,
        rgba(60, 132, 140, 1) 83%
    );

    @media (max-width: 1100px) {
        flex-direction: column;
    }
`;

const CaseStudyBackgroundImage = styled.img`
    position: absolute;
    width: 100%;
    z-index: 0;
`;

const CaseStudyContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1;
    z-index: 5;
    padding: 3rem;

    @media (max-width: 500px) {
        padding: 3rem 1rem;
    }
`;

const CaseStudyAuthorDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const CaseStudyImageWrapper = styled.div`
    flex: 1;
    z-index: 5;

    @media (min-width: 900px) {
        padding: 3rem 1.5rem;
    }
`;

const CaseStudyImage = styled.img`
    width: 100%;
    max-height: 500px;
`;
