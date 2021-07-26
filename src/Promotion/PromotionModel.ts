import PlanModel from "@Promotion/Plan/PlanModel"

export default class PromotionModel {
    title: string
    subtitle: string
    note: string
    listCard: Array<PlanModel>
    type: string

    constructor(data) {
        const { title, subtitle, note, type, listCard } = data
        this.title = title || "Find the right plan"
        this.subtitle = subtitle || "Join the revolution"
        this.note =
            note || "Flexible pricing options for freelancers and design teams"
        this.type = type || "primary"
        this.listCard = listCard.map(i => new PlanModel({ i })) || []
    }
}
