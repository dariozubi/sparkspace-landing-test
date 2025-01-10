import { useCallback, useLayoutEffect, useRef } from "react"
import GradedPaperIcon from "../assets/landing/paper.svg"
import { Card } from "@/components/ui/card"

function FeedbackCard() {
    return (
        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
            <div className="flex flex-col items-center justify-center">
                <img className="w-16 h-16" src={GradedPaperIcon} alt="Graded Paper" />

                <p>AI Feedback</p>
            </div>
            <div className="flex w-[200px] items-center justify-center">
                <div>
                    <AIMessage />
                </div>
            </div>
        </Card>
    )
}

const CANNED_FEEDBACK =
    "**Summary Evaluation Against Rubric: Accuracy (10/10):** The essay presents accurate information about Abraham Lincoln's life, presidency, and significant contributions, including key events like his election, the Civil..."

function AIMessage() {
    const text = useRef<HTMLParagraphElement>(null)
    const showed = useRef(false)
    const showMessage = useCallback((index: number, timeout: number) => {
        if (index < CANNED_FEEDBACK.length) {
            text.current?.append(CANNED_FEEDBACK[index])
            setTimeout(() => showMessage(index + 1, Math.ceil(Math.random() * 15)), timeout)
        }
    }, [])

    useLayoutEffect(() => {
        if (!showed.current) {
            showMessage(0, 20)
            showed.current = true
        }
    }, [showMessage])
    return <p className="min-h-[160px] text-sm" ref={text} />
}

export default FeedbackCard
