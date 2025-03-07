import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { RightArrowIcon } from "../../assets/SVGIcons";
import { MediumSmallText, SmallerText, TinyLinkText } from "../../styles/fonts";
import { ReactNode } from "react";

interface IHowItWorksCardProps {
    imgSrc: string;
    cardHeading: string;
    cardContent: string;
    decorativeLine: ReactNode;
    onClick: () => void;
    linkText: string;
}

export default function HowItWorksCard({
    imgSrc,
    cardHeading,
    cardContent,
    decorativeLine,
    onClick,
    linkText,
}: IHowItWorksCardProps) {
    return (
        <HowItWorksCardContainer>
            <HowItWorksCardDecoration>
                <HowItWorksCardIcon src={imgSrc} alt="" />
                {decorativeLine}
            </HowItWorksCardDecoration>
            <HowItWorksCardContent>
                <MediumSmallText fontWeight="bold">
                    {cardHeading}
                </MediumSmallText>
                <SmallerText lineHeight="1.8rem">{cardContent}</SmallerText>
                <HowItWorksCardLink>
                    <TinyLinkText
                        onClick={onClick}
                        color={Color.BluePurple}
                        fontWeight="bold"
                    >
                        {linkText}
                    </TinyLinkText>
                    <RightArrowIcon />
                </HowItWorksCardLink>
            </HowItWorksCardContent>
        </HowItWorksCardContainer>
    );
}

const HowItWorksCardContainer = styled.article`
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

const HowItWorksCardDecoration = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const HowItWorksCardIcon = styled.img`
    max-height: 80px;
`;

const HowItWorksCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const HowItWorksCardLink = styled.div`
    display: flex;
    align-items: center;
`;
