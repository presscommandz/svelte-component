<script>
    export let isMonthly
    console.log(isMonthly)
    export let banner = false
    export let price
    export let drawbacks = ["Some diagrams", "Unlimitted contributors"]
    export let advances = ["All other features"]
    export let onClick
    export let type = "primary"

    let backgroundColor;
    switch(type) {
        case "primary": {
            backgroundColor = "#ffffff"
            break
        }
        case "secondary" : {
            backgroundColor = "#3283da"
            break
        }
        default: break
    }
</script>
<style>
    .container {
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        border-radius: 5px;
        box-shadow: 2px 2px 20px 6px #dbdbdb;
        transition: 300ms;
    }
    .container .package-header h2 {
        margin-top: 10px;
        margin-bottom: 5px;
        font-size: 32px;
        font-weight: 300;
    }
    .container .cost h1 {
        font-size: 48px;
        font-weight: 500;
        margin-block-start: 0.3em;
        margin-block-end: 0.3em;
    }
    .feature {
        width: 80%;
        margin: 10px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .feature span {
        margin: 5px;
        display: inline-block;
        vertical-align: middle;
    }
    /* .feature span img {
        width: 16px;
        height: 16px;
    } */
    .btn {
        margin-top: 40px;
        margin-bottom: 30px;
        width: 65%;
        padding: 5px;
        border: transparent;
        border-radius: 10px;
        color: #f3f8f3;
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        background: #79af7e;
        transition: 300ms;
        cursor: pointer;
        outline: none;
    }
    .btn:hover {
        background: #6ea774;
    }

    @media (max-width: 1023px) {
        .container {
            width: 240px;
            margin: 5px;
        }
        .container .package-header h2 {
            font-size: 24px;
        }
        .container .cost h1 {
            font-size: 40px;
        }
        .feature {
            width: 85%;
            margin: 5px;
        }
        .btn {
            margin-top: 40px;
            margin-bottom: 20px;
            font-size: 24px;
        }
    }
</style>
<div class="container" style="background: {backgroundColor}">
   <div class="package-header">
       <h2>Pro</h2>
       {#if banner}
            <div class="banner">{"popular"}</div>
       {/if}
   </div>
   <div class="cost">
        <h1>{price}</h1>
   </div>
   <div class="feature">
        {#each advances as advance}
            <span>+ {advance}</span>
        {/each}
        {#each drawbacks as drawback}
            <span>- {drawback}</span>
        {/each}
   </div>
   <button class="btn" on:click={onClick}>
        Get pro
   </button>
</div>