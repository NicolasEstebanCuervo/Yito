import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
} from "../../assets/SVGIcons";
import { YitoLogoSVG } from "../../assets/SVGFigures";
import { SmallerLinkText, TinyText, TinyLinkText } from "../../styles/fonts";

export default function Footer() {
    return (
        <FooterSection>
            <LogoWrapper>
                <YitoLogoSVG />
            </LogoWrapper>
            <FooterLinksWrapper>
                <div>
                    <SmallerLinkText href="">How it works</SmallerLinkText>
                    <SmallerLinkText href="">Benefits</SmallerLinkText>
                    <SmallerLinkText href="">Portfolio</SmallerLinkText>
                    <SmallerLinkText href="">Services</SmallerLinkText>
                    <SmallerLinkText href="">Pricing</SmallerLinkText>
                </div>

                <div>
                    <FacebookIcon color={Color.SoftWhite} />
                    <InstagramIcon color={Color.SoftWhite} />
                    <LinkedinIcon color={Color.SoftWhite} />
                </div>
            </FooterLinksWrapper>

            <FooterSeparator />
            <LegalInfoWrapper>
                <TinyText color={Color.LightSilver}>
                    © 2024 Yito. All rights reserved.
                </TinyText>
                <div>
                    <TinyLinkText href="">Terms & Conditions</TinyLinkText>
                    <TinyLinkText href="">Privacy Policy</TinyLinkText>
                </div>
            </LegalInfoWrapper>
        </FooterSection>
    );
}

const FooterSection = styled.footer`
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

const LogoWrapper = styled.div`
    width: 80px;
    align-self: start;

    @media (max-width: 900px) {
        align-self: center;
    }
`;

const FooterLinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 2rem;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        :nth-child(1) {
        @media (max-width: 650px) {
            flex-direction: column;
        }
    }
    }



    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const FooterSeparator = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.18);
`;

const LegalInfoWrapper = styled.div`
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
