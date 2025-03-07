import styled from "@emotion/styled";
import { SmallWithSpacingText } from "../../styles/fonts";
import { ReactNode } from "react";

interface IOverlineTextProps {
    text: string;
    icon?: ReactNode;
    textColor?: string;
    fontWeight?: string;
    letterSpacing?: string;
    borderColor?: string;
}

export default function OverlineText({
    text,
    icon,
    textColor,
    fontWeight,
    letterSpacing,
    borderColor,
}: IOverlineTextProps) {
    return (
        <OverlineTextContainer borderColor={borderColor}>
            {icon}
            <SmallWithSpacingText
                color={textColor}
                fontWeight={fontWeight}
                letterSpacing={letterSpacing}
            >
                {text}
            </SmallWithSpacingText>
        </OverlineTextContainer>
    );
}

interface IOverlineTextStylesProps {
    borderColor?: string;
}

const OverlineTextContainer = styled.div<IOverlineTextStylesProps>`
    display: flex;
    align-items: center;
    gap: 5px;
    border: ${({ borderColor }) =>
        borderColor ? `1px solid ${borderColor}` : "none"};
    padding: ${({ borderColor }) => (borderColor ? "6px 10px" : "0")};
    border-radius: 5px;
`;
