<template>
    <component :is="currentTag" to="/" class="logo"><b>Shot</b>Created</component>
</template>
<script>
    export default {
        props: {
            tag: {
                type: String,
                default: 'div',
            },
        },
        computed: {
            currentTag() {
                if (this.$route.path !== '/') {
                    return 'router-link';
                } else {
                    return this.tag;
                }
            }
        },
    }
</script>
