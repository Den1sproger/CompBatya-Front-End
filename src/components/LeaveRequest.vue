<template>
  <section id="leave-request">
    <form class="request-form" @submit.prevent="submitForm">
      <h3>Оставить заявку</h3>
      <form-input v-model="phone" type="tel" placeholder="+7XXXXXXXXXX"></form-input>
      <form-input v-model="name" type="text" placeholder="Как вас зовут?"></form-input>
      <form-input v-model="email" type="email" placeholder="E-mail"></form-input>

      <div class="errors" v-if="errors.length > 0">
        <p class="error" v-for="err in errors" :key="err">{{ err }}</p>
      </div>

      <p class="request-sended" v-if="isRequestSended">Заявка отправлена!</p>

      <button type="submit">Отправить</button>
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
      errors: [],
      isRequestSended: false,
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
        this.isRequestSended = true;
      } catch (e) {
        alert(e);
      } finally {
        this.phone = '';
        this.name = '';
        this.email = '';
      }
    },
    validateInput(attr, re, err) {
      const isNotValidAndErrNotExists = !re.test(attr) && !this.errors.includes(err);

      if (isNotValidAndErrNotExists) {
        this.errors.push(err);
      }
    },
    submitForm() {
      this.errors = [];
      const error = 'Пожалуйста, заполните все поля';
      if (!this.name || !this.phone) {
        if (!this.errors.includes(error)) this.errors.push(error);
        return;
      }
      
      this.validateInput(
        this.phone, /^(\+7|8)\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/,
        'Некорректный номер телефона'
      );
      this.validateInput(
        this.name, /^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/,
        'Некорректное имя'
      );

      if (this.email) {
        this.validateInput(
          this.name,
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
          'Некорректный E-mail'
        );
      }

      if (this.errors.length === 0) {
        this.sendData();
      }
    }
  }
}
</script>


<style lang="scss" scoped>
#leave-request {
  min-width: 300px;
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

button[type=submit] {
  cursor: pointer;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  font-size: 16px;
  color: $text-light;
  background-color: $background-dark;
  border: 0;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
}

.errors {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .error {
    color: $text-light;
  }
} 
</style>