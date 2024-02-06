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
</style>
