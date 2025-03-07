import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { backgroundHeader } from "../../assets/images";
import { InlineWidget } from "react-calendly";
import OverlineText from "../../componentes/overlineText";
import {
    InfinityIcon,
    PauseIcon,
    ThunderboltIcon,
} from "../../assets/SVGIcons";
import { SectionContainer } from "../../styles/sectionContainer";
import SectionHeader from "../../componentes/sectionHeader";

export default function Contact() {
    return (
        <ContactSection as="section" id="contactSection">
            <CaseStudyContent>
                <SectionHeader
                    sectionTitle="Let's chat"
                    sectionSubtitle="Got questions? Have some thoughts? Just want to say hello?
                    We'd love to hear from you! Whether you're ready to start a
                    project or just exploring your options, we're here to help.
                    Book a discovery call with us today."
                    overlineText="CONTACT"
                    alignItems="flex-start"
                    iconColor={Color.SoftWhite}
                    titleColor={Color.SoftWhite}
                    subtitleColor={Color.SoftWhite}
                />

                <CaseStudyAuthorDetails>
                    <OverlineText
                        text="Unlimited requests"
                        icon={<InfinityIcon color={Color.SoftWhite} />}
                        fontWeight="normal"
                        letterSpacing="0"
                        textColor={Color.SoftWhite}
                    />{" "}
                    <OverlineText
                        text="Pause or cancel anytime"
                        icon={<PauseIcon color={Color.SoftWhite} />}
                        fontWeight="normal"
                        letterSpacing="0"
                        textColor={Color.SoftWhite}
                    />{" "}
                    <OverlineText
                        text="Lightning turnaround"
                        icon={<ThunderboltIcon color={Color.SoftWhite} />}
                        fontWeight="normal"
                        letterSpacing="0"
                        textColor={Color.SoftWhite}
                    />
                </CaseStudyAuthorDetails>
            </CaseStudyContent>
            <InlineWidgetWrapper>
                <InlineWidget
                    styles={{
                        width: "100%",
                        height: "100%",
                        overflowY: "hidden",
                    }}
                    url="https://calendly.com/cuervorojas942/30min"
                ></InlineWidget>
            </InlineWidgetWrapper>
        </ContactSection>
    );
}

const ContactSection = styled(SectionContainer)`
    background: url(${backgroundHeader});
    background-size: cover;
    display: flex;
    flex-direction: row;
    min-height: 100vh;

    @media (max-width: 1100px) {
        flex-direction: column;
    }
`;

const CaseStudyContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    width: 50%;

    @media (max-width: 1100px) {
        width: 100%;
        padding: 3rem 1.5rem;
    }
`;

const CaseStudyAuthorDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const InlineWidgetWrapper = styled.div`
    width: 50%;
    height: 850px;
    overflow-y: hidden;

    @media (max-width: 1100px) {
        width: 80%;
    }

    @media (max-width: 800px) {
        width: 100%;
    }
`;