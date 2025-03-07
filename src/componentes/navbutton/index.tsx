import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { useState } from "react";

interface INavButtonProps {
    onClick: () => void;
}

export default function NavButton({ onClick }: INavButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        onClick();
    };

    return (
        <NavButtonContainer onClick={handleClick} isOpen={isOpen}>
            <div></div>
            <div></div>
            <div></div>
        </NavButtonContainer>
    );
}

interface INavButtonStylesProps {
    isOpen: boolean;
}

const NavButtonContainer = styled.button<INavButtonStylesProps>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    position: relative;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    z-index: 20;

    @media (min-width: 800px) {
        display: none;
    }

    div {
        height: 2px;
        width: 30px;
        background: ${Color.SoftWhite};
        transition: transform 0.3s ease, opacity 0.3s ease;
        position: absolute;
    }

    div:nth-of-type(1) {
        transform: ${({ isOpen }) =>
            isOpen ? "rotate(45deg) translateY(0px)" : "translateY(-10px)"};
    }
    div:nth-of-type(2) {
        opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    div:nth-of-type(3) {
        transform: ${({ isOpen }) =>
            isOpen ? "rotate(-45deg) translateY(0px)" : "translateY(10px)"};
    }
`;
