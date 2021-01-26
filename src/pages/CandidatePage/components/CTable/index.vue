<template>
    <div class="table-container">
        <div class="str" v-for="index in directionsCount" v-bind:key="index">
            <div
                    class="cell"
                    v-for="i in daysCount" v-bind:key="i"
                    :class="{'active': chosenDayNumber === i}"
            />
            <div class="light-shadow"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'CTable',
    props: {
      daysCount: Number,
      directionsCount: Number,
      chosenDayNumber: Number
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "style";
</style>
