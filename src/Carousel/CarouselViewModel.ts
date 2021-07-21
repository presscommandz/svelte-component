import Swiper from "swiper/bundle"

export default class CarouselViewModel {
    mySwiper: HTMLElement
    swiperController: Swiper

    constructor(options) {}

    onMount() {
        this.swiperController = new Swiper(".mySwiper", {
            slidesPerView: 1.3,
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination"
            }
        })
    }

    onDestroy() {
        if (this.swiperController) {
            this.swiperController.destroyed
        }
    }
}
