<template>
  <section id="contacts">
    <div class="contacts">
      <h3>Наши контакты</h3>
      <div class="contacts__wrapper">
        <p><strong>+7 (944) 234-89-10</strong> - горячая линия</p>
        <p><strong>+7 (944) 745-91-56</strong> - администрация</p>
        <p><strong>example@mail.ru</strong> - по вопросам сотрудничества</p>
        <p><strong>example2@mail.ru</strong> - для резюме</p>
      </div>
    </div>
    <div class="addresses">
      <h3>Где мы находимся?</h3>
      <div class="addresses__wrapper">
        <address>Улица Белинского, д. 34</address>
        <address>Проспект Мира, д. 56</address>
        <address>Бульвар Рокоссовкого, д. 145</address>
        <address>Переулок Корейский, д. 23</address>
      </div>
    </div>
  </section>
</template>


<script>
</script>


<style lang="scss" scoped>
#contacts {
  padding: 50px 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}

.contacts,
.addresses {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.contacts__wrapper,
.addresses__wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>