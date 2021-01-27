<template>
    <div class="page-container create-user-page">
        <header class="header">
            <div class="logo"/>

            <p class="info-container">
                Расскажите о своей<br> избирательной кампании
            </p>

            <div class="steps-count-text">Шаг {{step}} из 2</div>
        </header>

        <div class="body">
            <form class="reg-form form-first-step" v-if="step === 1">
                <label>
                    Кандидат
                    <input
                            type="text"
                            class="input"
                            name="candidate"
                            placeholder="Фамилия Имя Отчество"
                            v-model="form.candidate"
                    >
                </label>
                <label>
                    Дата выборов
                    <input
                            type="text"
                            class="input"
                            name="candidate"
                            placeholder="00.00.0000"
                            v-model="form.voteDay"
                    >
                </label>
                <Dropdown
                        label="Уровень выборов"
                        :value.sync="form.voteLevel"
                        :list="['Первый', 'Второй', 'Муниципальный']"
                />
                <Dropdown
                        label="Тип выборов"
                        :value.sync="form.voteType"
                        :list="['Первый', 'Второй', 'Основной']"
                />
            </form>

            <form class="reg-form form-second-step" v-else>
                <Dropdown
                        label="Субьет РФ"
                        :value.sync="form.subjectRF"
                        :list="['Первый', 'Второй', 'Республика Карелия']"
                />
                <Dropdown
                        label="Город / Район"
                        :value.sync="form.city"
                        :list="['Первый', 'Второй', 'Медвежьегорск']"
                />
                <Dropdown
                        label="Тип округа"
                        :value.sync="form.regionType"
                        :list="['Первый', 'Второй', 'Городской']"
                />
                <Dropdown
                        label="Вид округа"
                        :value.sync="form.regionView"
                        :list="['Первый', 'Второй', 'Одномандатный']"
                />
                <label>
                    Количество изберателей
                    <input
                            type="text"
                            class="input"
                            name="candidate"
                            placeholder="00.00.0000"
                            v-model="form.voterCount"
                    >
                </label>
            </form>

            <button type="button"
                    class="btn confirm-btn"
                    @click="confirmForm"
            >
                {{step === 2 ? 'Готово' : 'Дальше'}}
            </button>

            <button
                    type="button"
                    class="btn back-btn"
                    v-show="step === 2"
                    @click="goPreviousStep"
            >
                Назад
            </button>
        </div>

    </div>
</template>

<script>
  import { ROUTES } from "../../constants/routes"
  import Dropdown from "../../components/Dropdown/index"

  export default {
    name: 'CreateUserPage',
    components: {Dropdown},
    data() {
      return {
        step: 1,
        form: {
          candidate: 'Иванов Иван Иванович',
          voteDay: '01.02.2021',
          voteLevel: 'Муниципальный',
          voteType: 'Основной',
          subjectRF: 'Республика Карелия',
          city: 'Медвежьегорск',
          regionType: 'Городской',
          regionView: 'Одномандатный',
          voterCount: '43865'
        }
      }
    },
    methods: {
      confirmForm: function () {
        switch (this.step) {
          case 1:
            this.step = 2
            break
          case 2:
            this.$router.push(ROUTES.CANDIDATE_PAGE)
            break
        }
      },
      goPreviousStep: function () {
        this.step = 1
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "style";
</style>

