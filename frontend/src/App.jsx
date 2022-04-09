import "./app.scss"

// Components:
import {
    HomePageSection,
    Topbar,
    Intro,
    Portfolio,
    Works,
    Testimonials,
    Contact,
} from "./Components"

function App() {
    return (
        <div className="app">
            <Topbar />
            <div className="sections">
                <HomePageSection>Hello</HomePageSection>
                <Intro />
                <Portfolio />
                <Works />
                <Testimonials />
                <Contact />
            </div>
        </div>
    )
}

export default App
