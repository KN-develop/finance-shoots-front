<template>
    <div class="container">
        <slot />
    </div>
</template>

<script>
export default {
    data: () => ({}),
}
</script>

<style lang="scss">
.container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1232px;
}
</style>
