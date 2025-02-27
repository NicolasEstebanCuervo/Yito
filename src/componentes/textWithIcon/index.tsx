import styled from "@emotion/styled";
import { SmallerText } from "../../styles/fonts";
import { ReactNode } from "react";

export default function TextWithIcon({
    text,
    icon,
}: {
    text: string;
    icon: ReactNode;
}) {
    return (
        <IconWrapper>
            {icon}
            <SmallerText>{text}</SmallerText>
        </IconWrapper>
    );
}

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
`;
