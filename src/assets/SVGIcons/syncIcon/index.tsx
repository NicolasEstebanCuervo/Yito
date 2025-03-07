import * as Color from "../../../styles/colors";

export const SyncIcon = ({ color = Color.BluePurple }: { color?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M20.4522 12.8928C20.1744 15.5027 18.6957 17.9484 16.2487 19.3612C12.1832 21.7084 6.98469 20.3155 4.63748 16.25L4.38748 15.817M3.5452 11.1071C3.823 8.49723 5.30179 6.05151 7.74877 4.63874C11.8142 2.29153 17.0128 3.68447 19.36 7.74995L19.61 8.18297M3.49219 18.0659L4.22425 15.3339L6.9563 16.0659M17.0412 7.93398L19.7733 8.66603L20.5053 5.93398M11.9987 7.49995V12L14.4987 13.5"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>
);
