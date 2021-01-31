<template>
    <div class="float-menu-container" :class="{'opened': menuOpened}">
        <i class="icon icon-menu" @click="menuTrigger"/>

        <ul class="menu-list">
            <li class="menu-item"
                v-for="dir in directions"
                :key="dir.abbr"
                :class="{'opened': openedDirection === dir.abbr}"
                @click.self="setOpenedDirection(dir.abbr)"
                :style="{marginBottom: (openedDirection === dir.abbr ?
                 (subTasksCount(dir.abbr) * 60) : 0) + 10 + 'px'}"
            >
                <i class="icon doc-icon"/>
                <span class="desc">{{ dir.title }}</span>
                <i class="icon icon-left-arrow"/>

                <ul v-for="task in tasksList.filter(item => item.type === dir.abbr)"
                    :key="task.name" class="subTasks-list">
                    <li class="sub-directions" v-for="(subTask, y) in getCurrentTasksByAbbr(dir.abbr)"
                        :key="subTask.name + '-' + y">
                        <div class="sub-direction">
                            <div class="status" :class="{'done': subTask.done}"/>
                            {{ subTask.name }}
                            <i class="icon show-icon-grey"/>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
  import { DIRECTIONS } from '../../../../constants/directions'
  import { tasks } from '../../../../mocks/tasks'

  export default {
    name: 'FloatMenu',
    data() {
      return {
        menuOpened: false,
        openedDirection: null,
        directions: DIRECTIONS,
        tasksList: tasks
      }
    },
    computed: {},
    methods: {
      menuTrigger: function () {
        this.menuOpened = !this.menuOpened
        this.setOpenedDirection(null)

        this.$store.commit('setFloatMenuStatus', this.menuOpened)
      },
      setOpenedDirection: function (dirAbbr) {
        this.openedDirection = (this.openedDirection === dirAbbr) || !this.menuOpened
          ? null : dirAbbr

        this.$store.commit('setSubDirection', this.openedDirection)
      },
      subTasksCount: function (dirAbbr) {
        let count = 0,
          tasks = this.tasksList.filter(item => item.type === dirAbbr)

        for (let i = 0; i < tasks.length; i++) {
          count += tasks[i].subTasks.length
        }

        return count
      },
      getCurrentTasksByAbbr: function (dirAbbr) {
        let tempTasks = this.tasksList.filter(item => item.type === dirAbbr),
          subTasks = []

        for (let i = 0; i < tempTasks.length; i++) {
          for (let y = 0; y < tempTasks[i].subTasks.length; y++) {
            subTasks = [...subTasks, tempTasks[i].subTasks[y]]
          }
        }

        return subTasks
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "style";
</style>
