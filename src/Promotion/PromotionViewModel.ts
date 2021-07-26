import { Writable, writable, get } from "svelte/store"
import Swiper from "swiper/bundle"
import PromotionModel from "@Promotion/PromotionModel"
import type PlanModel from "@Promotion/Plan/PlanModel"
import PlanViewModel from "@Promotion/Plan/PlanViewModel"
import { tick } from "svelte"

export default class PromotionViewModel {
    private swiperController: Swiper
    private promotionData: any = {}

    isFlipped: Writable<boolean> = writable(false)
    isSwiper: Writable<boolean> = writable(false)
    windowWidth: Writable<number> = writable(window.innerWidth)

    constructor(data: any) {
        this.promotionData = new PromotionModel(data)
        this.onFlip = this.onFlip.bind(this)
    }

    get title(): string {
        return this.promotionData.title
    }

    get subTitle(): string {
        return this.promotionData.subtitle
    }

    get note(): string {
        return this.promotionData.note
    }

    get listCard(): PlanModel[] {
        return this.promotionData.listCard
    }

    onMount() {
        this.windowWidth.subscribe(width => {
            if (!get(this.isSwiper) && width < 768) {
                this.isSwiper.set(true)
            } else if (get(this.isSwiper) && width >= 768) {
                this.isSwiper.set(false)
            }
        })

        this.isSwiper.subscribe(async isSwipable => {
            await tick()
            if (isSwipable) {
                this.swiperController = new Swiper(".mySwiper", {
                    slidesPerView: 1.2,
                    centeredSlides: true,
                    loop: false,
                    spaceBetween: 5,
                    pagination: {
                        el: document.querySelector(
                            ".swiper-pagination"
                        ) as HTMLElement,
                        clickable: true
                    }
                })
            } else {
                this.swiperController?.destroy()
            }
        })
    }
    onDestroy() {
        this.swiperController?.destroy()
    }

    onFlip() {
        this.isFlipped.set(!get(this.isFlipped))
    }

    createPlanViewModel(data: PlanModel): PlanViewModel {
        let planViewModel = new PlanViewModel(data)
        return planViewModel
    }
}
