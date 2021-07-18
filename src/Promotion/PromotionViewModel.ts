export default class PromotionViewModel {
    isMonthly: boolean
    listCard: HTMLElement
    constructor() {
        this.isMonthly = true
        this.listCard = document.getElementsByClassName('flip-card-inner')
    }

    flip() {
        this.isMonthly = !this.isMonthly
        if (!this.isMonthly) {          
          for(let i = 0; i < this.listCard.length; i++) {
            this.listCard[i].style.transform = 'rotateY(180deg)'
          }
        } else {
          for(let i = 0; i < this.listCard.length; i++) {
            this.listCard[i].style.transform = 'rotateY(0)'
          }
        }
    }
}
