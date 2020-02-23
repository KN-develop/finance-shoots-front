<template>
  <div id="app">
    <Container>
      <Header />
      <router-view></router-view>
    </Container>
  </div>
</template>

<script>
//import "@/styles/style.scss";
import Header from "./layout/Header";
import Container from "./components/layouts/Container";

export default {
  name: 'App',
  components: {
    Header,
    Container,
  }
}
</script>

<style src="@/styles/style.scss" lang="scss"></style>

<style lang="scss">
  body {
    font-family: $font-family-default;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.2px;
  }

#app {
  font-family: $font-family-default;
  margin-top: 14px;
  margin-bottom: 200px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.2px;
  overflow-x: hidden;
}
</style>
