import { useEffect, useState } from "react"
import GoogleClassroomIcon from "../assets/landing/google-classroom.svg"
import { Card } from "./ui/card"

function EssaysCard() {
    const [transformClass, setTransformClass] = useState("translate-x-80 scale-0")

    useEffect(() => {
        setTimeout(() => setTransformClass("translate-x-0 scale-100"), 100)
    }, [])
    return (
        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
            <div
                className={`flex flex-col items-center justify-center ${transformClass} transition-transform duration-1000`}
            >
                <img className={`h-16 w-16`} src={GoogleClassroomIcon} alt="Import Essays" />

                <p>Import Essays</p>
            </div>
            <div className="flex w-[200px] items-center justify-center">
                <div></div>
            </div>
        </Card>
    )
}

export default EssaysCard
