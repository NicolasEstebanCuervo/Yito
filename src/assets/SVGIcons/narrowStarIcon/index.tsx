import * as Color from "../../../styles/colors";

import styled from "@emotion/styled";

export const NarrowStarIcon = ({
    color = Color.BluePurple,
}: {
    color?: string;
}) => (
    <SVG
        width="16"
        height="16"
        viewBox="0 0 12 13"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M5.29661 1.40088C5.53823 0.747914 6.46177 0.747915 6.70339 1.40088L7.77096 4.28593C7.84692 4.49122 8.00878 4.65308 8.21407 4.72904L11.0991 5.79661C11.7521 6.03823 11.7521 6.96177 11.0991 7.20339L8.21407 8.27096C8.00878 8.34692 7.84692 8.50878 7.77096 8.71407L6.70339 11.5991C6.46177 12.2521 5.53823 12.2521 5.29661 11.5991L4.22904 8.71407C4.15308 8.50878 3.99122 8.34692 3.78593 8.27096L0.900877 7.20339C0.247914 6.96177 0.247915 6.03823 0.900879 5.79661L3.78593 4.72904C3.99122 4.65308 4.15308 4.49122 4.22904 4.28593L5.29661 1.40088Z"></path>
    </SVG>
);

const SVG = styled.svg`
    position: relative;
    bottom: 1px;
`;
