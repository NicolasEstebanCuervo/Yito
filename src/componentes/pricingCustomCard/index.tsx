import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { backgroundDoodle } from "../../assets/images";
import { CheckCircleIcon, DiagonalArrowIcon } from "../../assets/SVGIcons";
import { StraightArrowSVG } from "../../assets/SVGFigures";
import { MediumSmallText, SmallerText, TinyText } from "../../styles/fonts";
import Button from "../button";

interface ServiceProps {
    description: string;
}

interface PricingCustomCardProps {
    cardHeading: string;
    cardContent: string;
    cardServices: ServiceProps[];
}

export default function PricingCustomCard({
    cardHeading,
    cardContent,
    cardServices,
}: PricingCustomCardProps) {
    return (
        <PricingCustomCardWrapper>
            <StraightArrowSVG />
            <PricingCustomCardContent>
                <PricingCustomCardHeader>
                    <MediumSmallText color={Color.SoftWhite}>
                        {cardHeading}
                    </MediumSmallText>
                    <SmallerText color={Color.SoftWhite}>
                        {cardContent}
                    </SmallerText>
                </PricingCustomCardHeader>

                <ServicesList>
                    {cardServices.map((service, index) => (
                        <ServiceItem key={index}>
                            <CheckCircleIcon color={Color.SoftWhite} />
                            <TinyText color={Color.SoftWhite}>
                                {service.description}
                            </TinyText>
                        </ServiceItem>
                    ))}
                </ServicesList>
            </PricingCustomCardContent>

            <Button
                href=""
                buttonText="Book a discovery call"
                icon={<DiagonalArrowIcon color={Color.CharcoalGray} />}
                backgroundColor={Color.SoftWhite}
            />
        </PricingCustomCardWrapper>
    );
}

const PricingCustomCardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    gap: 3rem;
    padding: 2rem;
    border-radius: 10px;
    position: relative;
    background: url(${backgroundDoodle});
    background-size: cover;
    width: 100%;
    max-width: 350px;

    @media (max-width: 500px) {
        padding: 1.5rem;
    }
`;

const PricingCustomCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const PricingCustomCardHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ServicesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ServiceItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
