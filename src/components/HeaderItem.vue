<template>
  <div class="header-container">
    <img class="logo" src="../assets/images/logo.png" alt="Логотип">
    <nav :class="{'active': isBurgerActive}">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/#leave-request" @click="hideBurgerMenu">Оставить заявку</a>
        </li>
        <li class="nav-item">
          <router-link to="/about" @click="hideBurgerMenu">О нас</router-link>
        </li>
        <li class="nav-item">
          <a href="/#services" @click="hideBurgerMenu">Услуги</a>
        </li>
        <li class="nav-item">
          <a href="/#specialists" @click="hideBurgerMenu">Наши мастера</a>
        </li>
        <li class="nav-item">
          <a href="#contacts" @click="hideBurgerMenu">Контакты</a>
        </li>
      </ul>
    </nav>
    <button class="burger-button" @click="switchBurgerMenu">
      <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="burger-top" d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
        <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
        <path id="burger-bottom" d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isBurgerActive: false,
    }
  },
  methods: {
    switchBurgerMenu() {
      this.isBurgerActive = !this.isBurgerActive;
      
      const btnLineTop = document.querySelector("#burger-top");
      const btnLineBottom = document.querySelector("#burger-bottom");
      const body = document.querySelector('body');
      let top = this.isBurgerActive ? 15 : 18;
      let bottom = this.isBurgerActive ? 9 : 6;

      btnLineTop.setAttribute('d', `M4 18L20 ${top}`);
      btnLineBottom.setAttribute('d', `M4 6L20 ${bottom}`);
      body.classList.toggle('lock');
    },
    hideBurgerMenu() {
      if (!this.isBurgerActive) return;
      this.switchBurgerMenu();
    }
  }
}
</script>


<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  font-size: 20px;
  color: $text-light;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 50px;
    height: 50px;
  }
}

nav {
  width: 100%;

  @media (max-width: 768px) {
    top: 100px;
    right: -100%;
    width: 0;
    height: 340px;
    position: fixed;
    background-color: $background-accent;
    transition: right 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &.active {
      z-index: 999;
      right: 0;
      width: 100vw;
      height: 100vh;
      font-size: 32px;
    }
  }
}

.nav-list {
  padding-left: 50px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    height: 50%;
    flex-direction: column;
    justify-content: space-around;
  }
}

.nav-item {
  cursor: pointer;

  a {
    color: $text-light;
    font-weight: bold;
    text-decoration: none;
    transition: text-decoration 0.5s;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

.burger-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0);
  border: 0;

  svg {
    path {
      transition: all .3s;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
}
</style>