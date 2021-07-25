import { Writable, writable, get } from "svelte/store"
import Swiper from "swiper/bundle"
import PromotionModel from "@Promotion/PromotionModel"
import { tick } from "svelte"

export default class PromotionViewModel {
    private swiperController: Swiper
    private promotionData: any = {}

    isFlipped: Writable<boolean> = writable(false)
    isSwiper: Writable<boolean> = writable(false)
    windowWidth: Writable<number> = writable(window.innerWidth)

    // MARK: - view data
    get subTitle(): string {
        return this.promotionData.subtitle
    }

    get listCard(): any[] {
        return this.promotionData.listCard
    }

    constructor(data: any) {
        this.promotionData = new PromotionModel(data)

        this.onFlip = this.onFlip.bind(this)
    }

    onMount() {
        this.windowWidth.subscribe(width => {
            if (!get(this.isSwiper) && width < 768) {
                console.log(width, get(this.isSwiper))
                this.isSwiper.set(true)
            } else if (get(this.isSwiper) && width >= 768) {
                console.log(width, get(this.isSwiper))
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
                    spaceBetween: 10,
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
}
