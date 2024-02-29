<template>
  <div class="services__profile">
    <h3>{{ title }}</h3>
    <ul class="services-list" v-if="services">
      <li v-for="service in services" :key="service">{{ service.name }} <strong>{{ service.price }} руб.</strong></li>
    </ul>
  </div>
</template>


<script>
export default {
  props: {
    services: Array,
    title: {
      type: String,
      required: true,
    }
  }
}
</script>


<style lang="scss" scoped>
.services__profile {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
    list-style: none;
  }
}
</style>