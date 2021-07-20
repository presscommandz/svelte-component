<script type="typescript">
    import { onMount, onDestroy } from "svelte"
    import CarouselViewModel from "./CarouselViewModel"
    import "swiper/swiper-bundle.min.css"

    const viewModel = new CarouselViewModel({
        isFlex: true,
        pagination: {
            el: ".swiper-pagination"
        }
    })

    onMount(() => viewModel.onMount())
    onDestroy(() => viewModel.onDestroy())
</script>

<style>
    .swiper-pagination {
        width: 100% !important;
        margin: 5px;
    }

    .footer {
        height: 40px;
    }
</style>

<div class="swiper-container" bind:this={viewModel.container}>
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <slot />
    </div>
    <div class="footer" />
    <div class="swiper-pagination" />
</div>
