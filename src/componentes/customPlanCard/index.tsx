import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { MediumText, MediumSmallText, SmallerText } from "../../styles/fonts";

interface ICustomPlanCardProps {
    icon: React.ReactNode;
    cardTagText: string;
    cardHeading: string;
    cardContent: string;
    cardPrice: string | number;
    cardDuration: string;
}

export default function CustomPlanCard({
    icon,
    cardTagText,
    cardHeading,
    cardContent,
    cardPrice,
    cardDuration,
}: ICustomPlanCardProps) {
    return (
        <CustomPlanCardContainer>
            <CustomPlanCardContent>
                <CustomPlanHeader>
                    {icon}
                    <PlanTag>{cardTagText}</PlanTag>
                </CustomPlanHeader>

                <MediumSmallText>{cardHeading}</MediumSmallText>
                <SmallerText>{cardContent}</SmallerText>
            </CustomPlanCardContent>

            <PriceDetailsWrapper>
                <MediumText fontWeight={600}>{cardPrice}</MediumText>
                <SmallerText>{cardDuration}</SmallerText>
            </PriceDetailsWrapper>
        </CustomPlanCardContainer>
    );
}

const CustomPlanCardContainer = styled.article`
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

const CustomPlanCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const CustomPlanHeader = styled.div`
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

const PriceDetailsWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`;
