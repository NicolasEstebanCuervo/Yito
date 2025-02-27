import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { MinusCircleIcon, PlusCircleIcon } from "../../assets/SVGIcons";
import { SmallerText, TinyText } from "../../styles/fonts";
import { ReactNode } from "react";

interface AccordionCardProps {
    cardId: number;
    isActive: boolean;
    onClick: (cardId: number) => void;
    cardHeading: string;
    cardContent: ReactNode;
}

export const AccordionCard = ({
    cardId,
    isActive,
    onClick,
    cardHeading,
    cardContent,
}: AccordionCardProps) => {
    return (
        <AccordionCardWrapper onClick={() => onClick(cardId)} active={isActive}>
            <AccordionCardHeader>
                <SmallerText color={Color.CharcoalGray}>
                    {cardHeading}
                </SmallerText>
                <IconWrapper>
                {isActive ? (
                    <MinusCircleIcon />
                ) : (
                    <PlusCircleIcon color={Color.CharcoalGray} />
                )}
                </IconWrapper>
            </AccordionCardHeader>

            {isActive && <TinyText>{cardContent}</TinyText>}
        </AccordionCardWrapper>
    );
};

const AccordionCardWrapper = styled.article<{ active: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 700px;
    width: 100%;
    gap: 1rem;
    background-color: ${({ active }) =>
        active ? Color.SoftWhite : "transparent"};
    border-radius: 10px;
    padding: 2rem;

    @media (max-width: 500px) {
        padding: 1rem;
    }
`;

const AccordionCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 2rem;
`;

const IconWrapper = styled.div`
    min-width: 30px;
`