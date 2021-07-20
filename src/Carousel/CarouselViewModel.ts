import Swiper from "swiper/bundle"

export default class CarouselViewModel {
    container: HTMLElement
    swiperController: Swiper
    slidePerView: number
    showAdjacentSlideEdge: boolean
    loop: boolean
    autoplay: Object
    isFlex: boolean
    pagination: boolean

    constructor(object: any) {
        const {
            slidePerView,
            showAdjacentSlideEdge,
            autoplay,
            isFlex,
            loop,
            pagination
        } = object
        this.slidePerView = slidePerView || 1.2
        this.showAdjacentSlideEdge = showAdjacentSlideEdge || true
        this.autoplay = autoplay || false
        this.isFlex = isFlex || false
        this.loop = loop || false
        this.pagination = pagination || false
    }

    onMount() {
        const slidePerView = this.showAdjacentSlideEdge
            ? "auto"
            : this.slidePerView

        const children = this.container.querySelectorAll(".swiper-wrapper > *")

        children.forEach((item: HTMLElement) => {
            item.classList.add("swiper-slide")
        })

        if (this.showAdjacentSlideEdge) {
            children.forEach((item: HTMLElement) => {
                const marginX =
                    window.getComputedStyle(item).marginLeft || "0px"
                const paddingX =
                    window.getComputedStyle(item).paddingLeft || "0px"
                // Assuming element has same margin and padding in left and right side
                // Show 16px of each adjacent slide
                item.style.width = this.isFlex
                    ? "250px"
                    : `calc(100% / ${this.slidePerView} - 2 * (${marginX} + ${paddingX}) - 2 * 16px)`
            })
        }

        this.swiperController = new Swiper(this.container, {
            slidesPerColumn: 1,
            slidesPerView: slidePerView,
            centeredSlides: true,
            loop: this.loop,
            loopedSlides: this.slidePerView,
            autoplay: this.autoplay,
            pagination: this.pagination
        })
    }

    onDestroy() {
        if (this.swiperController) {
            this.swiperController.destroy()
        }
    }
}
