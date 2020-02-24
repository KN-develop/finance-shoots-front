<template>
    <div class="header">
        <Logo />
        <div class="header__controlls">
            <AppButton class="header__btn" v-if="isInnerPage" @on-click="onAddShot">
                <AppIcon>
                    <IconPlus />
                </AppIcon>
            </AppButton>
            <AppButton class="header__btn" v-else @on-click="onGoHome">
                <AppIcon>
                    <IconArrowLeft />
                </AppIcon>
            </AppButton>
        </div>
    </div>
</template>

<script>
import Logo from "../components/elements/Logo";
import AppButton from "../components/elements/AppButton";
import AppIcon from "../components/icons/AppIcon";
import IconArrowLeft from "../components/icons/IconArrowLeft";
import IconPlus from "../components/icons/IconPlus";

export default {
    name: 'Header',
    components: {
        Logo,
        AppButton,
        AppIcon,
        IconArrowLeft,
        IconPlus,
    },
    computed: {
        isInnerPage() {
            const path = this.$route.path;
            let flag = false;

            path === '/' && (flag = true);
            return flag
        },
    },
    methods: {
        onAddShot() {
            this.$router.push('/create');
        },
        onGoHome() {
            this.$router.replace('/');
        },
    },
}
</script>
<style lang="scss">
    .header {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        margin-bottom: 90px;

        @include w-to($screen-md) {
            margin-bottom: 48px;
        }

        &__btn {
            position: relative;
            width: 40px;
            height: 40px;
            > svg {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
</style>
