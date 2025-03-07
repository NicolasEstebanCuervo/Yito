import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
} from "../../assets/SVGIcons";
import { YitoLogoSVG } from "../../assets/SVGFigures";
import { SmallerLinkText, TinyText, TinyLinkText } from "../../styles/fonts";
import { scrollToSection } from "../../App";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterLogoWrapper>
                <YitoLogoSVG />
            </FooterLogoWrapper>
            <FooterLinksContainer>
                <div>
                        <SmallerLinkText
                            onClick={() => scrollToSection("howItWorksSection")}
                        >
                            How it works
                        </SmallerLinkText>

                        <SmallerLinkText
                            onClick={() => scrollToSection("benefitsSection")}
                        >
                            Benefits
                        </SmallerLinkText>
                        <SmallerLinkText
                            onClick={() => scrollToSection("portfolioSection")}
                        >
                            Portfolio
                        </SmallerLinkText>
                        <SmallerLinkText
                            onClick={() => scrollToSection("servicesSection")}
                        >
                            Services
                        </SmallerLinkText>
                        <SmallerLinkText
                            onClick={() => scrollToSection("pricingSection")}
                        >
                            Pricing
                        </SmallerLinkText>
                </div>

                <div>
                    <FacebookIcon color={Color.SoftWhite} />
                    <InstagramIcon color={Color.SoftWhite} />
                    <LinkedinIcon color={Color.SoftWhite} />
                </div>
            </FooterLinksContainer>

            <Divider />
            <FooterLegalInfoContainer>
                <TinyText color={Color.LightSilver}>
                    © 2024 Yito. All rights reserved.
                </TinyText>
                <div>
                    <TinyLinkText>Terms & Conditions</TinyLinkText>
                    <TinyLinkText>Privacy Policy</TinyLinkText>
                </div>
            </FooterLegalInfoContainer>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 3rem 5rem;
    border-radius: 1rem 1rem 0 0;
    margin: 1rem 1rem 0 1rem;
    background: ${Color.CharcoalGray};
    width: 100%;
    max-width: 1500px;
`;

const FooterLogoWrapper = styled.div`
    width: 80px;
    align-self: start;

    @media (max-width: 900px) {
        align-self: center;
    }
`;

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 2rem;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        :nth-child-type(1) {
            @media (max-width: 650px) {
                flex-direction: column;
            }
        }
    }

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.18);
`;

const FooterLegalInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 2rem;
    text-align: center;

    div {
        display: flex;
        gap: 1rem;

        @media (max-width: 650px) {
            flex-direction: column;
            align-items: center;
        }
    }

    @media (max-width: 650px) {
        flex-direction: column;
        align-items: center;
    }
`;
