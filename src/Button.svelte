<script lang="typescript">
    export let id: string
    export let w: number, h: number, wp: number, hp: number
    const width = w ? `--w:${w}px;` : wp ? `--w:${wp}%;` : ""
    const height = h ? `--h:${h}px` : hp ? `--h:${hp}%;` : ""
    const style = width + height
</script>

<style>
    .btn {
        font-size: 13px;
        background-color: white;
        width: var(--w);
        height: var(--h);

        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        border: 1px solid var(--border-btn-color);
    }
    .btn:active {
        color: white !important;
        background: linear-gradient(
            0deg,
            rgba(37, 110, 246, 1) 0%,
            rgba(117, 166, 244, 1) 100%
        );
    }
</style>

<button class="btn py-0 px-2 mx-1" {id} {style} on:click>
    <slot />
</button>
