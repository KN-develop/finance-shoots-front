<template>
    <div class="popup-success">
        <Logo class="popup-success__logo" />
        <h2 class="popup-success__title">Shot успешно опубликован!</h2>
        <a class="popup-success__link" href="/" @click.prevent="onClosePopup">Ясненько</a>
    </div>
</template>

<script>
    import Logo from "../../elements/Logo";
    export default {
        components: {
            Logo,
        },
        methods: {
            onClosePopup() {
                this.$bus.$emit('app-close-popup', 'popup-success');
            },
        },
    }
</script>

<style lang="scss">
    .popup-success {
        @include font-size(20px);
        box-sizing: border-box;
        max-width: 550px;
        padding: 40px 30px 15px;
        background-color: #fff;
        font-weight: 400;
        border-radius: 4px;
        text-align: center;

        &__logo {
            margin-bottom: 16px;
        }

        &__title {
            @include font-size(20px);
            margin-bottom: 24px;
            text-align: center;
            font-weight: 600;
        }

        &__link {
            @include font-size(20px);
            text-align: center;
            color: $color-blue-1;
        }
    }
</style>
