<template>
  <div class="specialist-card">
    <img class="specialist-card__image" :src="srcImage" alt="Specialist Image">
    <div class="specialist-card__description">
      <h4>{{ name }}</h4>
      <p>Профиль: {{ profile }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    srcImage: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    profile: {
      type: String,
      require: true,
    }
  }
}
</script>


<style lang="scss" scoped>
.specialist-card {
  width: 300px;
  height: 450px;
  border: 1px solid $border-accent;
  border-radius: 40px;
  color: $text-dark;
  background-color: $background-light;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
}

.specialist-card__image {
  object-fit: cover;
  width: 100%;
  height: 310px;
  border-radius: 40px 40px 0 0;
}

.specialist-card__description {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;

  h4 {
    margin-bottom: 15px;
  }
}
</style>