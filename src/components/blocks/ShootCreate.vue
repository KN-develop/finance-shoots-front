<template>
    <div class="shoot-create" @click.stop="onCreateShoot">
        <AppButton class="app-button--ellipse" :tag="'div'">
            <AppIcon>
                <IconPlus />
            </AppIcon>
        </AppButton>
        <p>Создать shot</p>
        <router-link class="shoot-create__link" :to="go"></router-link>
    </div>
</template>
<script>
    import AppButton from "../elements/AppButton";
    import AppIcon from "../icons/AppIcon";
    import IconPlus from "../icons/IconPlus";

    export default {
        components: {
            AppButton,
            AppIcon,
            IconPlus,
        },
        data() {
            return {
                go: { path: '/create', query: { category: this.category } },
            }
        },
        props: ['category'],
        methods: {
            onCreateShoot() {
                console.log('go-create');
                this.$router.replace(this.go);
            },
        },
    }
</script>
<style lang="scss">
    .shoot-create {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-radius: 8px;
        border: 2px dashed $color-lgrey;
        cursor: pointer;

        &__link {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .app-button {
            &:focus {
                outline: 1px solid $color-blue-2;
            }
        }
    }
</style>
