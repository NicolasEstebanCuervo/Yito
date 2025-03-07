import * as Color from "../../../styles/colors";

export const CheckIcon = ({ color = Color.BluePurple }: { color?: string }) => (
    <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="check 2">
            <path
                id="Vector"
                d="M10.5 3L5 8.5L2.5 6"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </g>
    </svg>
);
