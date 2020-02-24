<template>
    <component :is="tag" class="shoots">
        <h2 class="shoots__title" v-if="title">{{ title }}</h2>
        <div class="shoots__list-wrapper">
            <swiper class="shoots__list" :options="swiperOption" ref="slider">
                <swiper-slide class="shoots__item" v-for="(shoot, index) in shoots" :key="index">
                    <Shoot
                            :title="shoot.title"
                            :sub-title="shoot.subTitle"
                            :background-color="shoot.backgroundColor"
                            :image="shoot.image"
                    />
                </swiper-slide>
                <swiper-slide class="shoots__item">
                    <ShootCreate :category="title" />
                </swiper-slide>
            </swiper>
        </div>
    </component>
</template>
<script>
    import Shoot from "./Shoot"
    import ShootCreate from "./ShootCreate"
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components: {
            Shoot,
            ShootCreate,
            swiper,
            swiperSlide,
        },
        data() {
            return {
                swiperOption: {
                    autoWidth: true,
                    spaceBetween: 16,
                    slidesPerView: 'auto',
                    freeMode: true,
                },
            }
        },
        props: {
            tag: {
                type: String,
                default: 'div',
            },
            title: {
                type: String,
                default: '',
            },
            shoots: {
                type: Array,
                required: true,
            },
        },
        computed: {
            swiper() {
                return this.$refs.slider.swiper
            },
        },
    }
</script>
<style lang="scss">
    .shoots {
        margin: 0 -32px;

        @include w-to($screen-lg) {
            margin: 0;
        }

        &__title {
            @include font-size(30px, 0.02em, 24px);
            text-align: left;
            font-weight: 300;
            margin-bottom: 30px;
            padding-left: 24px;
        }
        &__list-wrapper {
            position: relative;
            box-sizing: border-box;
            margin-bottom: 48px;
            text-align: left;

            @include w-to($screen-lg) {
                margin: 0 0 48px;
            }

            @include w-to($screen-md) {
                margin-bottom: 0;
            }
        }

        .swiper-container {
            overflow: visible;
        }

        .swiper-wrapper {
            padding-bottom: 72px;
        }

        &__item {
            box-sizing: border-box;
            width: 295px !important;
            height: 440px;
            flex-shrink: 0;
            border-radius: 8px;
            box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 16px 24px rgba(0, 0, 0, 0.06);

            //padding: 0 8px;
        }
    }
</style>
