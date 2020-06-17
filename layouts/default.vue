<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <nuxt-link to="/"> <v-toolbar-title v-text="title" /> </nuxt-link>
      <v-spacer />
      <nuxt-link to="/about">About</nuxt-link>
    </v-app-bar>

    <v-main class="app-background">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} | Holger Mueller</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "SFNG"
    };
  }
};
</script>

<style scoped>
.app-background {
  background-image: url("~assets/background-image.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

a {
  text-decoration: none;
}
</style>
