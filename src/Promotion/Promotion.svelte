<script>
    import PromotionViewModel from "./PromotionViewModel"
    import Carousel from "../Carousel/Carousel.svelte"
    import { onMount, onDestroy } from "svelte"
    import Card from "./Card.svelte"
    import Plan from "./Plan.svelte"
    export let props = {}
    export let onFlip
    export let isFlipped
    const viewModel = new PromotionViewModel({ ...props })
    onMount(() => viewModel.onMount())
    onDestroy(() => viewModel.onDestroy())
    let width
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
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
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
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

<svelte:window bind:innerWidth={width} />

<div class="container">
    <div class="header">
        <h2>{viewModel.promotionData.subtitle}</h2>
        <h1>{viewModel.promotionData.title}</h1>
        <h3>{viewModel.promotionData.note}</h3>
    </div>
    <div class="box">
        <span class="monthly">monthly</span>
        <div>
            <label class="switch-round">
                <input type="checkbox" checked={isFlipped} on:click={onFlip} />
                <span class="slider" />
            </label>
        </div>
        <span class="yearly">yearly</span>
    </div>

    {#if width <= 576}
        <Carousel>
            <div class="swiper-slide">
                <Card {isFlipped}>
                    <Plan slot="front" />
                    <Plan slot="back" title="Free(year)" />
                </Card>
            </div>
            <div class="swiper-slide">
                <Card {isFlipped}>
                    <Plan slot="front" title="Pro" />
                    <Plan slot="back" title="Pro(year)" />
                </Card>
            </div>
            <div class="swiper-slide">
                <Card {isFlipped}>
                    <Plan slot="front" title="Lifetime" />
                    <Plan slot="back" title="Lifetime(year)" />
                </Card>
            </div>
        </Carousel>
    {:else}
        <div class="pricing">
            <Card {isFlipped}>
                <Plan slot="front" />
                <Plan slot="back" title="Free(year)" />
            </Card>
            <Card {isFlipped}>
                <Plan slot="front" title="Pro" />
                <Plan slot="back" title="Pro(year)" />
            </Card>
            <Card {isFlipped}>
                <Plan slot="front" title="Lifetime" />
                <Plan slot="back" title="Lifetime(year)" />
            </Card>
        </div>
    {/if}
</div>
