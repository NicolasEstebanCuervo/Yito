import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { DiagonalArrowIcon } from "../../assets/SVGIcons";
import {
    LargeText,
    MediumSmallText,
    SmallText,
    SmallerText,
    TinyText,
} from "../../styles/fonts";
import Button from "../button";
import { ReactNode } from "react";
import { scrollToSection } from "../../App";

interface IServiceProps {
    icon: ReactNode;
    description: string;
}

interface IPricingCardProps {
    cardTagText: string;
    cardHeading: string;
    cardContent: string;
    cardPrice: string | number;
    cardDuration: string;
    cardPlanTitle: string;
    cardServices: IServiceProps[];
    borderColor: string;
}

export default function PricingCard({
    cardTagText,
    cardHeading,
    cardContent,
    cardPrice,
    cardDuration,
    cardPlanTitle,
    cardServices,
    borderColor,
}: IPricingCardProps) {
    return (
        <PricingCardContainer borderColor={borderColor}>
            <PricingCardContent>
                <PricingCardHeader>
                    <MediumSmallText>{cardHeading}</MediumSmallText>
                    <PricingBadge borderColor={borderColor}>
                        {cardTagText}
                    </PricingBadge>
                </PricingCardHeader>

                <SmallerText>{cardContent}</SmallerText>

                <PriceDetailsWrapper>
                    <LargeText fontWeight={600}>{cardPrice}</LargeText>
                    <SmallerText>{cardDuration}</SmallerText>
                </PriceDetailsWrapper>

                <Button
                    onClick={()=>scrollToSection("contactSection")}
                    buttonText="Book a discovery call"
                    icon={<DiagonalArrowIcon color={Color.SoftWhite} />}
                    backgroundColor={Color.BluePurple}
                    textColor={Color.SoftWhite}
                />

                <SmallText fontWeight={600}>{cardPlanTitle}</SmallText>

                <PricingCardServicesList>
                    {cardServices.map((service, index) => (
                        <PricingCardServiceItem key={index}>
                            {service.icon}
                            <TinyText>{service.description}</TinyText>
                        </PricingCardServiceItem>
                    ))}
                </PricingCardServicesList>
            </PricingCardContent>
        </PricingCardContainer>
    );
}

interface IPricingCardStylesProps {
    borderColor: string;
}
const PricingCardContainer = styled.article<IPricingCardStylesProps>`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem;
    border-radius: 10px;
    border: 1px solid ${({ borderColor }) => borderColor};
    position: relative;
    width: 100%;
    max-width: 350px;

    @media (max-width: 500px) {
        padding: 1.5rem;
    }
`;

const PricingCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const PricingCardHeader = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const PricingBadge = styled.span<{ borderColor: string }>`
    font-size: 13px;
    border-radius: 10px;
    border: 1px solid ${({ borderColor }) => borderColor};
    padding: 3px 10px;
    text-align: center;
    background: ${({ borderColor }) => `${borderColor}24`};
`;

const PriceDetailsWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`;

const PricingCardServicesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const PricingCardServiceItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
