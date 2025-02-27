import * as Color from "../../../styles/colors";

export const FacebookIcon = ({
    color = Color.BluePurple,
}: {
    color?: string;
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="none">
        <path
            fill={color}
            d="M30.479 2.917H4.521A1.604 1.604 0 0 0 2.917 4.52v25.958a1.604 1.604 0 0 0 1.604 1.604h13.97V20.781H14.7v-4.375h3.791v-3.281a5.31 5.31 0 0 1 5.659-5.833q1.704-.01 3.398.175v3.937h-2.319c-1.837 0-2.187.875-2.187 2.144v2.815h4.374l-.568 4.375h-3.806v11.345h7.437a1.604 1.604 0 0 0 1.604-1.604V4.521a1.605 1.605 0 0 0-1.604-1.604"
        />
    </svg>
);
