import { Card } from "./ui/card"
import WarningIcon from "../assets/landing/warning.svg"
import { useCallback, useEffect, useState } from "react"

function GaugeCard() {
    const [rotationClass, setRotationClass] = useState("rotate-[calc(-44deg)]")

    useEffect(() => {
        setTimeout(() => {
            setRotationClass(`rotate-[calc(27deg)]`)
        }, 20)
    }, [])

    return (
        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
            <div className="flex flex-col items-center justify-center gap-2">
                <img className="w-16 h-16" src={WarningIcon} alt="AI Detection" />

                <p>AI Detection</p>
            </div>
            <div className="flex w-[200px] items-center justify-center">
                <div>
                    <p className="mb-3 text-sm">Probability AI generated</p>
                    <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-navy-900">
                        <div
                            className={`absolute top-0 aspect-square w-full ${rotationClass} bg-gradient-to-tr from-transparent from-50% to-white to-50% transition-transform duration-1000`}
                        ></div>
                        <div className="absolute flex justify-center w-3/4 bg-white rounded-full top-1/4 aspect-square"></div>
                        <PercentageDisplay />
                    </div>
                </div>
            </div>
        </Card>
    )
}

function PercentageDisplay() {
    const [percentage, setPercentage] = useState(0)
    const updatePercentage = useCallback((value: number) => {
        if (value < 41) {
            setPercentage(value)
            setTimeout(() => updatePercentage(value + 1), 10)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            updatePercentage(1)
        }, 20)
    }, [updatePercentage])
    return <div className="absolute bottom-0 w-full text-2xl leading-none text-center truncate">{`${percentage}%`}</div>
}

export default GaugeCard
