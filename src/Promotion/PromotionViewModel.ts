import { Writable, writable } from "svelte/store"
import Swiper from "swiper/bundle"

export default class PromotionViewModel {
    private isFlipped: boolean
    mySwiper: HTMLElement
    swiperController: Swiper
    isSwiper: Writable<boolean>

    constructor(props) {
        this.isFlipped = false
        this.isSwiper = writable(false)
    }

    onFlip() {
        this.isFlipped = !this.isFlipped
        document.querySelectorAll(".card").forEach((item: HTMLElement) => {
            item.classList.toggle("isFlipped")
        })
    }

    async detectWidth(width: number) {
        if (width < 768) {
            await this.isSwiper.set(true)
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
        }
    }

    onMount() {}
    onDestroy() {
        if (this.swiperController) {
            this.swiperController.destroy()
        }
    }
}
