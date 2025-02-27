import styled from "@emotion/styled";
import {
    serviceImage1,
    serviceImage10,
    serviceImage11,
    serviceImage12,
    serviceImage13,
    serviceImage14,
    serviceImage2,
    serviceImage3,
    serviceImage4,
    serviceImage5,
    serviceImage6,
    serviceImage7,
    serviceImage8,
    serviceImage9,
} from "../../assets/images";
import { SectionContainer } from "../../styles/sectionContainer";

export default function Gallery() {
    const firstGalleryRowImages = [
        serviceImage1,
        serviceImage2,
        serviceImage3,
        serviceImage4,
        serviceImage5,
        serviceImage6,
        serviceImage7,
    ];
    const secondGalleryRowImages = [
        serviceImage8,
        serviceImage9,
        serviceImage10,
        serviceImage11,
        serviceImage12,
        serviceImage13,
        serviceImage14,
    ];

    return (
        <GallerySection>
            <GalleryRowWrapper>
                {[...firstGalleryRowImages, ...firstGalleryRowImages].map(
                    (image, index) => (
                        <GalleryImage key={index} src={image} alt="" />
                    )
                )}
            </GalleryRowWrapper>

            <GalleryRowWrapper>
                {[...secondGalleryRowImages, ...secondGalleryRowImages].map(
                    (image, index) => (
                        <GalleryImage key={index} src={image} alt="" />
                    )
                )}
            </GalleryRowWrapper>
        </GallerySection>
    );
}

const GallerySection = styled(SectionContainer)`
    width: 100vw;
    overflow: hidden;
    white-space: pre-wrap;
`;

const GalleryRowWrapper = styled.div`
    display: flex;
    gap: 2rem;
    width: calc(330px * 7);

    &:first-child {
        animation: slide-left 50s linear infinite;
    }

    &:last-child {
        animation: slide-right 50s linear infinite;
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
`;

const GalleryImage = styled.img`
    width: 300px;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    flex: 0 0 auto;
`;
