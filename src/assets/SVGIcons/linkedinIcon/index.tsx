import * as Color from "../../../styles/colors";

export const LinkedinIcon = ({
    color = Color.BluePurple,
}: {
    color?: string;
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="none">
        <path
            fill={color}
            d="M29.852 2.917H5.148a2.115 2.115 0 0 0-2.144 2.085v24.996a2.115 2.115 0 0 0 2.144 2.085h24.704a2.116 2.116 0 0 0 2.144-2.085V5.002a2.114 2.114 0 0 0-2.144-2.085M11.798 27.329H7.423V14.204h4.375zM9.611 12.367a2.275 2.275 0 0 1 0-4.55 2.29 2.29 0 1 1 0 4.55m17.966 14.962h-4.375v-7.044c0-1.764-.627-2.916-2.216-2.916a2.41 2.41 0 0 0-2.246 1.59 2.9 2.9 0 0 0-.146 1.064v7.292h-4.375V14.19h4.375v1.852a4.37 4.37 0 0 1 3.952-2.188c2.917 0 5.031 1.882 5.031 5.921z"
        />
    </svg>
);
