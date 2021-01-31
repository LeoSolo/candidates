<template>
    <div class="table-container">
        <div class="str" v-for="dir in directions" :key="dir.abbr"
             :class="{'opened': $store.state.Candidate.subDirection === dir.abbr}"
             :style="{
            marginBottom: ($store.state.Candidate.subDirection === dir.abbr ?
           (getSubTasksCount(dir.abbr) * 60) : 0) + 'px'
        }">

            <div class="task" v-for="task in tasksList.filter(item => item.type === dir.abbr)"
                 :key="task.name"
                 :style="{
                    width: 120 * Math.trunc((task.end - task.start) / 86400000) - 10 + 'px',
                    left: 120 * Math.trunc( (task.start - firstDay) / 86400000) + 120 + 'px'
            }">
                <span class="task-name">{{ task.name }}</span>
                <div class="subTasks-statuses-container">
                    <i class="icon" v-for="(subTask, index) in task.subTasks"
                       :key="subTask.name + '-' + index" :class="{'done': subTask.done}"/>
                </div>
                <i class="icon icon-info"/>

                <div class="subTasks-table-container">
                    <div class="str" v-for="(subTask, i) in task.subTasks"
                         :key="subTask.name + '-' + i">
                        <div class="subTask">{{ subTask.name }}</div>
                    </div>
                </div>
            </div>

            <div
                    class="cell"
                    v-for="numb in daysCount" :key="numb + '-c'"
                    :class="{'active': chosenDayNumber === numb}"
            />

            <div class="light-shadow"/>
        </div>

        <transition name="fade">
            <div class="add-cells-container" v-show="!!$store.state.Candidate.subDirection">
                <div class="str"
                     v-for="num in (getSubTasksCount($store.state.Candidate.subDirection) + directions.length)"
                     :key="num + '-ss'"
                >
                    <div
                            class="cell"
                            v-for="num in daysCount" :key="num + '-sc'"
                            :class="{'active': chosenDayNumber === num}"
                    />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
  import { tasks } from '../../../../mocks/tasks'

  export default {
    name: 'CTable',
    props: {
      daysCount: Number,
      directions: Array,
      chosenDayNumber: Number
    },
    data() {
      return {
        tasksList: tasks,
        viewMonthCount: 3  /*TODO перенести в стор*/
      }
    },
    computed: {
      firstDay: function () {
        let offset = (new Date().getTimezoneOffset() / 60) * -1,
          d = new Date(),
          tmpDate = new Date(d.getTime() + offset),
          y = tmpDate.getFullYear(),
          m = tmpDate.getMonth()

        return new Date(y, m, 1).getTime();
      }
    },
    methods: {
      getSubTasksCount: function (dirAbbr) {
        let count = 0,
          tasks = this.tasksList.filter(item => item.type === dirAbbr)

        for (let i = 0; i < tasks.length; i++) {
          count += tasks[i].subTasks.length
        }

        return count
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "style";
</style>
