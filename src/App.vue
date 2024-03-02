<template>
  <header>
    <header-item></header-item>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <contact-list></contact-list>
    <official-info></official-info>
  </footer>
</template>


<script>
import HeaderItem from '@/components/HeaderItem';
import ContactList from '@/components/ContactList';
import OfficialInfo from '@/components/OfficialInfo';


export default {
  components: {
    HeaderItem,
    ContactList,
    OfficialInfo,
  }
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body.lock {
  overflow-y: hidden;
}

header {
  width: 100%;
  height: 100px;
  color: $text-light;
  background-color: $background-accent;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 15px $border-dark;
}

main {
  width: 100%;
}

footer {
  width: 100%;
  color: $text-light;
  background-color: $background-accent;
  box-shadow: inset 0 0 15px $border-dark;
}
</style>
