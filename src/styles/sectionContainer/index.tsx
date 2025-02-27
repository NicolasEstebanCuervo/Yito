import styled from "@emotion/styled";
import * as Color from "../colors";

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 3rem;
    border-radius: 10px;
    width: 90%;
    background: ${Color.White};

    @media (max-width: 500px) {
        padding: 3rem 1.5rem;
    }
`;