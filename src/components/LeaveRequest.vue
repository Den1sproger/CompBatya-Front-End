<template>
  <section id="leave-request">
    <form class="request-form">
      <h3>Оставить заявку</h3>
      <form-input v-model="phone" type="tel" placeholder="Телефон"></form-input>
      <form-input v-model="name" type="text" placeholder="Как вас зовут?"></form-input>
      <form-input v-model="email" type="email" placeholder="E-mail"></form-input>
      <button class="submit" @click="sendData">Отправить</button>
    </form>
  </section>
</template>


<script>
import FormInput from '@/components/UI/FormInput';
import axios from 'axios';


export default {
  data() {
    return {
      phone: '',
      name: '',
      email: '',
    }
  },
  components: {FormInput},
  methods: {
    async sendData() {
      const url = 'http://127.0.0.1:8000/api/v1/clients/';

      try {
        const response = await axios.post(url, {
          name: this.name,
          phone_number: this.phone,
          email: this.email ? this.email : null,
        });
        if (response.status !== 201) {
          throw new Error();
        }
      } catch (e) {
        alert(e);
      } finally {
        this.phone = '';
        this.name = '';
        this.email = '';
      }
    }
  }
}
</script>


<style lang="scss" scoped>
#leave-request {
  min-width: 250px;
  padding: 30px;
  box-shadow: 3px 3px 10px $border-dark, -3px -3px 10px $border-dark;
  background-color: $background-accent;
  color: $text-light;
}

.request-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.submit {
  cursor: pointer;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  font-size: 16px;
  color: $text-light;
  background-color: $background-dark;
  border: 0;
  font-weight: bold;
}
</style>