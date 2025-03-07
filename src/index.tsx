import React from "react";
import ReactDOM from "react-dom/client";
import { Global, css } from "@emotion/react";
import App from "./App";

const globalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    @font-face {
        font-family: "Lens Grotesk";
        src: url("/styles/fonts/LensGrotesk.woff2") format("woff2"),
            url("/styles/fonts/LensGrotesk.woff") format("woff");
    }

    @keyframes slide-left {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }

    @keyframes slide-right {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }

    body {
        font-family: "Lens Grotesk", sans-serif;
        overflow-x: hidden;
    }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Global styles={globalStyles} />
        <App />
    </React.StrictMode>
);
