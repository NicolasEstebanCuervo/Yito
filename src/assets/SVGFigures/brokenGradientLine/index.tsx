import styled from "@emotion/styled";

export const BrokenGradientLineSVG = () => (
    <SVG
        width="5"
        height="200"
        viewBox="0 0 5 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
    >
        <line
            x1="2.5"
            y1="306"
            x2="2.5"
            y2="0"
            stroke="url(#paint0_linear_398_31879)"
            strokeWidth="4"
            strokeLinecap="square"
            strokeDasharray="12 16"
        />
        <defs>
            <linearGradient
                id="paint0_linear_398_31879"
                x1="2.5"
                y1="306"
                x2="2.5"
                y2="0"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#E1E2F5" stopOpacity="0" />
                <stop offset="1" stopColor="#4747D7" />
            </linearGradient>
        </defs>
    </SVG>
);

const SVG = styled.svg`
    @media (max-width: 1200px) {
        display: none;
    }
`;
