<script>
    import { Promotion } from "@presscommandz/svelte-component"

    const {
        PromotionView,
        PricingPlanModel,
        PromotionModel,
        PromotionViewModel
    } = Promotion

    let card_1 = new PricingPlanModel({
        planTitle: "Free",
        planPrice: 0,
        textButton: "Get free",
        drawbacks: [
            "Limitted diagram",
            "Change theme diagram",
            "50 nodes per diagram",
            "Use custom color",
            "2 contributors",
            "Save in cloud",
            "Limitted export"
        ],
        advances: ["Default color set"]
    })

    let card_2 = new PricingPlanModel({
        planTitle: "Pro",
        textButton: "Get pro",
        planPrice: 99,
        unit: "$",
        drawbacks: ["Limitted diagram", "Limitted change theme"],
        advances: [
            "1000 nodes per diagram",
            "Use custom color",
            "5 contributors",
            "Save in cloud",
            "Full export options",
            "Default color set"
        ]
    })
    let card_3 = new PricingPlanModel({
        planTitle: "Premium",
        textButton: "Get premium",
        planPrice: 199,
        unit: "$",
        advances: [
            "Unlimitted diagram",
            "Unlimmited change theme",
            "Unlimitted node",
            "Use custom color",
            "Unlimitted contributors",
            "Save in cloud",
            "Full export options",
            "Default color set"
        ]
    })

    let data = new PromotionModel({
        listPricingPlanCard: [card_1, card_2, card_3]
    })
    let promotionViewModel = new PromotionViewModel(data)

    function getAlert(e) {
        alert(e.detail.planTitle)
    }
</script>

<PromotionView
    viewModel={promotionViewModel}
    backgroundColor={"red"}
    heightOfCard={390}
    on:getPlanInformation={getAlert}
/>
