<script>
    import { Promotion } from "@presscommandz/svelte-component"
    let props = {
        listCard: [
            {
                title: "Hello world",
                textButton: "Boom",
                typ: "secondary"
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
</script>

<Promotion props={props}/>
