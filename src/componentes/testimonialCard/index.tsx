import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { ExtraTinyText, TinyText } from "../../styles/fonts";

interface TestimonialCardProps {
    imgSrc: string;
    imgAlt: string;
    customerName: string;  
    customerRole: string;  
    customerComment: string;  
}

export default function TestimonialCard({
    imgSrc,
    imgAlt,
    customerName,
    customerRole,
    customerComment,
}: TestimonialCardProps) {
    return (
        <TestimonialCardWrapper>
            <TestimonialProfile>
                <ImageWrapper>
                    <img src={imgSrc} alt={imgAlt} />
                </ImageWrapper>
                <ProfileDetails>
                    <ExtraTinyText color={Color.SoftWhite} fontWeight="bold">
                        {customerName}
                    </ExtraTinyText>
                    <ExtraTinyText color={Color.LightSilver} fontWeight="bold">
                        {customerRole}
                    </ExtraTinyText>
                </ProfileDetails>
            </TestimonialProfile>
            <TinyText color={Color.LightSilver}>“{customerComment}”</TinyText>
        </TestimonialCardWrapper>
    );
}

const TestimonialCardWrapper = styled.div`
    background: ${Color.DeepNightBlue};
    width: 400px;
    padding: 1rem;
    border-radius: 10px;
    margin-right: 10px;
    flex: 0 0 auto;

    @media (max-width: 500px) {
        width: 250px;
    }
`;

const TestimonialProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        border-radius: 100%;
        width: 100%;
        max-height: 60px;
    }
`;

const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
`;
