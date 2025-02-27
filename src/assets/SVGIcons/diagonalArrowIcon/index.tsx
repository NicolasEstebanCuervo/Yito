import * as Color from "../../../styles/colors";

export const DiagonalArrowIcon = ({
    color = Color.BluePurple,
}: {
    color?: string;
}) => (
    <svg width="11" height="11" viewBox="0 0 11 11">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.52941 0.469669L9.24908 8.18934L9.24908 3.07692L10.7491 3.07692L10.7491 10.75L3.076 10.75L3.076 9.25L8.18842 9.25L0.46875 1.53033L1.52941 0.469669Z"
            fill={color}
        ></path>
    </svg>
);
