<script>
    import { Promotion } from "@presscommandz/svelte-component"
    import { PromotionViewModel } from "@presscommandz/svelte-component"
    let data = {
        subtitle: "Fuck you",
        listCard: [
            {
                title: "Hello world",
                textButton: "Boom",
                typ: "secondary123"
            },
            {
                title: "Hello world",
                textButton: "Boom",
                typ: "secondary"
            },
            {
                title: "Hello world",
                textButton: "Boom",
                typ: "secondary"
            }
        ]
    }

    const promotionViewModel = new PromotionViewModel(data)
</script>

<Promotion viewModel={promotionViewModel} backgroundColor={"fuck"} />
