<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <nuxt-link to="/"> <v-toolbar-title v-text="title" /> </nuxt-link>
      <v-spacer />
      <nuxt-link to="/inspire">About</nuxt-link>
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
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,

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
