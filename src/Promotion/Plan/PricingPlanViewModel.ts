import type PricingPlanModel from "@Promotion/Plan/PricingPlanModel"

export default class PricingPlanViewModel {
    private data: PricingPlanModel

    constructor(data: PricingPlanModel) {
        this.data = data
    }

    get planTitle(): string {
        return this.data.planTitle
    }

    get planPrice(): number {
        return this.data.planPrice
    }

    get unit(): string {
        return this.data.unit
    }

    get drawbacks(): string[] {
        return this.data.drawbacks
    }

    get advances(): string[] {
        return this.data.advances
    }

    get textButton(): string {
        return this.data.textButton
    }
}
