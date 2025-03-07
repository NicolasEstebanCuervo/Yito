import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { YitoLogoSVG } from "../../assets/SVGFigures";
import { SmallerLinkText } from "../../styles/fonts";
import { DiagonalArrowIcon } from "../../assets/SVGIcons";
import Button from "../button";
import NavButton from "../navbutton";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "../../App";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
            if (window.innerWidth >= 800) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleNavbar = () => {
        if (isMobile) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <>
            {isOpen && isMobile && (
                <Overlay
                    onClick={toggleNavbar}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
            )}
            <NavbarContainer
                isOpen={isOpen}
                animate={{
                    backgroundColor:
                        isOpen && isMobile ? Color.BluePurple : "transparent",
                    flexDirection: isOpen ? "column" : "row",
                    transition: { duration: 5, ease: "easeInOut" },
                }}
            >
                <BrandNavigation>
                    <NavbarLogoWrapper>
                        <YitoLogoSVG />
                    </NavbarLogoWrapper>
                    <NavButton onClick={toggleNavbar} />
                </BrandNavigation>

                <NavbarContent isOpen={isOpen}>
                    <NavbarLinks
                        isOpen={isOpen}
                        animate={{
                            opacity: isMobile ? (isOpen ? 1 : 0) : 1,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <SmallerLinkText
                            onClick={() => scrollToSection("howItWorksSection")}
                        >
                            How it works
                        </SmallerLinkText>

                        <SmallerLinkText
                            onClick={() => scrollToSection("benefitsSection")}
                        >
                            Benefits
                        </SmallerLinkText>
                        <SmallerLinkText
                            onClick={() => scrollToSection("portfolioSection")}
                        >
                            Portfolio
                        </SmallerLinkText>
                        <SmallerLinkText
                            onClick={() => scrollToSection("servicesSection")}
                        >
                            Services
                        </SmallerLinkText>
                        <SmallerLinkText
                            onClick={() => scrollToSection("pricingSection")}
                        >
                            Pricing
                        </SmallerLinkText>
                    </NavbarLinks>

                    <NavbarButtonWrapper
                        isOpen={isOpen}
                        animate={{
                            opacity: isMobile && isOpen ? 1 : 1,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <Button
                            onClick={()=>scrollToSection("contactSection")}
                            buttonText="Book a discovery call"
                            icon={
                                <DiagonalArrowIcon color={Color.CharcoalGray} />
                            }
                        />
                    </NavbarButtonWrapper>
                </NavbarContent>
            </NavbarContainer>
        </>
    );
}

interface INavbarStylesProps {
    isOpen: boolean;
}

const NavbarContainer = styled(motion.nav)<INavbarStylesProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    position: relative;
    z-index: 20;

    @media (max-width: 800px) {
        padding: ${({ isOpen }) => (isOpen ? "3rem" : "0")};
        border-radius: 10px;
        position: ${({ isOpen }) => (isOpen ? "fixed" : "relative")};
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
        width: ${({ isOpen }) => (isOpen ? "90%" : "100%")};
    }
`;

const BrandNavigation = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 800px) {
        min-width: 100%;
    }
`;

const NavbarLogoWrapper = styled.div`
    width: 80px;
`;

const NavbarContent = styled.div<INavbarStylesProps>`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 800px) {
        flex-direction: ${({ isOpen }) => (isOpen ? "column" : "row")};
    }
`;

const NavbarLinks = styled(motion.div)<INavbarStylesProps>`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 800px) {
        flex-direction: ${({ isOpen }) => (isOpen ? "column" : "row")};
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    }
`;

const NavbarButtonWrapper = styled(motion.div)<INavbarStylesProps>`
    width: 250px;

    @media (max-width: 1100px) {
        display: none;
    }

    @media (max-width: 800px) {
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        width: 100%;
    }
`;

const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10;
    transition: opacity 0.3s ease-in-out;
`;
