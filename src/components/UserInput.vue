<template>
  <div class="user-inputs">
    <h2 class="user-inputs__title">
      Cервис предоставляет доступ к https://jsdelivr.com по средствам API
    </h2>
    <div class="user-inputs__input-wrapper">
      <v-text-field variant="outlined" class="user-inputs__input" />
      <v-btn
          class="user-inputs__button"
          color="#10B981"
      >
        Let`s go
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInput"
}
</script>

<style lang="scss">
.user-inputs {
  margin-top: 12px;
  margin-left: 12px;
  padding: 32px 60px;
  max-width: 500px;
  border-radius: 32px;
  background-image: url(../../public/input-background.png);

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