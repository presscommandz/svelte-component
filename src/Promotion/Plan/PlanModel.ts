export default class PlanModel {
    title: string
    price: number
    drawbacks: Array<string>
    advances: Array<string>
    textButton: string
    constructor(data) {
        const { title, price, drawbacks, advances, textButton } = data
        this.title = title || "hello"
        this.price = price || 0
        this.drawbacks = drawbacks || ["abc1", "abc2"]
        this.advances = advances || ["xyz"]
        this.textButton = textButton || "Free"
    }
}
