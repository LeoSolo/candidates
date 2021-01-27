<template>
    <div class="page-container preview-page">
        <div class="logo"/>

        <h2 class="subtitle">ДО ЗАПУСКА ПРОЕКТА ОСТАЛОСЬ</h2>

        <div class="timer-container">
            <div class="counter">
                {{convertedTime.days}}
                <div class="desc" v-bind:show="convertedTime.days">
                    {{ getCorrectWord(convertedTime.days, dir.DAYS) }}
                </div>
            </div>

            <div class="counter">
                {{convertedTime.hours}}
                <div class="desc" v-bind:show="convertedTime.hours">
                    {{ getCorrectWord(convertedTime.hours, dir.HOURS) }}
                </div>
            </div>

            <div class="counter">
                {{convertedTime.minutes}}
                <div class="desc" v-bind:show="convertedTime.minutes">
                    {{ getCorrectWord(convertedTime.minutes, dir.MINUTES) }}
                </div>
            </div>
        </div>

        <p class="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam sit amet interdum arcu.
            Pellentesque rhoncus libero eu odio ullamcorper molestie.
            Donec nec dolor nibh. Fusce lacinia velit non pharetra accumsan.
            Etiam a aliquam ex. Curabitur et ex a augue tincidunt molestie eget ut arcu.
            Nunc vehicula id purus et rutrum. Duis sed ligula vel leo sagittis dapibus.
            Nam porta, sem a semper maximus, purus nibh rutrum nisi, quis tincidunt nulla libero quis neque.
            Praesent tempor risus sed mauris auctor maximus.
        </p>

        <form class="form">
            <input type="text" v-model="email" name="email" class="input" placeholder="ВАШ EMAIL">
            <button @click="routeToCandidate" class="btn" type="button">СТАТЬ КАНДИДАТОМ</button>
        </form>
        <div class="error" v-show="error">Введен некорректный email</div>
    </div>
</template>

<script>
  import { DICTIONARY } from '../../constants/dictionary'
  import { declOfNum, getConvertedTime } from '../../utils'
  import { ROUTES } from '../../constants/routes'

  export default {
    name: 'DemoPage',
    data() {
      return {
        msLeft: 7641000000,
        convertedTime: {
          days: '',
          hours: '',
          minutes: ''
        },
        dir: DICTIONARY,
        getCorrectWord: declOfNum,
        getCTime: getConvertedTime,
        timerInterval: null,
        error: false,
        email: 'admin@mail.ru'
      }
    },
    mounted() {
      this.convertedTime = this.getCTime(this.msLeft)

      if (this.timerInterval) {
        clearInterval(this.timerInterval)
        this.startTimer()
      } else {
        this.startTimer()
      }
    },
    methods: {
      startTimer: function () {
        this.timerInterval = setInterval(() => {
          this.convertedTime = this.getCTime(this.msLeft - 60000)
          this.msLeft = this.msLeft - 60000
        }, 1000)
      },
      routeToCandidate: function () {
        if (this.email === 'admin@mail.ru') {
          this.error = false
          this.$router.push(ROUTES.AUTH_PAGE)
        } else {
          this.error = true
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "style";
</style>
