import * as Color from "../../../styles/colors";

export const ListIcon = ({ color = Color.BluePurple }: { color?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
    >
        <path
            d="M21.5 12H9.5M21.5 6H9.5M21.5 18H9.5M5.5 12C5.5 12.5523 5.05228 13 4.5 13C3.94772 13 3.5 12.5523 3.5 12C3.5 11.4477 3.94772 11 4.5 11C5.05228 11 5.5 11.4477 5.5 12ZM5.5 6C5.5 6.55228 5.05228 7 4.5 7C3.94772 7 3.5 6.55228 3.5 6C3.5 5.44772 3.94772 5 4.5 5C5.05228 5 5.5 5.44772 5.5 6ZM5.5 18C5.5 18.5523 5.05228 19 4.5 19C3.94772 19 3.5 18.5523 3.5 18C3.5 17.4477 3.94772 17 4.5 17C5.05228 17 5.5 17.4477 5.5 18Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>
);
