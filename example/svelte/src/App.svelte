<script>
    import { Promotion, Card, Plan } from "@presscommandz/svelte-component"

    let props = {
        title: "Find the right plan",
        subtitle: "Join the revolution",
        note: "Flexible pricing options for freelancers and design teams.",
        isMonthly: true
    }

    let isFlipped = false

    const flip = _ => (isFlipped = !isFlipped)
</script>

<Promotion {props} onFlip={flip} {isFlipped} />
