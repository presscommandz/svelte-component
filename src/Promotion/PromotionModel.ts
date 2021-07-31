import type PricingPlanModel from "@Promotion/Plan/PricingPlanModel"

export default class PromotionModel implements IPromotionModel {
    title = ""
    subtitle = ""
    note = ""
    listPricingPlanCard

    constructor(data: IPromotionModel) {
        const { title, subtitle, note, listPricingPlanCard } = data
        this.title = title || "Find the right plan"
        this.subtitle = subtitle || "Join the revolution"
        this.note =
            note || "Flexible pricing options for freelancers and design teams"
        this.listPricingPlanCard = listPricingPlanCard || []
    }
}

interface IPromotionModel {
    title: string
    subtitle: string
    note: string
    listPricingPlanCard: PricingPlanModel[]
}
