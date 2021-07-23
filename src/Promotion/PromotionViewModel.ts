import { Writable, writable } from "svelte/store"
import Swiper from "swiper/bundle"
import PromotionModel from "@Promotion/PromotionModel"

export default class PromotionViewModel {
    private isFlipped: boolean
    mySwiper: HTMLElement
    swiperController: Swiper
    isSwiper: Writable<boolean>
    promotionData = {}

    constructor(props) {
        this.promotionData = new PromotionModel({ ...props })
        this.isFlipped = false
        this.isSwiper = writable(false)
    }

    onFlip() {
        this.isFlipped = !this.isFlipped
        document.querySelectorAll(".card").forEach((item: HTMLElement) => {
            item.classList.toggle("isFlipped")
        })
    }

    detectWidth(width: number) {
        if (width < 768) {
            this.isSwiper.set(true)
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
            this.isSwiper.set(false)
            this.swiperController?.destroy()
        }
    }

    onMount() {}
    onDestroy() {
        this.swiperController?.destroy()
    }
}
