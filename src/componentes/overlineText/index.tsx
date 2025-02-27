import styled from "@emotion/styled";
import { SmallWithSpacingText } from "../../styles/fonts";
import { ReactNode } from "react";

interface OverlineTextProps {
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
}: OverlineTextProps) {
    return (
        <OverlineWrapper borderColor={borderColor}>
            {icon}
            <SmallWithSpacingText
                color={textColor}
                fontWeight={fontWeight}
                letterSpacing={letterSpacing}
            >
                {text}
            </SmallWithSpacingText>
        </OverlineWrapper>
    );
}

const OverlineWrapper = styled.div<{ borderColor?: string }>`
    display: flex;
    align-items: center;
    gap: 5px;
    border: ${({ borderColor }) => (borderColor ? `1px solid ${borderColor}` : "none")};
    padding: ${({ borderColor }) => (borderColor ? "6px 10px" : "0")};
    border-radius: 5px;
`;
