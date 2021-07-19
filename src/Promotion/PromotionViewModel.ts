import PromotionModel from "./PromotionModel"

export default class PromotionViewModel {
    unsubcribeIsMonthly: any

    promotionData = {}
    constructor(props: PromotionModel) {
        this.promotionData = new PromotionModel(props)
    }

    onMount() {}
    onDestroy() {}
}
