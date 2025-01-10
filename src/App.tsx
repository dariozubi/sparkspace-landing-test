import Logo from "../public/logo.svg"
import FeedbackCard from "./components/FeedbackCard"
import GaugeCard from "./components/GaugeCard"
import EssaysCard from "./components/EssaysCard"
import RubricCard from "./components/RubricCard"

const App = () => {
    return (
        <div className="flex flex-col flex-1 w-full min-h-screen">
            <div className="h-2 bg-navy-800" />

            <div className="sticky h-10 px-5">
                <div>
                    <img className="h-10" src={Logo} alt="Logo" />
                </div>
            </div>

            <div>
                <div>
                    <p className="mt-10 text-4xl font-bold text-center text-navy-900">Save Time Grading Essays</p>

                    <p className="mt-5 text-lg font-semibold text-center">For ELA teachers in grades 5-12</p>

                    <div className="mx-auto mt-10 flex max-w-[1000px] flex-wrap justify-center gap-4">
                        <FeedbackCard />

                        <GaugeCard />

                        <EssaysCard />

                        <RubricCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
