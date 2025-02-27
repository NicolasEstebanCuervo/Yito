import styled from "@emotion/styled";
import { brand, feedback, sustainable } from "../../assets/images";
import { SectionContainer } from "../../styles/sectionContainer";
import SectionHeader from "../../componentes/sectionHeader";
import BlogCard from "../../componentes/blogCard";

export default function Blog() {
    return (
        <SectionContainer className="section--blog">
            <SectionHeader
                sectionTitle="Latest insights from Yito"
                sectionSubtitle="Creative ideas, practical tips and insider info."
                overlineText="BLOG"
            />
            <PostsWrapper>
                <BlogCard
                    imgSrc={feedback}
                    imgAlt="Group of people having a discussion during a meeting, representing the exchange of feedback in creative projects."
                    labelText="Insights • 25 Dec 2024"
                    cardHeading="The art of giving (and receiving) feedback in creative projects"
                    cardContent="Discover how to give and receive feedback in creative projects effectively. Master the art of..."
                />
                <BlogCard
                    imgSrc={sustainable}
                    imgAlt="Building surrounded by nature, trees, and greenery, representing the concept of sustainable design and eco-conscious architecture."
                    labelText="Insights • 25 Dec 2024"
                    cardHeading="Sustainable design: Can creativity help save the planet?"
                    cardContent="Explore how sustainable design fuels environmental preservation by merging..."
                />
                <BlogCard
                    imgSrc={brand}
                    imgAlt="Group of people gathered in a discussion, representing a brainstorming session for brand strategy."
                    labelText="Insights • 11 Dec 2024"
                    cardHeading="How to keep your brand fresh without rebranding"
                    cardContent="Learn effective strategies to refresh your brand without the cost and effort of a full rebrand..."
                />
            </PostsWrapper>
        </SectionContainer>
    );
}

const PostsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
