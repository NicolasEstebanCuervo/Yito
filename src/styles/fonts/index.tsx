import styled from "@emotion/styled";
import * as Color from "../colors";
import { motion } from "framer-motion";

interface FontsProps {
    color?: string | number;
    fontWeight?: number | string;
    lineHeight?: string | number; 
    letterSpacing?: string | number;
}

export const ExtraLargeText = styled(motion.h1)<FontsProps>`
    font-size: 3.5rem;
    color: ${(props) => props.color || Color.CharcoalGray};
    font-weight: ${(props) => props.fontWeight || "500"};
    line-height: ${(props) => props.lineHeight || "normal"}; 
    max-width: 900px;

    @media (max-width: 1100px) {
        font-size: 3rem;
    }

    @media (max-width: 500px) {
        font-size: 2.5rem;
    }
`;

export const LargeText = styled(motion.h2)<FontsProps>`
    font-size: 2.5rem;
    color: ${(props) => props.color || Color.CharcoalGray};
    font-weight: ${(props) => props.fontWeight || "normal"};
    line-height: ${(props) => props.lineHeight || "normal"}; 
    max-width: 800px;

    @media (max-width: 500px) {
        font-size: 2rem;
    }
`;

export const MediumText = styled(motion.h3)<FontsProps>`
    font-size: 1.75rem;
    color: ${(props) => props.color || Color.CharcoalGray};
    font-weight: ${(props) => props.fontWeight || "bold"};
    line-height: ${(props) => props.lineHeight || "normal"}; 
    max-width: 700px;
`;

export const MediumSmallText = styled(motion.p)<FontsProps>` 
    font-size: 1.5rem; 
    color: ${(props) => props.color || Color.CharcoalGray};
    font-weight: ${(props) => props.fontWeight || "bold"};
    line-height: ${(props) => props.lineHeight || "normal"}; 
    max-width: 700px;

    @media (max-width: 500px) {
        font-size: 1.2rem;
    }
`;

export const SmallText = styled(motion.p)<FontsProps>`
    font-size: 1.3rem;
    color: ${(props) => props.color || Color.CharcoalGray};
    font-weight: ${(props) => props.fontWeight || "normal"};
    line-height: ${(props) => props.lineHeight || "normal"};
    max-width: 600px;

    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;

export const SmallerText = styled(motion.p)<FontsProps>`
    font-size: 1.1rem;
    font-weight: ${(props) => props.fontWeight || "normal"};
    color: ${(props) => props.color || Color.SlateGray};
    line-height: ${(props) => props.lineHeight || "normal"}; 
    max-width: 600px;
`;

export const SmallerLinkText = styled(motion.a)<FontsProps>`
    font-size: 1.1rem;
    font-weight: ${(props) => props.fontWeight || "normal"};
    color: ${(props) => props.color || Color.SoftWhite};
    text-decoration-line: none;
    line-height: ${(props) => props.lineHeight || "normal"}; 
    max-width: 450px;
`;

export const TinyText = styled(motion.p)<FontsProps>`
    font-size: 1rem;
    display: inline-block;
    font-weight: ${(props) => props.fontWeight || "normal"};
    color: ${(props) => props.color || Color.SlateGray};
    line-height: ${(props) => props.lineHeight || "normal"}; 
    max-width: 400px;
`;

export const ExtraTinyText = styled(motion.p)<FontsProps>`
    font-size: 0.9rem;
    display: inline-block;
    font-weight: ${(props) => props.fontWeight || "normal"};
    color: ${(props) => props.color || Color.SlateGray};
    line-height: ${(props) => props.lineHeight || "normal"}; 
    max-width: 350px;
`;

export const TinyLinkText = styled(motion.a)<FontsProps>`
    font-size: 0.9rem;
    font-weight: ${(props) => props.fontWeight || "normal"};
    color: ${(props) => props.color || Color.LightSilver};
    text-decoration-line: none;
    line-height: ${(props) => props.lineHeight || "normal"}; 
    max-width: 350px;
`;

export const SmallWithSpacingText = styled(motion.p)<FontsProps>`
    font-size: 0.8rem;
    color: ${(props) => props.color || Color.CharcoalGray};
    font-weight: ${(props) => props.fontWeight || "bold"};
    letter-spacing: ${(props) => props.letterSpacing || "2px"};
    line-height: ${(props) => props.lineHeight || "normal"}; 
    max-width: 600px;
`;