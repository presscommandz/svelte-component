import PromotionModel from "./PromotionModel"

export default class PromotionViewModel {
    promotionData = {}
    isFlipped: boolean

    constructor(props: PromotionModel) {
        this.promotionData = new PromotionModel(props)
        const { isFlipped } = props
        this.isFlipped = isFlipped
    }

    onFlip() {
        this.isFlipped = !this.isFlipped
        document.querySelectorAll(".card").forEach((item: HTMLElement) => {
            item.classList.toggle("isFlipped")
        })
    }

    onMount() {}
    onDestroy() {}
}
