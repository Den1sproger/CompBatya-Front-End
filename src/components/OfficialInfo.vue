<template>
  <section class="official-info">
    <p>&#169;Все права защищены</p>
    <p>Developed by Denis Strigo</p>
  </section>
</template>


<script>
</script>


<style lang="scss" scoped>
.official-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: $background-light;
  height: 80px;
  padding: 0 50px;
  color: $text-dark;

  @media (max-width: 768px) {
    padding: 0 30px;
  }

  @media (max-width: 425px) {
    padding: 0 10px;
    font-size: 12px;
  }
}
</style>