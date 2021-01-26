<template>
    <div class="page-container candidate-page" ref="candidatePage" :class="{'menu-opened': $store.state.App.floatMenuOpened}">
        <div class="pre-header"/>
        <header class="header">
            <div class="date-titles-container"
                 v-bind:key="index"
                 v-for="(count, index) in datesCounts"
            >
                <div v-bind:key="i"
                     class="date"
                     v-for="(day, i) in Number(count)"
                     :class="{'active': chosenDate.date === day && chosenDate.month === months[index]}"
                     @click="chooseDate(day, months[index], index)"
                >
                    {{day}}
                    <div class="month">{{months[index]}}</div>
                </div>
            </div>
        </header>

        <FloatMenu/>

        <CTable
                :daysCount="getAllDays()"
                :directionsCount="8"
                :chosenDayNumber="chosenDayNumber"
        />
    </div>
</template>

<script>
  import FloatMenu from "./components/FloatMenu"
  import { DICTIONARY } from '../../constants/dictionary'
  import CTable from "./components/CTable/index"

  export default {
    name: 'CandidatePage',
    components: {CTable, FloatMenu},
    data() {
      return {
        current: new Date().getMonth(),
        datesCounts: [],
        months: [],
        viewMonthCount: 3,
        D: DICTIONARY,
        chosenDate: {
          date: new Date().getDate(),
          month: DICTIONARY.MONTHS[new Date().getMonth()]
        },
        chosenDayNumber: new Date().getDate()
      }
    },
    computed: {},
    mounted() {
      for (let i = 0; i < this.viewMonthCount; i++) {
        this.datesCounts = [...this.datesCounts, this.getDaysCount(this.current + i)]
        this.months = [...this.months, DICTIONARY.MONTHS[this.current + i]]
      }
      this.scrollToActiveDay();
    },
    watch: {},
    methods: {
      getDaysCount: function (month) {
        return 32 - new Date(new Date().getFullYear(), month, 32).getDate()
      },
      chooseDate: function (date, month, indexOfArr) {
        this.chosenDate.date = date
        this.chosenDate.month = month

        this.chosenDayNumber = indexOfArr !== 0 ?
          this.datesCounts[indexOfArr - 1] + date
          : date
      },
      getAllDays: function () {
        let sum = 0
        this.datesCounts.map(count => {
          sum += count
        })
        return sum
      },
      scrollToActiveDay: function () {
        this.$nextTick(() => {
          this.$refs.candidatePage.scrollTo({
            top: 0,
            left: (new Date().getDate() - 1) * 120,
            behavior: 'smooth'
          })
        })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "style";
</style>
