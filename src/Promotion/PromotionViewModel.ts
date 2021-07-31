import { Writable, writable, get } from "svelte/store"
import Swiper from "swiper/bundle"
import type PromotionModel from "@Promotion/PromotionModel"
import type PricingPlanModel from "@Promotion/Plan/PricingPlanModel"
import PricingPlanViewModel from "@Promotion/Plan/PricingPlanViewModel"
import { tick } from "svelte"

export default class PromotionViewModel {
    private swiperController: Swiper
    private promotionData: PromotionModel

    isFlipped: Writable<boolean> = writable(false)
    isSwiper: Writable<boolean> = writable(false)
    windowWidth: Writable<number> = writable(window.innerWidth)

    constructor(data: PromotionModel) {
        this.promotionData = data
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

    get listPricingPlanCard(): PricingPlanModel[] {
        return this.promotionData.listPricingPlanCard
    }

    private getBreakPointOfSwiper(): {} {
        let breakpoints = {}
        for (let i = 320; i <= 767; i++) {
            breakpoints[i] = {
                slidesPerView: (1.2 + (i - 320) * 0.004).toFixed(2)
            }
        }
        return breakpoints
    }

    onMount() {
        this.windowWidth.subscribe(width => {
            if (!get(this.isSwiper) && width < 768) {
                this.isSwiper.set(true)
            } else if (get(this.isSwiper) && width >= 768) {
                this.isSwiper.set(false)
            }
        })

        let breakpoints = this.getBreakPointOfSwiper()

        this.isSwiper.subscribe(async isSwipable => {
            await tick()
            if (isSwipable) {
                this.swiperController = new Swiper(".mySwiper", {
                    centeredSlides: true,
                    initialSlide: 1,
                    pagination: {
                        el: document.querySelector(
                            ".swiper-pagination"
                        ) as HTMLElement,
                        clickable: true
                    },
                    breakpoints: breakpoints
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

    createPricingPlanViewModel(data: PricingPlanModel): PricingPlanViewModel {
        let planViewModel = new PricingPlanViewModel(data)
        return planViewModel
    }
}
