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

interface ServiceProps {
    icon: ReactNode;
    description: string;
}

interface PricingCardProps {
    cardTagText: string;
    cardHeading: string;
    cardContent: string;
    cardPrice: string | number;
    cardDuration: string;
    cardPlanTitle: string;
    cardServices: ServiceProps[];
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
}: PricingCardProps) {
    return (
        <PricingCardWrapper borderColor={borderColor}>
            <PricingCardContent>
                <PricingCardHeader>
                    <MediumSmallText>{cardHeading}</MediumSmallText>
                    <PricingBadge borderColor={borderColor}>
                        {cardTagText}
                    </PricingBadge>
                </PricingCardHeader>

                <SmallerText>{cardContent}</SmallerText>

                <PricingDetails>
                    <LargeText fontWeight={600}>{cardPrice}</LargeText>
                    <SmallerText>{cardDuration}</SmallerText>
                </PricingDetails>

                <Button
                    href=""
                    buttonText="Book a discovery call"
                    icon={<DiagonalArrowIcon color={Color.SoftWhite} />}
                    backgroundColor={Color.BluePurple}
                    textColor={Color.SoftWhite}
                />

                <SmallText fontWeight={600}>{cardPlanTitle}</SmallText>

                <PricingServicesList>
                    {cardServices.map((service, index) => (
                        <PricingServiceItem key={index}>
                            {service.icon}
                            <TinyText>{service.description}</TinyText>
                        </PricingServiceItem>
                    ))}
                </PricingServicesList>
            </PricingCardContent>
        </PricingCardWrapper>
    );
}

const PricingCardWrapper = styled.article<{ borderColor: string }>`
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

const PricingDetails = styled.div`
    display: flex;
    align-items: flex-end;
`;

const PricingServicesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const PricingServiceItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
