import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { RightArrowIcon } from "../../assets/SVGIcons";
import {
    MediumSmallText,
    SmallerText,
    TinyLinkText,
} from "../../styles/fonts";
import { ReactNode } from "react";

interface HowItWorksCardProps {
    imgSrc: string;
    cardHeading: string;
    cardContent: string;
    decorativeLine: ReactNode
    hrefCard: string;
    linkText: string;
}

export default function HowItWorksCard({
    imgSrc,
    cardHeading,
    cardContent,
    decorativeLine,
    hrefCard, 
    linkText
}: HowItWorksCardProps) {
    return (
        <HowItWorksCardWrapper>
            <HowItWorksCardImageWrapper>
                <img src={imgSrc} alt="" />
                {decorativeLine}
            </HowItWorksCardImageWrapper>
            <HowItWorksCardContent>
                <MediumSmallText fontWeight="bold">{cardHeading}</MediumSmallText>
                <SmallerText lineHeight="1.8rem">{cardContent}</SmallerText>
                <HowItWorksCardLinkWrapper>
                    <TinyLinkText href={hrefCard} color={Color.BluePurple} fontWeight="bold">
                        {linkText}
                    </TinyLinkText>
                    <RightArrowIcon />
                </HowItWorksCardLinkWrapper>
            </HowItWorksCardContent>
        </HowItWorksCardWrapper>
    );
}

const HowItWorksCardWrapper = styled.article`
    display: flex;
    justify-content: center;
    max-width: 700px;
    width: 100%;
    gap: 1rem;

    @media (max-width: 1200px) {
        justify-content: flex-start;
        align-items: flex-start;
    }

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

const HowItWorksCardImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
        max-height: 80px;
    }
`;

const HowItWorksCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const HowItWorksCardLinkWrapper = styled.div`
    display: flex;
    align-items: center;
`;
