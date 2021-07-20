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

<Promotion {props} onFlip={flip} {isFlipped}>
    <Card {isFlipped}>
        <Plan slot="front" />
        <Plan slot="back" title="Free(year)" />
    </Card>
    <Card {isFlipped}>
        <Plan slot="front" />
        <Plan slot="back" title="Free(year)" />
    </Card>
    <Card {isFlipped}>
        <Plan slot="front" />
        <Plan slot="back" title="Free(year)" />
    </Card>
</Promotion>
