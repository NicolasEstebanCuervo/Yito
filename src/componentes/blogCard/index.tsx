import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { RightArrowIcon } from "../../assets/SVGIcons";
import { MediumSmallText, SmallerText, TinyText } from "../../styles/fonts";
import Button from "../button";

interface BlogCardProps {
    imgSrc: string;
    imgAlt: string;
    labelText: string;
    cardHeading: string;
    cardContent: string;
}

export default function BlogCard({
    imgSrc,
    imgAlt,
    labelText,
    cardHeading,
    cardContent,
}: BlogCardProps) {
    return (
        <BlogCardWrapper>
            <BlogCardImage src={imgSrc} alt={imgAlt} />
            <BlogCardContent>
                <TinyText color={Color.BluePurple}>{labelText}</TinyText>
                <MediumSmallText>{cardHeading}</MediumSmallText>
                <SmallerText>{cardContent}</SmallerText>

                <Button
                    href=""
                    icon={<RightArrowIcon />}
                    buttonText="Read more"
                    justifyContent="flex-start"
                    textColor={Color.BluePurple}
                />
            </BlogCardContent>
        </BlogCardWrapper>
    );
}

const BlogCardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 400px;
    width: 100%;

    @media (max-width: 1000px) {
        max-width: 100%;
        flex-direction: row;
    }

    @media (max-width: 850px) {
        max-width: 100%;
        flex-direction: column;
    }
`;

const BlogCardImage = styled.img`
    width: 100%;
    flex: 1;
    border-radius: 10px;

    @media (max-width: 1000px) {
        width: 40%;
    }

    @media (max-width: 850px) {
        width: 100%;
    }
`;

const BlogCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
