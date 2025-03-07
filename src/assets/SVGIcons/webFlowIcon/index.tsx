import * as Color from "../../../styles/colors";

export const WebFlowIcon = ({
    color = Color.BluePurple,
}: {
    color?: string;
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.168 0.0527344L15.1481 13.9475H8.55437L11.4922 8.18892H11.3604C8.93671 11.3745 5.3205 13.4716 0.167969 13.9475V8.26858C0.167969 8.26858 3.46416 8.0715 5.40191 6.00871H0.167969V0.0528387H6.05034V4.95144L6.18237 4.95098L8.58609 0.0528387H13.0348V4.92041L13.1668 4.92018L15.6608 0.0527344H22.168Z"
            fill={color}
        ></path>
    </svg>
);
