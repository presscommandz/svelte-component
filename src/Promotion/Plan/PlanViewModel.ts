import type PlanModel from "@Promotion/Plan/PlanModel"

export default class PlanViewModel {
    private planData: PlanModel

    constructor(data: PlanModel) {
        this.planData = data
    }

    get title(): string {
        return this.planData.title
    }

    get price(): number {
        return this.planData.price
    }

    get drawbacks(): Array<string> {
        return this.planData.drawbacks
    }

    get advances(): Array<string> {
        return this.planData.advances
    }

    get text(): string {
        return this.planData.button
    }
}
