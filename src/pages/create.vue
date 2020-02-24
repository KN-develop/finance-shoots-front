<template>
    <AppPage>
        <CreateShoot :category="category" />
    </AppPage>
</template>

<script>
    import AppPage from "../components/layouts/AppPage"
    import CreateShoot from "../components/blocks/CreateShoot/CreateShoot"

    export default {
        components: {
            AppPage,
            CreateShoot,
        },
        props: {
            category: {
                type: String,
                default: null,
            },
        },
    }
</script>
