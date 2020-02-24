<template>
    <article
        class="ch-preview"
        :style="{
            'background-color': params.backgroundColor || '#E4E4E4',
            'background-image': `url(${params.image})`,
        }"
    >
        <hgroup class="ch-preview__header">
            <h2>{{ params.title || 'Head Title' }}</h2>
            <h3>{{ params.subtitle || 'Subtitle text' }}</h3>
        </hgroup>
        <div class="ch-preview__divider" v-if="!params.image"></div>
        <AppIcon class="ch-preview__icon" v-if="!params.image">
            <IconDefaultImg />
        </AppIcon>
    </article>
</template>
<script>
    import AppIcon from "../../icons/AppIcon";
    import IconDefaultImg from "../../icons/IconDefaultImg";
    export default {
        components: {
            AppIcon,
            IconDefaultImg,
        },
        props: {
            params: {
                type: Object,
                required: true,
            },
        },
    }
</script>
<style lang="scss">
    .ch-preview {
        box-sizing: border-box;
        display: flex;
        width: 295px;
        height: 440px;
        padding: 22px 16px;
        margin: 0 auto 56px;
        flex-direction: column;
        align-items: stretch;
        border-radius: 8px;
        color: $color-mounted-black;
        background-repeat: no-repeat;
        background-position: 100% 100%;
        background-size: auto 70%;

        &__header {
            min-height: 96px;
            margin: 0 ;
            padding: 0;
            background: transparent;

            h2, h3 {
                @include font-size(18px, 0.02em, 24px);
                margin: 0;
                padding-bottom: 8px;
                color: $color-primary;
                font-weight: normal;
                word-wrap: break-word;
            }
            h2 {
                font-weight: bold;
            }
        }

        &__divider {
            margin-bottom: 75px;
            border-bottom: 1px dashed black;
        }

        &__icon {
            align-self: center;
        }
    }
</style>
