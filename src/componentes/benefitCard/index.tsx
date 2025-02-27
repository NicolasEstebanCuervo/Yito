import styled from "@emotion/styled";
import { MediumSmallText, SmallerText } from "../../styles/fonts";

interface BenefitCardProps {
    imgSrc: string;
    imgAlt: string;
    cardHeading: string;
    cardContent: string;
}

export default function BenefitCard({
    imgSrc,
    imgAlt,
    cardHeading,
    cardContent,
}: BenefitCardProps) {
    return (
        <BenefitCardWrapper>
            <BenefitCardImage src={imgSrc} alt={imgAlt} />
            <BenefitCardContent>
                <MediumSmallText>{cardHeading}</MediumSmallText>
                <SmallerText>{cardContent}</SmallerText>
            </BenefitCardContent>
        </BenefitCardWrapper>
    );
}

const BenefitCardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 350px;
    border-radius: 10px;
`;

const BenefitCardImage = styled.img`
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
`;

const BenefitCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
