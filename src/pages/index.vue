<template>
    <AppPage>
        <Shoots
            v-for="(category, index) in getShootCategories"
            :key="index"
            :title="category.name"
            :shoots="category.shoots"
        />
    </AppPage>
</template>

<script>
    import AppPage from "../components/layouts/AppPage";
    import Shoots from "../components/blocks/Shoots";
    import {mapGetters} from 'vuex';

    export default {
        components: {
            AppPage,
            Shoots,
        },
        computed: {
            ...mapGetters('shoots', ['getShootCategories']),
        },
    }
</script>
