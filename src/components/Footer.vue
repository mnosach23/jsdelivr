<template>
  <v-footer
      dark
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Vue, Vuex, Vuetify</strong>

        <v-spacer></v-spacer>

      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Mykola Nosach</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>

<style lang="scss">
.v-application .teal {
  background-color: #1976d2 !important;
  border-color: #1976d2 !important;
}
</style>