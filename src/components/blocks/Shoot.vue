<template>
    <component :is="tag" class="shoot" :style="{ 'background-color': backgroundColor, 'background-image': `url(${image})` }">
        <hgroup v-if="subTitle && title">
            <h2 class="shoot__title">{{ title }}</h2>
            <h3 class="shoot__subtitle">{{ subTitle }}</h3>
        </hgroup>
        <h2 class="shoot__title" v-else-if="title">{{ title }}</h2>
        <h3 class="shoot__title" v-else-if="subTitle">{{ subTitle }}</h3>
        <router-link class="shoot__link" to="/"></router-link>
    </component>
</template>
<script>
    export default {
        props: {
            tag: {
                type: String,
                default: 'article',
            },
            title: {
                type: String,
                default: '',
            },
            subTitle: {
                type: String,
                default: '',
            },
            backgroundColor: {
                type: String,
                default: '#D7E6ED',
            },
            image: {
                type: String,
                default: '',
            },
        },
    }
</script>
<style lang="scss">
    .shoot {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: 100%;
        padding: 22px 16px;
        border-radius: 8px;
        background-repeat: no-repeat;
        background-position: 100% 100%;
        background-size: auto 70%;

        &__link {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        &__title {
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 0.02em;
            font-weight: bold;
        }

        &__subtitle {
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 0.02em;
            font-weight: normal;
        }
    }
</style>
