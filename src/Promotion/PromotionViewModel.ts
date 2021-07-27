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

    private createBreakPoint(): {} {
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

        let listBreakpoints = this.createBreakPoint()

        this.isSwiper.subscribe(async isSwipable => {
            await tick()
            if (isSwipable) {
                this.swiperController = new Swiper(".mySwiper", {
                    centeredSlides: true,
                    pagination: {
                        el: document.querySelector(
                            ".swiper-pagination"
                        ) as HTMLElement,
                        clickable: true
                    },
                    breakpoints: listBreakpoints
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
