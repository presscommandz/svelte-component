interface IPricingPlan {
    planTitle: NonNullable<string>
    planPrice: NonNullable<number>
    unit: string
    drawbacks: string[]
    advances: string[]
    textButton: string
}

export default class PricingPlanModel {
    planTitle
    planPrice
    unit
    drawbacks = []
    advances = []
    textButton

    constructor(data: IPricingPlan) {
        const { planTitle, planPrice, drawbacks, advances, textButton, unit } =
            data
        if (typeof planTitle != "string" || planTitle == "") {
            throw new Error("planTitle must be a string")
        } else {
            this.planTitle = planTitle
        }
        if (typeof planPrice != "number") {
            throw new Error("planPrice must be a number")
        } else {
            this.planPrice = planPrice
        }
        this.unit = unit || "$"
        this.drawbacks = drawbacks || []
        this.advances = advances || []
        this.textButton = textButton || "Get Free"
    }
}
