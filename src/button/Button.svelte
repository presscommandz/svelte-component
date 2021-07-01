<script>
    export let onClick
    export let content
</script>

<style>
    button {
        background-color: #50d9ff;
        border-radius: 5px;
        border: transparent;
    }

    button:active {
        background-color: #28c2ec;
    }
</style>

<button on:click={_ => onClick()}>
    {content || 'Button'}
</button>
