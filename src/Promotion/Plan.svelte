<script>
    export let title
    export let banner = false
    export let price
    export let drawbacks = ["Some diagrams", "Unlimitted contributors"]
    export let advances = ["All other features"]
    export let onClick
    export let textButton
</script>

<style>
    .container {
        width: 280px;
        padding: 20px 5px;
        box-shadow: 0px 2px 20px 2px #d3cfcf;
        border-radius: 10px;
    }
    .package-header h2 {
        font-size: 28px;
    }
    .cost h1 {
        font-size: 42px;
        font-weight: 200;
    }
    .feature {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 10px;
    }
    .btn {
        width: 80%;
        height: 60px;
        border: transparent;
        border-radius: 10px;
        outline: none;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 700;
        background-color: #79af7e;
        color: #ffffff;
        cursor: pointer;
    }
    .btn:hover {
        background-color: #6ea174;
    }
    @media (max-width: 1023px) {
        .container {
            width: 220px;
            padding: 10px 5px;
        }
        .package-header h2 {
            font-size: 20px;
        }
        .cost h1 {
            font-size: 36px;
        }
        .feature {
            margin: 5px;
        }
        .btn {
            height: 48px;
        }
    }
</style>

<div class="container">
    <div class="package-header">
        <h2>{title || "Free"}</h2>
        {#if banner}
            <div class="banner">{"popular"}</div>
        {/if}
    </div>
    <div class="cost">
        <h1>{price || 0}$/ <span>month</span></h1>
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
        {textButton || "Get Free"}
    </button>
</div>
