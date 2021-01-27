<template>
    <div class="table-container">
        <div class="str" v-for="index in directionsCount" v-bind:key="index">

            <!-- TODO Переписать хардкод для демо-->
            <div class="task one" v-if="index === 1 && tasksList[0]">
                {{ tasksList[0].name }}
                <div class="subTasks-statuses-container">
                    <i class="icon done"/>
                    <i class="icon done"/>
                    <i class="icon await"/>
                    <i class="icon await"/>
                </div>
                <i class="icon icon-info"/>
            </div>

            <div class="task two" v-if="index === 1 && tasksList[1]">
                {{ tasksList[1].name }}
                <div class="subTasks-statuses-container">
                    <i class="icon done"/>
                    <i class="icon await"/>
                </div>
                <i class="icon icon-info"/>
            </div>

            <div class="task three" v-if="index === 3 && tasksList[2]">
                {{ tasksList[2].name }}
                <div class="subTasks-statuses-container">
                    <i class="icon done"/>
                    <i class="icon done"/>
                    <i class="icon done"/>
                </div>
                <i class="icon icon-info"/>
            </div>

            <div class="task four" v-if="index === 3 && tasksList[3]">
                {{ tasksList[3].name }}
                <div class="subTasks-statuses-container">
                    <i class="icon await"/>
                    <i class="icon await"/>
                    <i class="icon await"/>
                </div>
                <i class="icon icon-info"/>
            </div>
            <div class="task six" v-if="index === 8 && tasksList[5]">
                {{ tasksList[5].name }}
                <div class="subTasks-statuses-container">
                    <i class="icon done"/>
                    <i class="icon done"/>
                    <i class="icon await"/>
                </div>
                <i class="icon icon-info"/>
            </div>
            <div class="task seven" v-if="index === 4 && tasksList[6]">
                {{ tasksList[6].name }}
                <div class="subTasks-statuses-container">
                    <i class="icon done"/>
                    <i class="icon done"/>
                    <i class="icon await"/>
                    <i class="icon await"/>
                    <i class="icon await"/>
                </div>
                <i class="icon icon-info"/>
            </div>
            <div class="task eight" v-if="index === 2 && tasksList[7]">
                {{ tasksList[7].name }}
                <div class="subTasks-statuses-container">
                    <i class="icon done"/>
                    <i class="icon await"/>
                    <i class="icon await"/>
                </div>
                <i class="icon icon-info"/>
            </div>
            <div class="task nine" v-if="index === 7 && tasksList[4]">
                {{ tasksList[4].name }}
                <div class="subTasks-statuses-container">
                    <i class="icon done"/>
                    <i class="icon done"/>
                    <i class="icon done"/>
                    <i class="icon done"/>
                </div>
                <i class="icon icon-info"/>
            </div>
            <div class="task ten" v-if="index === 6 && tasksList[8]">
                {{ tasksList[8].name }}
                <div class="subTasks-statuses-container">
                    <i class="icon done"/>
                    <i class="icon done"/>
                    <i class="icon await"/>
                </div>
                <i class="icon icon-info"/>
            </div>
            <div class="task eleven" v-if="index === 5 && tasksList[9]">
                {{ tasksList[9].name }}
                <div class="subTasks-statuses-container">
                    <i class="icon done"/>
                    <i class="icon await"/>
                    <i class="icon await"/>
                </div>
                <i class="icon icon-info"/>
            </div>
            <!-- -->

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
  import { tasks } from '../../../../mocks/tasks'

  export default {
    name: 'CTable',
    props: {
      daysCount: Number,
      directionsCount: Number,
      chosenDayNumber: Number
    },
    data() {
      return {
        tasksList: tasks
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "style";

    /*TODO Переписать хардкод для демо*/
    .task {
        position: absolute;
        top: 58%;
        transform: translateY(-50%);
        height: 50px;
        box-shadow: 0 -2px 3px rgba(255, 255, 255, 0.279666), 0 3px 3px rgba(0, 0, 0, 0.110304);
        border-radius: 10px;
        z-index: 8;
        background: $white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        text-transform: uppercase;

        .subTasks-statuses-container {
            position: absolute;
            bottom: 7px;
            left: 0;
            height: 3px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            width: 100%;
            align-items: center;
            justify-content: center;

            .icon {
                position: relative;
                width: 18px;
                height: 3px;
                margin: 0 2px;

                &.done {
                    background: $doneColor;
                }

                &.await {
                    background: $awaitColor;
                }
            }
        }

        .icon-info {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
            width: 30px;
            height: 30px;
        }

        &.one {
            width: 470px;
            left: calc(120px*26);
        }

        &.two {
            width: 350px;
            left: calc(120px*32);
        }

        &.three {
            width: 350px;
            left: calc(120px*28);
        }

        &.four {
            width: 470px;
            left: calc(120px*34);
        }

        &.five {
            width: 470px;
            left: calc(120px*35);
        }

        &.six {
            width: 830px;
            left: calc(120px*28);
        }

        &.seven {
            width: 590px;
            left: calc(120px*27);
        }

        &.eight {
            width: 830px;
            left: calc(120px*29);
        }

        &.nine {
            width: 830px;
            left: calc(120px*36);
        }

        &.ten {
            width: 590px;
            left: calc(120px*30);
        }

        &.eleven {
            width: 710px;
            left: calc(120px*28);
        }
    }
</style>
