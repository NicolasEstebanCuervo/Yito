import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { MediumText, MediumSmallText, SmallerText } from "../../styles/fonts";

interface PlanCustomCardProps {
    icon: React.ReactNode;
    cardTagText: string;
    cardHeading: string;
    cardContent: string;
    cardPrice: string | number;
    cardDuration: string;
}

export default function PlanCustomCard({
    icon,
    cardTagText,
    cardHeading,
    cardContent,
    cardPrice,
    cardDuration,
}: PlanCustomCardProps) {
    return (
        <PlanCardWrapper>
            <PlanCardContent>
                <PlanCardHeader>
                    {icon}
                    <PlanTag>{cardTagText}</PlanTag>
                </PlanCardHeader>

                <MediumSmallText>{cardHeading}</MediumSmallText>
                <SmallerText>{cardContent}</SmallerText>
            </PlanCardContent>

            <PlanPriceWrapper>
                <MediumText fontWeight={600}>{cardPrice}</MediumText>
                <SmallerText>{cardDuration}</SmallerText>
            </PlanPriceWrapper>
        </PlanCardWrapper>
    );
}

const PlanCardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    padding: 2rem;
    border-radius: 10px;
    border: 1px solid ${Color.LightGray};
    width: 100%;
    max-width: 350px;
`;

const PlanCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const PlanCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PlanTag = styled.span`
    font-size: 13px;
    border-radius: 10px;
    color: ${Color.BluePurple};
    padding: 5px 10px;
    background: ${Color.BluePurpleTransparent};
`;

const PlanPriceWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`;
