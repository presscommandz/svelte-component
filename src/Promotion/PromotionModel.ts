export default class PromotionModel {
    title: string
    subtitle: string
    note: string
    isFlipped: boolean
    constructor(props: any) {
        const { title, subtitle, note, isFlipped } = props
        this.title = title || "Hello"
        this.subtitle = subtitle || "World"
        this.note = note || "Test"
        this.isFlipped = isFlipped || false
    }
}
