import styled from "@emotion/styled";

export const GradientHorizontalLineSVG = () => (
    <SVG
        xmlns="http://www.w3.org/2000/svg"
        width="286"
        height="13"
        viewBox="0 0 286 13"
        fill="none"
    >
        <path
            d="M3.00086 5.59326C39.2061 3.10104 157.787 0.564695 342.467 10.3571"
            stroke="url(#paint0_linear_428_38266)"
            strokeWidth="5"
            strokeLinecap="round"
        ></path>
        <defs>
            <linearGradient
                id="paint0_linear_428_38266"
                x1="3.02875"
                y1="3.60571"
                x2="201.383"
                y2="15.4024"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#FFC131"></stop>
                <stop offset="1" stopColor="#FFC131" stopOpacity="0"></stop>
            </linearGradient>
        </defs>
    </SVG>
);

const SVG = styled.svg`
    position: absolute;
    top: 5rem;
    left: 6rem;

    @media (max-width: 500px) {
        display: none;
    }
`;
