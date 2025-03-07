import styled from "@emotion/styled";

export const GradientVerticalLineStrongSVG = () => (
    <SVG
        width="5"
        height="200"
        viewBox="0 0 5 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line
            x1="2.66406"
            y1="306"
            x2="2.66404"
            y2="5.98481e-08"
            stroke="url(#paint0_linear_398_31837)"
            strokeWidth="4"
        ></line>
        <defs>
            <linearGradient
                id="paint0_linear_398_31837"
                x1="5.16406"
                y1="306"
                x2="5.16405"
                y2="-1.49624e-08"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor={"#E1E2F5"} stopOpacity="0"></stop>
                <stop offset="1" stopColor="#E1E2F5"></stop>
            </linearGradient>
        </defs>
    </SVG>
);

const SVG = styled.svg`
    @media (max-width: 1200px) {
        display: none;
    }
`;
