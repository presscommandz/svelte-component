<script>
    export let title = "Hello"
    export let subtitle = "World"
    export let note = "what's up ?"
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .container .header {
        text-align: center;
        margin-bottom: 50px;
    }
    .container .header h1 {
        font-size: 56px;
        margin-block-start: .3em;
        color: #4fb6e0;
        font-weight: 100;
    }
    .container .header h2 {
        font-size: 40px;
        margin-block-end: .3em;
        font-weight: 100;
    }
    .container .header h3 {
        color: #a7acb9;
        font-weight: 100;
        width: 320px;
        word-wrap: break-word;
        margin-left: auto;
        margin-right: auto;
    }
    .container .pricing {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    @media (max-width: 1023px) {
        .container .header h1 {
            font-size: 40px;
        }
        .container .header h2 {
            font-size: 24px;
        }
    }
</style>

<div class="container">
    <div class="header">
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
        <h3>{note}</h3>
    </div>
    <div class="pricing">
        <slot />
    </div>
</div>