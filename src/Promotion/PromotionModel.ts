export default class PromotionModel {
    title: string
    subtitle: string
    note: string
    listCard: Array<CardModel>
    type: string

    constructor(data) {
        const { title, subtitle, note, type, listCard } = data
        this.title = title || "Find the right plan"
        this.subtitle = subtitle || "Join the revolution"
        this.note =
            note || "Flexible pricing options for freelancers and design teams"
        this.type = type || "primary"
        this.listCard = listCard.map(i => new CardModel({ i })) || []
    }
}

class CardModel {
    title: string
    price: number
    drawbacks: Array<string>
    advances: Array<string>
    textButton: string
    constructor(data) {
        const { title, price, drawbacks, advances, textButton } = data
        this.title = title || "hello"
        this.price = price || 0
        this.drawbacks = drawbacks || ["unlimitted"]
        this.advances = advances || ["2 contributors"]
        this.textButton = textButton || "Free"
    }
}
