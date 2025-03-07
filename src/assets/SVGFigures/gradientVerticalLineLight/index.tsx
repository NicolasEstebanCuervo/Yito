import styled from "@emotion/styled";

export const GradientVerticalLineLightSVG = () => (
    <SVG
        width="5"
        height="200"
        viewBox="0 0 5 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line
            x1="2.69531"
            y1="306"
            x2="2.69529"
            y2="6.65235e-08"
            stroke="url(#paint0_linear_398_31857)"
            strokeWidth="4"
        ></line>
        <defs>
            <linearGradient
                id="paint0_linear_398_31857"
                x1="5.19531"
                y1="306"
                x2="5.1953"
                y2="-1.66311e-08"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#E1E2F5" stopOpacity="0"></stop>
                <stop offset="1" stopColor="#4747D7"></stop>
            </linearGradient>
        </defs>
    </SVG>
);

const SVG = styled.svg`
    @media (max-width: 1200px) {
        display: none;
    }
`;
