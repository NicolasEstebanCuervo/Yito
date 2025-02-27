import * as Color from "../../../styles/colors";

export const ThunderboltIcon = ({
    color = Color.BluePurple,
}: {
    color?: string;
}) => (
    <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.5 17.5H4M7 12H2.5M9.5 6.5H4.5M17.5 3L10.9036 12.235C10.6116 12.6438 10.4656 12.8481 10.4719 13.0185C10.4774 13.1669 10.5486 13.3051 10.6661 13.3958C10.8011 13.5 11.0522 13.5 11.5546 13.5H16.5L15.5 21L22.0964 11.765C22.3884 11.3562 22.5344 11.1519 22.5281 10.9815C22.5226 10.8331 22.4514 10.6949 22.3339 10.6042C22.1989 10.5 21.9478 10.5 21.4454 10.5H16.5L17.5 3Z"
            stroke={color}
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
    </svg>
);
