<script lang="typescript">
    import { onMount, onDestroy } from "svelte"
    import "swiper/swiper-bundle.min.css"

    import type PromotionViewModel from "@Promotion/PromotionViewModel"
    import Card from "@Promotion/Card.svelte"
    import Plan from "@Promotion/Plan.svelte"

    export let backgroundColor: string = "clear"
    let bgColor = "clear"
    $: if (backgroundColor) {
        // validate

        // valid
        bgColor = backgroundColor
        // else
        bgColor = "clear"
    }

    export let viewModel: PromotionViewModel

    const { isFlipped, windowWidth, isSwiper } = viewModel
    onMount(() => {
        viewModel.onMount()
    })
    onDestroy(() => viewModel.onDestroy())
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        background-color: var(--bgColor);
    }
    .container .header {
        text-align: center;
    }
    .container .header h1 {
        font-size: 64px;
        margin-block-start: 0.3em;
        color: #4fb6e0;
        font-weight: 100;
    }
    .container .header h2 {
        font-size: 40px;
        margin-block-end: 0.3em;
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
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
    .monthly,
    .yearly {
        font-size: 24px;
        margin: 20px;
        margin-bottom: 30px;
    }

    .switch-round {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch-round input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .switch-round .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #79af7e;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;
    }
    .switch-round .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
    }
    .switch-round input:checked + .slider {
        background-color: #79af7e;
    }
    .switch-round input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
    .container .pricing {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-pagination {
        width: 100%;
        margin: 5px;
    }
    @media (max-width: 1023px) {
        .container .header h1 {
            font-size: 48px;
        }
        .container .header h2 {
            font-size: 24px;
        }
    }
</style>

<svelte:window bind:innerWidth={$windowWidth} />

<div class="container" style="--bgColor:{bgColor};">
    <div class="header">
        <h2>{viewModel.subTitle}</h2>
        <!-- <h1>{viewModel.title}</h1>
        <h3>{viewModel.note}</h3> -->
    </div>
    <div class="box">
        <span class="monthly">monthly</span>
        <div>
            <label class="switch-round">
                <input
                    type="checkbox"
                    checked={$isFlipped}
                    on:click={viewModel.onFlip}
                />
                <span class="slider" />
            </label>
        </div>
        <span class="yearly">yearly</span>
    </div>
    {#if $isSwiper}
        <div class="swiper-container mySwiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                {#each viewModel.listCard as d}
                    <div class="swiper-slide">
                        <Card isFlipped={$isFlipped}>
                            <Plan slot="front" props={d} />
                            <Plan slot="back" props={d} />
                        </Card>
                    </div>
                {/each}
            </div>
            <div class="footer" />
            <div class="swiper-pagination" />
        </div>
    {:else}
        <div class="pricing">
            {#each viewModel.listCard as d}
                <Card isFlipped={$isFlipped}>
                    <Plan slot="front" props={d} />
                    <Plan slot="back" props={d} />
                </Card>
            {/each}
        </div>
    {/if}
</div>
