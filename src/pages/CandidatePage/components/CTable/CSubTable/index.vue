<template>
    <div class="subTasks-table-container" :style="{top: getSubTaskContPosTop() + 'px'}">
        <div class="str" v-for="(subTask, i) in task.subTasks"
             :key="subTask.name + '-' + i">

            <div class="subTask" :style="{
              width: getSubTaskWidth(subTask) + 'px',
              left: getSubTaskPosLeft(subTask) + 'px'
            }">
                {{ subTask.name }}

                <i class="icon" :class="{'done': subTask.done}"/>
            </div>

            <div class="light-shadow"/>
        </div>
    </div>
</template>

<script>
  import { DIRECTIONS } from '../../../../../constants/directions'

  export default {
    name: 'CSubTable',
    props: {
      task: Object,
      tasksList: Array
    },
    data() {
      return {
        directions: DIRECTIONS
      }
    },
    mounted() {
      console.log(this.tasksList)
    },
    methods: {
      getSubTaskWidth: function (subTask) {
        return 120 * Math.trunc((subTask.end - subTask.start) / 86400000) - 10
      },
      getSubTaskPosLeft: function (subTask) {
        return Math.trunc((subTask.start - this.task.start) / 86400000) * 120
      },
      getSubTaskContPosTop: function () {
        let shiftTop = 115

        if (this.tasksList && this.tasksList.length !== 1) {
          for (let i = 0; i < this.tasksList.length; i++) {
            shiftTop = JSON.stringify(this.task) === JSON.stringify(this.tasksList[i]) ?
              (i + 1) * ((this.tasksList[i].subTasks.length * 60) + 10) : 115
          }
        }

        return shiftTop
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "style";
</style>