import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import {
    CheckIcon,
    InfinityIcon,
    PauseIcon,
    ThunderboltIcon,
    DiagonalArrowIcon,
} from "../../assets/SVGIcons";
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
import { ExtraLargeText, SmallerText } from "../../styles/fonts";

import Button from "../../componentes/button";
import OverlineText from "../../componentes/overlineText";
import { SectionContainer } from "../../styles/sectionContainer";
import Navbar from "../../componentes/navbar";
import { scrollToSection } from "../../App";

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
        <HeaderContainer as="header">
            <HeaderGradientOverlayLeft />
            <Navbar />
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

                <HeaderButtonWrapper>
                    <Button
                        onClick={() => scrollToSection("pricingSection")}
                        buttonText="See plans"
                        icon={<DiagonalArrowIcon color={Color.CharcoalGray} />}
                    />
                </HeaderButtonWrapper>

                <HeaderFeatureList>
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
                </HeaderFeatureList>
            </HeaderContent>

            <HeaderBrandsWrapper>
                <HeaderBrandsContainer>
                    {[...brandLogos, ...brandLogos].map((image, index) => (
                        <HeaderBrandImage
                            key={index}
                            src={image}
                            alt={`${index + 1} logo`}
                        />
                    ))}
                </HeaderBrandsContainer>
            </HeaderBrandsWrapper>
            <HeaderGradientOverlayRight />
        </HeaderContainer>
    );
}

const HeaderContainer = styled(SectionContainer)`
    max-width: 100vw;
    overflow: hidden;
    position: relative;
    white-space: pre-wrap;
    background: url(${backgroundHeader});
    background-size: cover;
    position: relative;
    margin-top: 1rem;
`;

const HeaderContent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
`;

const HeaderButtonWrapper = styled.div`
    margin-top: 1rem;
    width: 150px;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

const HeaderFeatureList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
`;

const HeaderBrandsWrapper = styled.section`
    overflow: hidden;
`;

const HeaderBrandsContainer = styled.div`
    display: flex;
    gap: 3rem;
    width: calc(178px * 7);
    animation: slide-left 50s linear infinite;
`;

const HeaderBrandImage = styled.img`
    width: 130px;
    object-fit: contain;
    border-radius: 10px;
    flex: 0 0 auto;
`;

const HeaderGradientOverlayLeft = styled.div`
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
    z-index: 5;
    border-radius: 10px;
`;

const HeaderGradientOverlayRight = styled.div`
    background: linear-gradient(
        90deg,
        rgba(21, 21, 54, 0),
        ${Color.BluePurple} 91%
    );
    width: 10%;
    height: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 5;
    border-radius: 10px;
`;
