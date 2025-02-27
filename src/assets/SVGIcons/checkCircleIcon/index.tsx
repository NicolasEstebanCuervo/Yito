import * as Color from "../../../styles/colors";

export const CheckCircleIcon = ({
    color = Color.BluePurple,
}: {
    color?: string;
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
    >
        <path
            d="M7.33203 11L10.332 14L16.332 8M21.832 11C21.832 16.5228 17.3549 21 11.832 21C6.30918 21 1.83203 16.5228 1.83203 11C1.83203 5.47715 6.30918 1 11.832 1C17.3549 1 21.832 5.47715 21.832 11Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
    </svg>
);
