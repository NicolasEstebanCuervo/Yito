import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { NarrowStarIcon } from "../../assets/SVGIcons";
import { LargeText, SmallerText } from "../../styles/fonts";
import OverlineText from "../../componentes/overlineText";

interface ISectionHeaderProps {
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
}: ISectionHeaderProps) {
    return (
        <SectionHeaderContainer alignItems={alignItems}>
            <OverlineText
                icon={<NarrowStarIcon color={iconColor} />}
                textColor={iconColor}
                text={overlineText}
            />
            <LargeText color={titleColor}>{sectionTitle}</LargeText>
            {sectionSubtitle && (
                <SmallerText color={subtitleColor}>
                    {sectionSubtitle}
                </SmallerText>
            )}
        </SectionHeaderContainer>
    );
}

interface ISectionHeaderStylesProps {
    alignItems: "flex-start" | "center" | "flex-end";
}

const SectionHeaderContainer = styled.article<ISectionHeaderStylesProps>`
    display: flex;
    flex-direction: column;
    align-items: ${({ alignItems }) => alignItems};
    text-align: ${({ alignItems }) =>
        alignItems === "center" ? "center" : alignItems};
    gap: 1rem;
    max-width: 600px;
    z-index: 5;
`;
