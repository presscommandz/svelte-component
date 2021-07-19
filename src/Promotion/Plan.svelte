<script>
    export let title

    export let banner = false
    export let price
    export let drawbacks = ["Some diagrams", "Unlimitted contributors"]
    export let advances = ["All other features"]
    export let onClick
    export let textButton
    export let type = "primary"

    let backgroundColor
    switch (type) {
        case "primary": {
            backgroundColor = "#ffffff"
            break
        }
        case "secondary": {
            backgroundColor = "#3283da"
            break
        }
        default:
            break
    }

    export let isFlipped = false
</script>

<style>
    .flip-card {
        background-color: transparent;
        perspective: 1000px;
        width: 300px;
        height: 500px;
        margin: 20px;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .flip-card-general {
        position: absolute;
        width: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        border-radius: 5px;
        transition: 300ms;
        box-shadow: 2px 2px 20px 6px #dbdbdb;
    }

    .flip-card-general .package-header h2 {
        margin-bottom: 5px;
        font-size: 32px;
        font-weight: 300;
    }
    .flip-card-general .cost h1 {
        font-size: 48px;
        font-weight: 500;
        margin-block-start: 0.3em;
        margin-block-end: 0.3em;
    }
    .flip-card-general .cost span {
        color: #4fb6e0;
    }
    .flip-card-general .feature {
        width: 80%;
        margin: 10px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .flip-card-general .feature span {
        margin: 5px;
        display: inline-block;
        vertical-align: middle;
    }

    .flip-card-general .btn {
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

    .flip-card-general .btn:hover {
        background: #6ea774;
    }

    .flip-card-back {
        transform: rotateY(180deg);
    }
    @media (max-width: 1023px) {
        .flip-card {
            width: 240px;
            margin: 5px;
        }
        .flip-card-general {
            width: 100%;
        }
        .flip-card-general .package-header h2 {
            font-size: 24px;
        }
        .flip-card-general .cost h1 {
            font-size: 40px;
        }
        .flip-card-general .feature {
            width: 85%;
            margin: 5px;
        }
        .flip-card-general .btn {
            margin-top: 40px;
            margin-bottom: 20px;
            font-size: 24px;
        }
    }
    .scene {
        width: 200px;
        height: 260px;
        border: 1px solid #ccc;
        margin: 40px 0;
        perspective: 600px;
    }

    .card {
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
    }

    .isFlipped {
        transform: rotateY(180deg);
    }

    .card__face {
        position: absolute;
        width: 100%;
        height: 100%;
        line-height: 260px;
        color: white;
        text-align: center;
        font-weight: bold;
        font-size: 40px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .card__face--front {
        background: red;
    }

    .card__face--back {
        background: blue;
        transform: rotateY(180deg);
    }
</style>

<!-- <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-general flip-card-front">
            <div class="package-header">
                <h2>{title || "Free"}</h2>
                {#if banner}
                    <div class="banner">{"popular"}</div>
                {/if}
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
                {textButton || "Get Free"}
            </button>
        </div>
        <div class="flip-card-general flip-card-back">
            <div class="package-header">
                <h2>{title || "Free"}</h2>
                {#if banner}
                    <div class="banner">{"popular"}</div>
                {/if}
            </div>
            <div class="cost">
                <h1>{Number(price) * 12 - 10}$/ <span>year</span></h1>
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
    </div>
</div> -->

<div class="scene scene--card">
    <div class="card" class:isFlipped>
        <div class="card__face card__face--front">front</div>
        <div class="card__face card__face--back">back</div>
    </div>
</div>
