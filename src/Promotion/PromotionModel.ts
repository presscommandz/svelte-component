export default class PromotionModel {
    title: string
    subtitle: string
    note: string
    isMonthly: boolean
    constructor(props: any) {
        const { title, subtitle, note, isMonthly } = props
        this.title = title || 'Hello'
        this.subtitle = subtitle || 'World'
        this.note = note || 'Test'
        this.isMonthly = isMonthly || true
    }
}