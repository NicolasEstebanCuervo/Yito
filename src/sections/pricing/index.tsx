import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import {
    ChromeIcon,
    CodeBracketIcon,
    HubSpotIcon,
    InfinityIcon,
    LightningIcon,
    LikeIcon,
    ListIcon,
    MessageCheckIcon,
    MessagePlusIcon,
    MonitorIcon,
    PencilIcon,
    SunIcon,
    SyncIcon,
    TerminalIcon,
    UserPlusIcon,
    WebFlowIcon,
    WordPressIcon,
} from "../../assets/SVGIcons";
import { GradientHorizontalLineSVG } from "../../assets/SVGFigures";
import { SectionContainer } from "../../styles/sectionContainer";
import SectionHeader from "../../componentes/sectionHeader";
import CustomPlanCard from "../../componentes/customPlanCard";
import PricingCard from "../../componentes/pricingCard";
import PricingCustomcard from "../../componentes/pricingCustomCard";

export default function Pricing() {
    const designServices = [
        {
            icon: <MessagePlusIcon />,
            description: "One request at a time",
        },
        {
            icon: <InfinityIcon />,
            description: "Unlimited brands & amends",
        },
        {
            icon: <MonitorIcon />,
            description: "Requests Portal",
        },
        {
            icon: <SunIcon />,
            description: "Sustainability program",
        },
        {
            icon: <SyncIcon />,
            description: "Fast turnaround times",
        },
        {
            icon: <LikeIcon />,
            description: "Instant onboarding",
        },
        {
            icon: <PencilIcon />,
            description: "Logo, brand & print design",
        },
        {
            icon: <ListIcon />,
            description: "And 100+ more design services",
        },
    ];

    const developmentServices = [
        {
            icon: <TerminalIcon />,
            description: "Landing pages",
        },
        {
            icon: <WebFlowIcon />,
            description: "Webflow development",
        },
        {
            icon: <WordPressIcon />,
            description: "Wordpress development",
        },
        {
            icon: <HubSpotIcon />,
            description: "HubSpot development",
        },
        {
            icon: <CodeBracketIcon />,
            description: "Email development",
        },
        {
            icon: <ChromeIcon />,
            description: "Search Engine Optimisation (SEO)",
        },
    ];

    const customServices = [
        {
            description: "Fully personalised plan",
        },
        {
            description: "Choose the services you need",
        },
        {
            description: "Unlimited requests at a time",
        },
        {
            description: "Enterprise-level SLAs",
        },
    ];

    return (
        <PricingSection as="section" id="pricingSection">
            <SectionHeader
                sectionTitle="Pick your perfect plan"
                sectionSubtitle="Simple pricing, zero headaches. Choose a plan that fits and let's get to work!"
                overlineText="PRICING"
            />

            <PricingCardsContainer>
                <PricingCustomcard
                    cardHeading="Customised"
                    cardContent="Best for scaling businesses with high-volume needs. Reach out to us today to tailor a package that meets your specific requirements."
                    cardServices={customServices}
                />
                <PricingCard
                    cardTagText="Most popular"
                    cardHeading="Design"
                    cardContent="One request at a time. Pause or cancel anytime. View our FAQs for more information."
                    cardPrice="$1,295"
                    cardDuration="/month"
                    cardPlanTitle="This plans includes..."
                    cardServices={designServices}
                    borderColor={Color.GoldenSun}
                />

                <PricingCard
                    cardTagText="Best value"
                    cardHeading="Design + Development"
                    cardContent="One request at a time. Pause or cancel anytime. View our FAQs for more information."
                    cardPrice="$1,995"
                    cardDuration="/month"
                    cardPlanTitle="Everything in design, plus..."
                    cardServices={developmentServices}
                    borderColor={Color.BluePurple}
                />
            </PricingCardsContainer>
            <SectionHeaderPlanCustom>
                <SectionHeader
                    sectionTitle="Customise your plan"
                    sectionSubtitle="Enhance your plan with add-ons, designed to fit your unique needs."
                    overlineText="PRICING"
                />
                <GradientHorizontalLineSVG />
            </SectionHeaderPlanCustom>
            <CustomPlanCardsContainer>
                <CustomPlanCard
                    icon={<LightningIcon />}
                    cardTagText="All plans"
                    cardHeading="Yito Boost"
                    cardContent="Got a large campaign coming up? We've got you covered. Double up your requests for one week."
                    cardPrice="$399"
                    cardDuration="/week"
                />

                <CustomPlanCard
                    icon={<MessageCheckIcon />}
                    cardTagText="All plans"
                    cardHeading="Dedicated Comms"
                    cardContent="We'll join your Slack or Microsoft Teams shared channel, for seamless communication with your team."
                    cardPrice="$99"
                    cardDuration="/month"
                />

                <CustomPlanCard
                    icon={<UserPlusIcon />}
                    cardTagText="All plans"
                    cardHeading="Invite Team Members"
                    cardContent="Add your team members to your subscription, allowing them to create and monitor tasks within your portal."
                    cardPrice="$16"
                    cardDuration="/user/month"
                />
            </CustomPlanCardsContainer>
        </PricingSection>
    );
}

const PricingSection = styled(SectionContainer)``;

const SectionHeaderPlanCustom = styled.section`
    position: relative;
`;

const PricingCardsContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;

const CustomPlanCardsContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;
