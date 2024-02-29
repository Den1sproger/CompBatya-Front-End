<template>
  <section id="specialists">
    <h2>Наши мастера</h2>
    <div class="grid-wrapper" v-if="!isSpecialistsLoading && !isError">
      <div class="specialists-grid">
        <specialist-card
          v-for="specialist in showedSpecialists"
          :key="specialist"
          :srcImage="specialist.image"
          :name="specialist.last_name + ' ' + specialist.first_name"
          :profile="specialist.profile"
        >
        </specialist-card>
      </div>

      <refresh-button
        v-if="specialists.length !== showedSpecialists.length"
        @update="refreshSpecialists"
      >
      </refresh-button>
    </div>

    <loading-mark v-else-if="isSpecialistsLoading"></loading-mark>

    <p v-else>Не удалось загрузить список мастеров&#40;&#40;&#40;<br>Попробуйте обновить страницу</p>

  </section>
</template>

<script>
import axios from 'axios';
import SpecialistCard from '@/components/SpecialistCard';
import LoadingMark from '@/components/UI/LoadingMark';
import RefreshButton from '@/components/UI/RefreshButton';
 

export default {
  data() {
    return {
      isSpecialistsLoading: false,
      isError: false,
      specialists: [],
      showedSpecialists: [],
      currentSlice: 0,
      step: 0,
    }
  },
  components: {
    SpecialistCard,
    LoadingMark,
    RefreshButton,
  },
  methods: {
    async fetchSpecialists() {
      const url = 'http://127.0.0.1:8000/api/v1/specialists/';

      try {
        this.isSpecialistsLoading = true;
        const response = await axios.get(url);
        this.specialists = response.data.results;

        if (window.innerWidth > 1375) {
          this.currentSlice = 8;
          this.step = 4;
        } else if (window.innerWidth > 1030) {
          this.currentSlice = 6;
          this.step = 3;
        } else {
          this.currentSlice = 4;
          this.step = 2
        }
        this.showedSpecialists = this.specialists.slice(0, this.currentSlice);
      } catch (e) {
        this.isError = true;
      } finally {
        this.isSpecialistsLoading = false;
      }
    },
    refreshSpecialists() {
      const oldSlice = this.currentSlice;
      this.currentSlice += this.step;
      const addingItems = this.specialists.slice(oldSlice, this.currentSlice);
      this.showedSpecialists.push(...addingItems);
    }
  },
  mounted() {
    this.fetchSpecialists();
  }
}
</script>


<style lang="scss" scoped>
#specialists {
  padding: 20px;
  padding-bottom: 40px;
  background-color: $background-light;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  h2 {
    color: $text-dark;
  }
}

.grid-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.specialists-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 40px;
}
</style>