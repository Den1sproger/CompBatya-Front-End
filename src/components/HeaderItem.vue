<template>
  <div class="header-container">
    <img class="logo" src="../assets/images/logo.png" alt="Логотип">
    <nav>
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/#leave-request">Оставить заявку</a>
        </li>
        <li class="nav-item">
          <router-link to="/about">О нас</router-link>
        </li>
        <li class="nav-item">
          <a href="/#services">Услуги</a>
        </li>
        <li class="nav-item">
          <a href="/#specialists">Наши мастера</a>
        </li>
        <li class="nav-item">
          <a href="#contacts">Контакты</a>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
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
}

.nav-list {
  padding-left: 50px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
</style>