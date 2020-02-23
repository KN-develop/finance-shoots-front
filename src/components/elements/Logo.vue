<template>
    <component :is="tag" class="logo"><b>Shot</b>Created</component>
</template>
<script>
    export default {
        props: {
            tag: {
                type: String,
                default: 'div',
            },
        },
    }
</script>
