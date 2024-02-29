<template>
  <section class="greeting">
    <div class="greeting__text">
      <div>
        <h1>Батя и Степаныч приветствуют тебя!</h1>
        <p>Ты сделал правильный выбор, что обратился к нам! Мы почикаем все твои девайсы так, что они будут работать лучше чем новые прямо с завода!</p>
        <button class="leave-request-btn" @click="scrollToRequestForm">Оставить заявку</button>
      </div>
    </div>
    <div class="greeting__photo">
      <img src="../assets/images/fixing_demo.jpg" alt="Ремонт демонстрация">
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scrollToRequestForm() {
      document.getElementById('leave-request').scrollIntoView();
    }
  }
}
</script>


<style lang="scss" scoped>
.greeting {
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &::after {
    background-color: $background-accent;
    content: " ";
    position: absolute;
    display: block;
    right: 440px;
    transform: skew(-25deg);
    width: 280px;
    height: 350px;

    @media (max-width: 768px) {
      display: none;
    }
  }
}

.greeting__text {
  position: relative;
  z-index: 1;
  left: -90px;
  right: -20px;
  height: 100%;
  width: 100%;
  color: $text-light;
  background-color: $background-accent;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  div {
    height: 100%;
    width: 90%;
    padding: 40px 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      font-size: 36px;
      font-weight: bold;
    }

    p {
      font-size: 18px;
    }

    @media (max-width: 540px) {
      h1 {
        font-size: 28px;
      }
      p {
        font-size: 14px;
      }
    }

    @media (max-width: 425px) {
      padding: 20px 40px;
    }
  }

  @media (max-width: 1050px) {
    position: static;

    div {
      width: 100%;
    }
  }
}


.leave-request-btn {
  cursor: pointer;
  height: 60px;
  width: 200px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: $text-dark;
  background-color: $background-light;
  border: 0;
  border-radius: 50px;
  box-shadow: 12px 6px 10px $border-dark;
  transition: box-shadow .1s;

  @media (min-width: 1024px) {
    &:hover {
      box-shadow: 4px 2px 7px $border-dark;
      color: $text-light;
      background-color: $background-dark;
    }
  }
}

.greeting__photo {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  img {
    height: 100%;
  }

  @media (max-width: 1050px) {
    display: none;
  }
}
</style>