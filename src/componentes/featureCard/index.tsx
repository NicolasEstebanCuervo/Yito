import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { catchup, portal, sharepoint } from "../../assets/images";
import { SmallText, SmallerText } from "../../styles/fonts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FeatureCardProps {
    cardHeading: string;
    cardContent: string;
    imageIndex: number;
    setImage: (value: number) => void;
    isActive: boolean;
}

function FeatureCard({
    cardHeading,
    cardContent,
    imageIndex,
    setImage,
    isActive,
}: FeatureCardProps) {
    return (
        <FeatureCardWrapper
            isActive={isActive}
            onHoverStart={() => setImage(imageIndex)}
        >
            <SmallText fontWeight="bold">{cardHeading}</SmallText>
            <SmallerText>{cardContent}</SmallerText>
        </FeatureCardWrapper>
    );
}

export default function FeatureSection() {
    const [activeImageIndex, setActiveImageIndex] = useState<number>(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageIndex((prev) => (prev === 3 ? 1 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentImageSrc =
        activeImageIndex === 1
            ? portal
            : activeImageIndex === 2
            ? catchup
            : activeImageIndex === 3
            ? sharepoint
            : "";

    const currentImageAlt =
        activeImageIndex === 1
            ? "Screenshot of an app with a calendar, representing an interactive portal for project management"
            : activeImageIndex === 2
            ? "Card with a 'Meeting' label and a 'Join Meet' button, representing weekly strategy sessions"
            : activeImageIndex === 3
            ? "File manager with multiple folders, representing quick and easy access to projects on SharePoint"
            : "";

    return (
        <FeatureWrapper>
            <FeatureCardsWrapper>
                <FeatureCard
                    isActive={activeImageIndex === 1}
                    cardHeading="Your interactive portal"
                    cardContent="Kick off projects, track progress, chat with us and give feedback - all in one easy-to-use portal."
                    imageIndex={1}
                    setImage={setActiveImageIndex}
                />
                <FeatureCard
                    isActive={activeImageIndex === 2}
                    cardHeading="Weekly strategy sessions"
                    cardContent="We'll have 30 minutes of face time each week to make sure everything's aligned and moving forward. It's the best way to keep things on point."
                    imageIndex={2}
                    setImage={setActiveImageIndex}
                />
                <FeatureCard
                    isActive={activeImageIndex === 3}
                    cardHeading="Quick and easy access"
                    cardContent="Grab your finished projects from our secure SharePoint hub. It's perfect for seamless sharing and collaboration with your team. No fuss."
                    imageIndex={3}
                    setImage={setActiveImageIndex}
                />
            </FeatureCardsWrapper>
            <FeatureImageWrapper src={currentImageSrc} alt={currentImageAlt} />
        </FeatureWrapper>
    );
}

const FeatureWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

const FeatureCardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FeatureCardWrapper = styled(motion.div)<{ isActive: boolean }>`
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    border-left: 4px solid
        ${({ isActive }) => (isActive ? Color.BluePurple : Color.LightGray)};

    @media (max-width: 700px) {
        padding: 1rem;
    }
`;

const FeatureImageWrapper = styled.img`
    max-height: 450px;
    width: 60%;
    border-radius: 10px;

    @media (max-width: 1200px) {
        width: 100%;
    }
`;
