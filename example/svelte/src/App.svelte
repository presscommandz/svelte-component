<script>
    import { Promotion } from "@presscommandz/svelte-component"
    import { PromotionViewModel } from "@presscommandz/svelte-component"
    let data = {
        subtitle: "Hello World",
        listCard: [
            {
                title: "Free",
                button: "Get free",
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
            },
            {
                title: "Pro",
                button: "Get pro",
                price: 99,
                drawbacks: ["Limitted diagram", "Limitted change theme"],
                advances: [
                    "1000 nodes per diagram",
                    "Use custom color",
                    "5 contributors",
                    "Save in cloud",
                    "Full export options",
                    "Default color set"
                ]
            },
            {
                title: "Premium",
                button: "Get premium",
                price: 199,
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
            }
        ]
    }

    const promotionViewModel = new PromotionViewModel(data)
</script>

<Promotion
    viewModel={promotionViewModel}
    backgroundColor={"red"}
    heightOfCard={390}
/>
