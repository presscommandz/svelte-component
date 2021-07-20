<script type="typescript">
    import { onMount, onDestroy } from "svelte"
    import CarouselViewModel from "./CarouselViewModel"
    import "swiper/swiper-bundle.min.css"

    const viewModel = new CarouselViewModel({})
    onMount(() => viewModel.onMount())
    onDestroy(() => viewModel.onDestroy())
</script>

<style>
    .swiper-container {
        width: 100%;
        height: 100%;
    }
</style>

<div class="swiper-container mySwiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <slot />
    </div>
    <div class="footer" />
    <div class="swiper-pagination" />
</div>
