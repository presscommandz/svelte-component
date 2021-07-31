<script lang="ts">
    import type PricingPlanViewModel from "@Promotion/Plan/PricingPlanViewModel"
    import checked from "@resources/checked.png"
    import unchecked from "@resources/unchecked.png"
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher()
    function getPlanInfomation() {
        dispatch("getPlanInformation", {
            planTitle: viewModel.planTitle
        })
    }

    export let isFlipped = false
    export let viewModel: PricingPlanViewModel
    export let h: number = 330
    let height = h ? `${h}px` : "330px"
</script>

<style lang="scss">
    .scene {
        width: 220px !important;
        margin: 30px 15px;
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
            font-size: 24px;
            font-weight: 200;
        }
        .cost {
            font-size: 32px;
            margin-top: 0;
            margin-bottom: 20px;
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
            font-size: 12px;
            span {
                display: inline-flex;
                img {
                    width: 12px;
                    height: 12px;
                    margin: 2px;
                }
            }
        }
        .btn {
            border: none;
            background-color: #79af7e;
            width: 75%;
            height: 45px;
            border-radius: 10px;
            font-size: 24px;
            color: white;
            font-weight: 600;
            margin-bottom: 15px;
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
    @media (max-width: 425px) {
        .card__face {
            .title {
                font-size: 24px;
            }
            .cost {
                font-size: 32px;
                margin-bottom: 20px;
            }
            .feature {
                font-size: 12px;
            }
            .btn {
                font-size: 20px;
            }
        }
    }
</style>

<div class="scene scene--card unselectable" style="height: {height}">
    <div class="card" class:isFlipped>
        <div class="card__face card__face--front">
            <h2 class="title">{viewModel.planTitle}</h2>
            <h1 class="cost">
                {viewModel.planPrice}{viewModel.unit}<span class="time"
                    >/ month</span
                >
            </h1>
            <div class="feature">
                {#each viewModel.drawbacks as drawback}
                    <span
                        ><img src={unchecked} alt="unchecked" />{drawback}</span
                    >
                {/each}
                {#each viewModel.advances as advance}
                    <span><img src={checked} alt="checked" /> {advance}</span>
                {/each}
            </div>
            <button class="btn" on:click={getPlanInfomation}>
                {viewModel.textButton}
            </button>
        </div>
        <div class="card__face card__face--back">
            <h2 class="title">{viewModel.planTitle}(year)</h2>
            <h1 class="cost">
                {viewModel.planPrice}{viewModel.unit}<span class="time"
                    >/ month</span
                >
            </h1>
            <div class="feature">
                {#each viewModel.drawbacks as drawback}
                    <span
                        ><img src={unchecked} alt="unchecked" />{drawback}</span
                    >
                {/each}
                {#each viewModel.advances as advance}
                    <span><img src={checked} alt="checked" /> {advance}</span>
                {/each}
            </div>
            <button class="btn" on:click={getPlanInfomation}>
                {viewModel.textButton}
            </button>
        </div>
    </div>
</div>
