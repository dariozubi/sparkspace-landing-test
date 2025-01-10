import { useEffect, useState } from "react"
import RubricIcon from "../assets/landing/rubric.svg"
import { Card } from "./ui/card"

function RubricCard() {
    const [transformClass, setTransformClass] = useState("rotate-180 scale-0")

    useEffect(() => {
        setTimeout(() => setTransformClass("rotate-[-720deg] scale-100"), 100)
    }, [])
    return (
        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
            <div className={`flex flex-col items-center justify-center ${transformClass} duration-1000`}>
                <img className="w-16 h-16" src={RubricIcon} alt="Use Your Rubric" />

                <p>Use Your Rubric</p>
            </div>
            <div className="flex w-[200px] items-center justify-center">
                <div></div>
            </div>
        </Card>
    )
}

export default RubricCard
