<script>
    import { Promotion, Carousel } from "@presscommandz/svelte-component"

    let props = {
        title: "Find the right plan",
        subtitle: "Join the revolution",
        note: "Flexible pricing options for freelancers and design teams.",
        isFlipped: true
    }
</script>

<Promotion {props} />
