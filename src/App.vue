<template>
  <header>
    <header-item></header-item>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <contact-list></contact-list>
  </footer>
</template>


<script>
import HeaderItem from '@/components/HeaderItem';
import ContactList from '@/components/ContactList';

export default {
  components: {
    HeaderItem,
    ContactList,
  }
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  width: 100%;
  height: 100px;
  color: $text-light;
  background-color: $background-accent;
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  width: 100%;
}

footer {
  width: 100%;
  height: 200px;
  color: $text-light;
  background-color: $background-accent;
}
</style>
