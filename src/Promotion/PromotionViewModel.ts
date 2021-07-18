export default class PromotionViewModel {
    isMonthly: boolean
    listCard: HTMLElement
    constructor() {
        this.isMonthly = true
        this.listCard = document.getElementsByClassName('flip-card-inner')
    }

    flip() {
        this.isMonthly = !this.isMonthly
    }

    onMount() {
      if (this.isMonthly) {
        for(let i = 0; i < this.listCard.length; i++) {
          this.listCard[i].style.transform = 'rotateY(0)'
        }
      } else {
        for(let i = 0; i < this.listCard.length; i++) {
          this.listCard[i].style.transform = 'rotateY(180deg)'
        }
      }
    }
    onDestroy() {}
}
