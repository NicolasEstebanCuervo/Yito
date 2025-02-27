import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { CurveArrowSVG } from "../../assets/SVGFigures";
import { MediumSmallText, SmallText } from "../../styles/fonts";
import Button from "../button";

interface ServiceCardProps {
    cardHeading?: string;
    serviceList: string[];
    buttonText?: string;
    hasBackground?: boolean;
}

export default function ServiceCard({
    cardHeading,
    serviceList,
    buttonText,
    hasBackground = false,
}: ServiceCardProps) {
    return (
        <ServiceCardWrapper hasBackground={hasBackground}>
            {cardHeading && (
                <MediumSmallText color={Color.SoftWhite}>
                    {cardHeading}
                </MediumSmallText>
            )}

            {hasBackground && <CurveArrowSVG />}

            <ServicesList>
                {serviceList.map((service, index) => (
                    <>
                    <ServiceItem key={index}>
                        <SmallText
                            color={
                                hasBackground
                                    ? Color.SoftWhite
                                    : Color.CharcoalGray
                            }
                        >
                            {service}
                        </SmallText>
                        {index !== serviceList.length - 1 && (
                            <Divider hasBackground={hasBackground} />
                        )}
                    </ServiceItem>
                    </>
                ))}
            </ServicesList>

            {buttonText && <Button href="" buttonText={buttonText} />}
        </ServiceCardWrapper>
    );
}

const ServiceCardWrapper = styled.div<{ hasBackground: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    padding: 2rem;
    background: ${({ hasBackground }) =>
        hasBackground ? Color.BluePurple : Color.SoftWhite};
    border-radius: 10px;
    width: 100%;
    max-width: 350px;
    position: relative;

    @media (max-width: 750px) {
        padding: 1rem;
    }
`;

const ServicesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const ServiceItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Divider = styled.div<{ hasBackground: boolean }>`
    width: 90%;
    height: 1px;
    background: ${({ hasBackground }) =>
        hasBackground ? "rgba(255, 255, 255, 0.18)" : "rgba(51, 51, 51, 0.18)"};
`;
