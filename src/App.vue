<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h1>JSDELIVR-API</h1>
    </v-app-bar>

    <v-main>
      <section class="jsdelivr-api__content">
        <UserInput />
        <ResultTable />
      </section>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import UserInput from "@/components/UserInput";
import ResultTable from "@/components/ResultTable";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    UserInput,
    ResultTable,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.jsdelivr-api {
  &__content {
    display: flex;
  }
}
</style>
