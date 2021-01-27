<template>
    <div class="page-container auth-page">
        <div class="container">
            <div class="logo">
                <i class="icon logo-icon"/>
                МОИ ВЫБОРЫ
            </div>

            <div class="inputs-container">
                <input
                        placeholder="Почта"
                        class="input input-mail"
                        type="text"
                        name="email"
                        v-model="form.email"
                />
                <input
                        placeholder="Пароль"
                        class="input input-password"
                        type="password"
                        name="password"
                        v-model="form.password"
                />
            </div>

            <div class="buttons-container">
                <button type="button" class="btn auth-btn"
                        @click="login">
                    Войти
                </button>
                <button type="button" class="btn new-user-btn"
                        @click="goToCreateUser">
                    Я новый пользователь
                </button>
            </div>
        </div>
    </div>
</template>

<script>
  import { ROUTES } from "../../constants/routes";

  export default {
    name: 'AuthorizationPage',
    data() {
      return {
        form: {
          email: 'admin@mail.ru',
          password: '123123'
        }
      }
    },
    methods: {
      login: function () {
        if (this.form.email === 'admin@mail.ru' &&
          this.form.password === '123123') {
          this.$router.push(ROUTES.CANDIDATE_PAGE)
        }
      },
      goToCreateUser: function () {
        this.$router.push(ROUTES.CREATE_USER_PAGE)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "style";
</style>
