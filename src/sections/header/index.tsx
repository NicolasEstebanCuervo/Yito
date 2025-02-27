import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import {
    CheckIcon,
    InfinityIcon,
    PauseIcon,
    ThunderboltIcon,
    DiagonalArrowIcon,
} from "../../assets/SVGIcons";
import { YitoLogoSVG } from "../../assets/SVGFigures";
import {
    brymecLogo,
    cloudlineLogo,
    carichcareLogo,
    hidLogo,
    mobNetworkLogo,
    ncgLogo,
    whiteboxLogo,
    backgroundHeader,
} from "../../assets/images";
import {
    ExtraLargeText,
    SmallerText,
    SmallerLinkText,
} from "../../styles/fonts";

import Button from "../../componentes/button";
import OverlineText from "../../componentes/overlineText";
import { SectionContainer } from "../../styles/sectionContainer";

export default function Header() {
    const brandLogos = [
        brymecLogo,
        carichcareLogo,
        cloudlineLogo,
        hidLogo,
        mobNetworkLogo,
        ncgLogo,
        whiteboxLogo,
    ];

    return (
        <HeaderSection>
            <GradientOverlayLeft />
            <NavWrapper>
                <NavLinksWrapper>
                    <LogoWrapper>
                        <YitoLogoSVG />
                    </LogoWrapper>
                    <NavLinks>
                        <SmallerLinkText href="">How it works</SmallerLinkText>
                        <SmallerLinkText href="">Benefits</SmallerLinkText>
                        <SmallerLinkText href="">Portfolio</SmallerLinkText>
                        <SmallerLinkText href="">Services</SmallerLinkText>
                        <SmallerLinkText href="">Pricing</SmallerLinkText>
                    </NavLinks>
                </NavLinksWrapper>

                <NavButtonWrapper>
                    <Button
                        href=""
                        buttonText="Book a discovery call"
                        icon={<DiagonalArrowIcon color={Color.CharcoalGray} />}
                    />
                </NavButtonWrapper>
            </NavWrapper>

            <HeaderContent>
                <OverlineText
                    text="14-day money-back guarantee"
                    icon={<CheckIcon color={Color.SoftWhite} />}
                    fontWeight="normal"
                    letterSpacing="0"
                    borderColor={Color.SoftWhiteTransparent}
                    textColor={Color.SoftWhite}
                />
                <ExtraLargeText color={Color.SoftWhite}>
                    Your design and dev dream team. With a twist
                </ExtraLargeText>
                <SmallerText color={Color.SoftWhite}>
                    Get on-demand designers, developers, and project managers.
                    Pay one simple monthly fee and skip the hassle of hiring.
                </SmallerText>

                <ButtonWrapper>
                    <Button
                        href=""
                        buttonText="See plans"
                        icon={<DiagonalArrowIcon color={Color.CharcoalGray} />}
                    />
                </ButtonWrapper>

                <FeatureList>
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
                </FeatureList>
            </HeaderContent>

            <BrandsWrapper>
                <GalleryWrapper>
                    {[...brandLogos, ...brandLogos].map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`${index + 1} logo`}
                        />
                    ))}
                </GalleryWrapper>
            </BrandsWrapper>
            <GradientOverlayRight />
        </HeaderSection>
    );
}

const HeaderSection = styled(SectionContainer)`
    max-width: 100vw;
    overflow: hidden;
    position: relative;
    white-space: pre-wrap;
    background: url(${backgroundHeader});
    background-size: cover;
    position: relative;
`;

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 800px) {
        display: none;
    }
`;

const NavLinksWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const LogoWrapper = styled.div`
    width: 70px;
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const NavButtonWrapper = styled.div`
    width: 250px;

    @media (max-width: 1100px) {
        display: none;
    }
`;

const HeaderContent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
`;

const ButtonWrapper = styled.div`
    margin-top: 1rem;
    width: 150px;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

const FeatureList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
`;

const BrandsWrapper = styled.section`
    overflow: hidden;
`;

const GalleryWrapper = styled.div`
    display: flex;
    gap: 3rem;
    width: calc(178px * 7);
    animation: slide-left 50s linear infinite;
`;

const Image = styled.img`
    width: 130px;
    object-fit: contain;
    border-radius: 10px;
    flex: 0 0 auto;
`;

const GradientOverlayLeft = styled.div`
    background: linear-gradient(
        -90deg,
        rgba(21, 21, 54, 0),
        ${Color.BluePurple} 91%
    );
    width: 10%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 20;
    border-radius: 10px;
`;

const GradientOverlayRight = styled.div`
    background: linear-gradient(
        90deg,
        rgba(21, 21, 54, 0),
        ${Color.BluePurple} 91%
    );
    width: 10%;
    height: 70%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 20;
    border-radius: 10px;
`;
