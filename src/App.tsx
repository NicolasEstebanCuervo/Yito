import styled from "@emotion/styled";
import * as Color from "./styles/colors";
import Header from "./sections/header";
import Gallery from "./sections/gallery";
import HowItWorks from "./sections/howItWorks";
import Testimonials from "./sections/testimonials";
import Benefits from "./sections/benefits";
import WorkingTogether from "./sections/workingTogether/Index";
import Services from "./sections/services";
import Portfolio from "./sections/portfolio";
import Pricing from "./sections/pricing";
import CaseStudy from "./sections/caseStudy";
import Blog from "./sections/blog";
import FAQ from "./sections/FAQ/Index";
import Footer from "./sections/footer";

function App() {
    return (
        <Wrapper>
            <Main>
                <Header />
                <Gallery />
                <HowItWorks />
                <Testimonials />
                <Benefits />
                <WorkingTogether />
                <Services />
                <Portfolio />
                <Pricing />
                <CaseStudy />
                <Blog />
                <FAQ />
            </Main>
            <Footer />
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    background: ${Color.SoftWhite};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Main = styled.main`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    max-width: 1500px;
    position: relative;
`;
