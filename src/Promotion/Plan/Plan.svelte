<script lang="ts">
    import type PlanViewModel from "@Promotion/Plan/PlanViewModel"
    export let isFlipped = false
    export let viewModel: PlanViewModel
    export let onClick = _ => {}
    export let h: number = 330
    let height = h ? `${h}px` : "330px"
</script>

<style lang="scss">
    .scene {
        width: 220px !important;
        margin: 30px 10px;
        perspective: 600px;
    }

    .card {
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
        box-shadow: 0px 2px 20px 2px #d3cfcf;
        border-radius: 10px;
    }

    .isFlipped {
        transform: rotateY(180deg);
    }

    .card__face {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        flex-direction: column;
        .title {
            margin-top: 30px;
            margin-bottom: 15px;
            font-size: 32px;
            font-weight: 200;
        }
        .cost {
            font-size: 40px;
            margin-top: 0;
            margin-bottom: 30px;
            font-weight: 300;
            .time {
                color: #32b6ea;
            }
        }
        .feature {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 0;
            margin-bottom: 30px;
            margin-left: 45px;
            font-size: 16px;
        }
        .btn {
            border: none;
            background-color: #61ba7e;
            width: 75%;
            height: 45px;
            border-radius: 10px;
            font-size: 24px;
            color: white;
            font-weight: 500;
        }
    }

    .card__face--front,
    .card__face--back {
        width: 100%;
        height: 100%;
    }

    .card__face--front {
        background: transparent;
    }

    .card__face--back {
        background: transparent;
        transform: rotateY(180deg);
    }
    @media (max-width: 1023px) and (min-width: 768px) {
        .scene {
            margin: 10px;
        }
    }
</style>

<div class="scene scene--card" style="height: {height}">
    <div class="card" class:isFlipped>
        <div class="card__face card__face--front">
            <h2 class="title">{viewModel.title}</h2>
            <h1 class="cost">
                {viewModel.price}$<span class="time">/ month</span>
            </h1>
            <div class="feature">
                {#each viewModel.advances as advance}
                    <span>+ {advance}</span>
                {/each}
                {#each viewModel.drawbacks as drawback}
                    <span>- {drawback}</span>
                {/each}
            </div>
            <button class="btn" on:click={onClick}>
                {viewModel.text}
            </button>
        </div>
        <div class="card__face card__face--back">
            <h2 class="title">{viewModel.title}(year)</h2>
            <h1 class="cost">
                {viewModel.price}$<span class="time">/ month</span>
            </h1>
            <div class="feature">
                {#each viewModel.advances as advance}
                    <span>+ {advance}</span>
                {/each}
                {#each viewModel.drawbacks as drawback}
                    <span>- {drawback}</span>
                {/each}
            </div>
            <button class="btn" on:click={onClick}>
                {viewModel.text}
            </button>
        </div>
    </div>
</div>
