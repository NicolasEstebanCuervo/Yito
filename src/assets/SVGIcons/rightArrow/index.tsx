import * as Color from "../../../styles/colors";

export const RightArrowIcon = ({
    color = Color.BluePurple,
}: {
    color?: string;
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
            fill={color}
            d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 1 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5-5q.137-.144.21-.33a1 1 0 0 0 0-.76"
        />
    </svg>
);
