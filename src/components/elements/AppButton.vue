<template>
    <component
            :is="tag"
            class="app-button"
            :href="!!to && to"
            :to="tag !== 'button' && to"
            :class="computedClasses"
            :style="computedStyles"
            :type="tag === 'button' && typeBtn"
            @click.prevent.stop="onClickButton"
    >
        <slot />
    </component>
</template>

<script>
    export default {
        props: {
            tag: {
                type: String,
                default: 'button',
            },
            typeBtn: {
                type: String,
                default: 'button',
            },
            to: {
                type: String,
                default: '',
            },
            borderRadius: {
                type: String,
                default: '',
            },
        },
        data: () => ({
            buttonClass: 'app-button--button',
            linkClass: 'app-button--link',
        }),
        computed: {
            asLink() {
                if (this.tag === 'a' || this.tag === 'nuxt-link') return true;
                return false
            },
            computedClasses() {
                const result = [];
                !this.asLink && result.push(this.buttonClass);
                this.asLink && result.push(this.linkClass);
                return result
            },
            computedStyles() {
                const res = {};

                this.borderRadius && (res['border-radius'] = this.borderRadius);

                return res;
            },
        },
        methods: {
            onClickButton() {
                this.$emit('on-click')
            },
        },
    }
</script>

<style lang="scss">
    .app-button {
        box-sizing: border-box;
        position: relative;
        box-shadow: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        border: none;
        cursor: pointer;
        transition-duration: $transition-hover-off;

        &::before {
            position: absolute;
            display: none;
            content: '';
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: $color-dark;
            opacity: 0;
            transition: opacity 500ms;
        }

        &:hover,
        &:focus {
            transition-duration: $transition-hover-off;
            opacity: 0.7;
            &::before {
                opacity: 0.05;
                transition: opacity 500ms;
            }
        }

        &--button,
        &.--button {
            background: $color-blue-2;
            color: $color-global-inverse;
            border-radius: 8px;
            width: 100%;
            min-height: 40px;
            min-width: 40px;
            padding: 0 13px;
            overflow: hidden;

            &::before {
                display: block;
            }
        }

        &--link,
        &.--as-link {
            display: inline-flex;
            text-decoration: none;
            &.--red {
                color: var(--global-color-red);
            }
            &:hover {
                color: var(--global-link-color);
            }
        }

        &.--shadow-bottom {
            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
            0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        }

        &.--blue {
            background: var(--global-color-orange);
        }

        &--ellipse {
            position: relative;
            border-radius: 50%;
            width: 66px;
            height: 66px;
            background-color: transparent;
            border: thin solid $color-blue-1;
            > svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                &.icon-plus {
                    .color-1 {
                        fill: $color-blue-1;
                    }
                }
                &.icon-arrow-left {
                    .color-1 {
                        stroke: $color-blue-1;
                    }
                }
            }
        }

        &--big {
            min-height: 80px;
            font-size: 24px;
            font-weight: bold;
            border-radius: 4px;
            background-color: $color-blue-1;

            &:hover,
            &:focus {
                background-color: $color-blue-1;
            }

            &:disabled {
                background-color: $color-blue-sky;
                pointer-events: none;
            }
        }
    }
</style>
