<template>
  <button class="refresh" @click="refreshSpecialists">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="refresh">
        <path id="Ellipse" d="M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8" stroke="#dc3c3c" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Ellipse_2" d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="#dc3c3c" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  </button>
</template>


<script>
export default {
  methods: {
    refreshSpecialists() {
      this.$emit('update');
    }
  }
}
</script>


<styles lang="scss" scoped>
.refresh {
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid $border-accent;
  background-color: $background-light;

  @media (min-width: 1024px) {
    &:hover {
      background-color: $background-dark;
    } 
  }
}
</styles>