export default class PlanModel {
    title: string
    price: number
    drawbacks: Array<string>
    advances: Array<string>
    button: string
    constructor(data) {
        const { title, price, drawbacks, advances, button } = data
        this.title = title || "hello"
        this.price = price || 0
        this.drawbacks = drawbacks || []
        this.advances = advances || []
        this.button = button || "Free"
    }
}
