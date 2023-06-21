<template>
  <div class="user-inputs">
    <h2 class="user-inputs__title">
      The service provides access to https://jsdelivr.com
    </h2>
    <div class="user-inputs__input-wrapper">
      <v-text-field variant="outlined" class="user-inputs__input" v-model="searchText" />
      <v-btn
          class="user-inputs__button"
          color="#10B981"
          @click="searchForPackage"
      >
        Let`s go
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInput",
  data: () => ({
    searchText: null
  }),
  methods: {
    searchForPackage () {
      this.$store.dispatch('searchForPackage', this.searchText)
    }
  }
}
</script>

<style lang="scss">
.user-inputs {
  margin-top: 12px;
  margin-left: 12px;
  padding: 32px 60px;
  max-width: 400px;
  border-radius: 32px;

  &__title {
    text-align: center;
    color: #1B1C57;
  }

  &__input-wrapper {
    margin-top: 32px;
    display: flex;
    align-items: center;
  }

  &__input {
    margin: 0 24px 0 auto;
    width: 496px;
  }

  &__button {
    color: #FFFFFF !important;
    border-radius: 32px;
  }
}
</style>