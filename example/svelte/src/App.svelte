<script>
    import { Promotion, Plan } from "@presscommandz/svelte-component"
    let props = {
        title: "Find the right plan",
        subtitle: "Join the revolution",
        note :"Flexible pricing options for freelancers and design teams.",
        isMonthly: true
    }
</script>

<Promotion props={props}>
    <Plan price="9" />
    <Plan price="9"/>
    <Plan price="9"/>
</Promotion>