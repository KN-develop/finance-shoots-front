<template>
    <section class="create-shoot">
        <h1 class="create-shoot__title">Создать Shot</h1>
        <el-form
            class="create-shoot__wrapper"
            :label-position="'top'"
            :rules="rules"
            ref="ruleForm"
            :model="formFields"
            @submit.native.prevent="onSubmitForm"
        >
            <div class="create-shoot__form">
                <el-form-item label="Категория поста" prop="categories">
                    <el-select class="create-shoot__select" v-model="formFields.categories.selected" placeholder="Select">
                        <el-option
                                v-for="item in formFields.categories.list"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Тайтл" prop="title">
                    <el-input
                        type="textarea"
                        v-model="formFields.title"
                        :placeholder="'Текст заголовка'"
                        :maxlength="50"
                        :show-word-limit="true"
                        @focus="onFocusInput"
                        @blur="onBlurInput"
                    />
                </el-form-item>
                <el-form-item label="Сабтайтл" prop="subtitle">
                    <el-input
                        type="textarea"
                        v-model="formFields.subtitle"
                        :placeholder="'Текст подзаголовка'"
                        :maxlength="50"
                        :show-word-limit="true"
                        @focus="onFocusInput"
                        @blur="onBlurInput"
                    />
                </el-form-item>
                <el-form-item label="Изображение">
                    <el-upload
                        class="create-shoot__upload"
                        drag
                        action="#"
                        :auto-upload="false"
                        :limit="1"
                        :show-file-list="false"
                        :accept="'.png'"
                        :on-change="onImageChange"
                        ref="upload"
                    >
                        <span>Загрузить изображение</span>
                    </el-upload>
                </el-form-item>
                <el-form-item label="Цвет фона" prop="backgroundColor">
                    <el-input
                        type="text"
                        v-model="formFields.backgroundColor"
                        @focus="onFocusInput"
                        @blur="onBlurInput"
                    />
                </el-form-item>
            </div>
            <section class="create-shoot__preview">
                <h2 class="create-shoot__preview-title">Preview</h2>
                <Preview :params="preview" class="create-shoot__preview-el" />
                <AppButton class="app-button--big" :type-btn="'submit'" :disabled="formHasError">
                    Create Shot
                </AppButton>
                <p class="create-shoot__message" v-if="formHasError">Для публикации, заполните все поля</p>
            </section>
        </el-form>

    </section>
</template>
<script>
    import Preview from "./Preview";
    import AppButton from "../../elements/AppButton";
    import { mapGetters } from 'vuex';

    export default {
        components: {
            Preview,
            AppButton,
        },
        data() {
            return {
                formFields: {
                    categories: {
                        list: [],
                        selected: '',
                    },
                    title: '',
                    subtitle: '',
                    image: '',
                    backgroundColor: '',
                },
                rules: {
                    categories: [{ required: true, message: 'Please input Activity name', trigger: 'change' }],
                    title: [
                        { required: true, message: 'Please input Activity name', trigger: 'blur' },
                        {validator(rule, value, callback, source, options) {
                                var errors = [];
                                // test if email address already exists in a database
                                // and add a validation error to the errors array if it does
                                return errors;
                            }}
                    ],
                    subtitle: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
                    backgroundColor: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
                }
            }
        },
        computed: {
            ...mapGetters('shoots', ['getFormFields']),
            preview() {
                const res = {
                    backgroundColor: this.formFields.backgroundColor,
                    title: this.formFields.title,
                    subtitle: this.formFields.subtitle,
                    image: this.formFields.image,
                };
                return res;
            },
            formHasError() {
                let hasError = false;

                !this.formFields.categories.selected && (hasError = true);
                !this.formFields.backgroundColor && (hasError = true);
                !this.formFields.title && (hasError = true);
                !this.formFields.subtitle && (hasError = true);

                return hasError
            },
        },
        methods: {
            mergeFields(newFields) {
                this.formFields = Object.assign(this.formFields, newFields);
            },
            createShoot() {
                console.log('Create-shoot');
            },
            onSelectImage(e) {
                console.log(e);
            },
            onImageChange(e) {
                const fr = new FileReader();
                fr.addEventListener("load", () => {
                    this.formFields.image = fr.result;
                    this.$refs.upload.clearFiles();
                }, false);

                if (e.raw.type === 'image/png') {
                    fr.readAsDataURL(e.raw);
                }
            },
            onFocusInput(el) {
                console.log(el)
            },
            onBlurInput(el) {
                console.log(el)
            },
            onSubmitForm() {
                console.log('ON-SUBMIT-FORM');
            },
        },
        beforeMount() {
            this.mergeFields(this.getFormFields);
        },
    }
</script>
<style lang="scss">
    .el-select-dropdown {
        &__item {
            @include font-size(16px, 0.02em, 24px);
            display: flex;
            align-items: center;
        }
    }
    .create-shoot {
        &__wrapper {
            @include display-flex();

            @include w-to($screen-md) {
                display: block;
            }
        }

        &__form {
            width: 343px;
            margin-right: 106px;

            @include w-to($screen-md) {
                width: 100%;
            }
        }

        &__select {
            width: 100%;
        }

        .el-form-item {
            margin-bottom: 30px;
            &__label {
                @include font-size(16px, 0.02em, 24px);
                width: 295px;
                margin: 0 auto 10px;
                padding: 0;
                font-weight: normal;
                color: $color-mounted-black;
            }

            &.is-error {
                * {
                    border-color: $color-error-1 !important;
                }
            }
            &.is-required {
                .el-form-item__label {
                    &::before {
                        content: none;
                    }
                }
            }

            &__error {
                @include font-size(12px, 0.02em, 24px);
                color: $color-error-1;
            }
        }

        .el-textarea {
            textarea {
                @include font-size(16px, 0.02em, 24px);
                box-sizing: border-box;
                resize: none;
                height: 112px;
                padding: 6px 16px 10px;
                border-color: $color-secondary;

                &:hover,
                &:focus {
                    border-color: $color-blue-1;
                }
            }
        }

        .el-input {
            &__inner {
                @include font-size(16px, 0.02em, 24px);
                border-color: $color-secondary;

                &:hover,
                &:focus {
                    border-color: $color-blue-1;
                }
            }

            &__count {
                @include font-size(14px, 0.02em, 24px);
                bottom: calc(100% + 10px);
            }
        }

        &__upload {
            height: 56px;
            line-height: 56px;
            text-align: center;
            font-size: 16px;
            font-weight: 500;

            &:hover {
                color: $color-blue-1;
            }

            .el-upload {
                width: 100%;
            }

            .el-upload-dragger {
                width: 100%;
                height: 56px;
                border-color: $color-blue-1;
                color: $color-blue-1;
            }
        }

        &__preview {
            width: 343px;

            @include w-to($screen-md) {
                width: 100%;
            }
        }

        &__preview-el {
            @include w-to($screen-md) {
                width: 100%;
                max-width: 343px;
            }
        }

        &__preview-title {
            @include font-size(16px, 0.02em, 24px);
            width: 295px;
            margin: 0 auto 10px;
            font-weight: normal;

            @include w-to($screen-md) {
                width: 100%;
            }
        }
        &__message {
            margin: 15px 0;
            color: $color-blue-2;
            text-align: center;
        }
    }
</style>
