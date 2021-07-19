import { writable, Writable } from "svelte/store"
import PromotionModel from "./PromotionModel"

export default class PromotionViewModel {
    isMonthly: Writable<boolean>
    listCard: any
    unsubcribeIsMonthly: any

    promotionData = {}
    constructor(props: PromotionModel) {
        const { isMonthly } = props
        this.promotionData = new PromotionModel(props)
        this.isMonthly = writable(isMonthly)
        this.listCard = document.getElementsByClassName("flip-card-inner")
    }

    flip() {
        this.isMonthly.update(x => !x)
    }
    onMount() {
        this.unsubcribeIsMonthly = this.isMonthly.subscribe(x => {
            for (let i = 0; i < this.listCard.length; i++) {
                this.listCard[i].style.transform = `rotateY(${
                    x ? "0" : "180deg"
                })`
            }
        })
    }
    onDestroy() {
        this.unsubcribeIsMonthly()
    }
}
