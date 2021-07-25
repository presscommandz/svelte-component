<script>
    export let props = {}
    let { title, price, drawbacks, advances, onClick, textButton } = props
</script>

<style>
    .container {
        width: 280px;
        padding: 20px 5px;
        box-shadow: 0px 2px 20px 2px #d3cfcf;
        border-radius: 10px;
        text-align: center;
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
        margin: 20px;
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
    @media (max-width: 1023px) and (min-width: 768px) {
        .container {
            width: 220px !important;
            padding: 10px 5px;
        }
        .package-header h2 {
            font-size: 20px;
        }
        .cost h1 {
            font-size: 36px;
        }
        .feature {
            margin: 15px;
        }
        .btn {
            height: 48px;
        }
    }
    @media (max-width: 767px) and (min-width: 425px) {
        .container {
            width: 290px;
        }
        .package-header h2 {
            font-size: 20px;
        }
        .cost h1 {
            font-size: 36px;
        }
        .feature {
            margin: 15px;
        }
        .btn {
            height: 48px;
        }
    }
    @media (max-width: 424px) and (min-width: 320px) {
        .container {
            width: 250px;
        }
        .package-header h2 {
            font-size: 20px;
            margin-block-start: 0.4em;
            margin-block-end: 0.4em;
        }
        .cost h1 {
            font-size: 36px;
            margin-block-start: 0.4em;
            margin-block-end: 0.4em;
        }
        .feature {
            margin: 15px !important;
        }
        .btn {
            height: 48px;
            margin-top: 20px;
            margin-bottom: 10px;
        }
    }
    @media (width: 320px) {
        .feature {
            margin: 5px !important;
        }
    }
</style>

<div class="container">
    <div class="package-header">
        <h2>{title}</h2>
    </div>
    <div class="cost">
        <h1>{price}$/ <span>month</span></h1>
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
        {textButton}
    </button>
</div>
