import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { ReactNode } from "react";

interface ButtonProps {
    href: string;
    buttonText: string; 
    icon?: ReactNode;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    justifyContent?: string;
}

export default function Button({
    href,
    buttonText,
    icon,
    backgroundColor = Color.White,
    textColor = Color.CharcoalGray,
    borderColor,
    justifyContent = "center",
}: ButtonProps) {
    return (
        <ButtonWrapper
            href={href}
            backgroundColor={backgroundColor}
            textColor={textColor}
            borderColor={borderColor}
            justifyContent={justifyContent}
        >
            {buttonText}
            {icon}
        </ButtonWrapper>
    );
}

const ButtonWrapper = styled.a<{
    backgroundColor: string;
    textColor: string;
    borderColor?: string;
    justifyContent?: string;
}>`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    justify-content: ${({ justifyContent }) => justifyContent};
    text-decoration-line: none;
    gap: 5px;
    padding: ${({ justifyContent }) =>
        justifyContent === "center" ? "15px" : "0"};
    border-radius: 13px;
    width: 90%;
    margin: 0 auto;
    font-size: 15px;
    background: ${({ backgroundColor }) => backgroundColor};
    color: ${({ textColor }) => textColor};
    border: ${({ borderColor }) =>
        borderColor ? `1px solid ${borderColor}` : "none"};
`;
