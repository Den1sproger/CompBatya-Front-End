<template>
  <section id="about">
    <div class="about-top">
      <img class="demo-photo" src="../assets/images/service_demo.jpg" alt="service image">
      <p class="description">
        У вас сломался телефон? Не включается компьютер? Появился синий экран смерти? Или нужно просто заменить аккумулятор?
        Тогда вы попали по адресу, сучк... Ладно, что то я заговорился.
        Батя и его верный (через 3 п#зды колено) родственник всегда готовы вам помочь в решении ваших проблем.
        Естественно не за бесплатно, но за очень адекватную и, я бы даже сказал символическую цену.
        Мы всегда укладываемся в срок и делаем услуги, качество которых можно сравнить с автоматом Калашникова.
        На выходе вы даже не поймете, что у вас была проблема.
      </p>
    </div>

    <div class="about-bottom">
      <p class="description">
        Мы предоставляем различного рода услуги, чиним как компьтеры, моноблоки, так и мобильные устройства.
        Делаем много чего, как устранение поломки, неисправности, так и замена каких либо нерабочих или потерявших качество частей.
        Диагностика бесплатно. Если качество оказанной услуги вас не устроит, то вернем деньги.
        <a href="/#leave-request">Оставляйте заявку</a> или сразу приходите в один из филиалов, расскажете и своей проблеме.
        Мы сделаем все в максимально сжатые сроки.
      </p>
      <img class="demo-photo" src="../assets/images/rempkbabyshk1.jpg" alt="service image">
    </div>
  </section>
</template>

<script>
</script>


<style lang="scss" scoped>
#about {
  background-color: $background-light;
  color: $text-dark;
}

.about-top,
.about-bottom {
  padding: 50px 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 100px;
}

.demo-photo {
  height: 350px;
}

.description {
  font-size: 18px;
  line-height: 36px;

  a {
    color: $text-accent;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>