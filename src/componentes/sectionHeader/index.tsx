import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { NarrowStarIcon } from "../../assets/SVGIcons";
import { LargeText, SmallerText } from "../../styles/fonts";
import OverlineText from "../../componentes/overlineText";

interface SectionHeaderProps {
    sectionTitle: string;
    sectionSubtitle?: string;
    overlineText: string;
    alignItems?: "flex-start" | "center" | "flex-end";
    iconColor?: string;
    titleColor?: string;
    subtitleColor?: string;
}

export default function SectionHeader({
    sectionTitle,
    sectionSubtitle,
    overlineText,
    alignItems = "center",
    iconColor = Color.BluePurple,
    titleColor = Color.CharcoalGray,
    subtitleColor = Color.SlateGray,
}: SectionHeaderProps) {
    return (
        <SectionHeaderWrapper alignItems={alignItems}>
            <OverlineText
                icon={<NarrowStarIcon color={iconColor} />}
                textColor={iconColor}
                text={overlineText}
            />
            <LargeText color={titleColor}>{sectionTitle}</LargeText>
            {sectionSubtitle && <SmallerText color={subtitleColor}>{sectionSubtitle}</SmallerText>}
        </SectionHeaderWrapper>
    );
}

const SectionHeaderWrapper = styled.article<{ alignItems: "flex-start" | "center" | "flex-end" }>`
    display: flex;
    flex-direction: column;
    align-items: ${({ alignItems }) => alignItems};
    text-align: ${({ alignItems }) =>
        alignItems === "center" ? "center" : alignItems};
    gap: 1rem;
    max-width: 600px;
    z-index: 5;
`;
