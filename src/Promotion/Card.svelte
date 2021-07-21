<script>
    export let isFlipped = false
</script>

<style>
    .scene {
        width: 300px;
        height: 400px;
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
        justify-content: center;
        align-items: center;
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
            width: 240px;
            margin: 30px 5px;
        }
    }
    @media (max-width: 767px) and (min-width: 425px) {
        .scene {
            width: 300px;
        }
    }
    @media (max-width: 425px) and (min-width: 375px) {
        .scene {
            width: 280px;
        }
    }
</style>

<div class="scene scene--card">
    <div class="card" class:isFlipped>
        <div class="card__face card__face--front">
            <slot name="front" />
        </div>
        <div class="card__face card__face--back">
            <slot name="back" />
        </div>
    </div>
</div>
