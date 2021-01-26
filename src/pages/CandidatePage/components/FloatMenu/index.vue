<template>
    <div class="float-menu-container" :class="{'opened': menuOpened}">
        <i class="icon icon-menu" @click="menuTrigger"/>

        <ul class="menu-list">
            <li class="menu-item"
                :class="{'opened': liOpenedNum === 1}"
                @click="setOpenedLi(1)"
            >
                <i class="icon doc-icon"/>
                <span class="desc">Организационные мероприятия</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Организоваться
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Мероприять
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 2}"
                @click="setOpenedLi(2)"
            >
                <i class="icon people-icon"/>
                <span class="desc">Встречи</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Владимир Путин
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Дмитрий Плахов
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Оленька
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 3}"
                @click="setOpenedLi(3)"
            >
                <i class="icon voice-icon"/>
                <span class="desc">Агитация</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Агитировать
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Повторить
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 4}"
                @click="setOpenedLi(4)"
            >
                <i class="icon media-icon"/>
                <span class="desc">Сми и социальные сети</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Спам
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Телевизор
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Твиты
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 5}"
                @click="setOpenedLi(5)"
            >
                <i class="icon question-icon"/>
                <span class="desc">Социология</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Опрос
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Лекция
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Звонки
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 6}"
                @click="setOpenedLi(6)"
            >
                <i class="icon hard-icon"/>
                <span class="desc">Апм</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Я не знаю
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Что это такое
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    И не буду гуглить
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 7}"
                @click="setOpenedLi(7)"
            >
                <i class="icon vote-icon"/>
                <span class="desc">Дни голосования</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Нервничать
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Держать пальцы крестиком
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 8}"
                @click="setOpenedLi(8)"
            >
                <i class="icon finance-icon"/>
                <span class="desc">Финансы</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Следить
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Считать
                    <i class="icon show-icon-grey"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'FloatMenu',
    data() {
        return {
          menuOpened: false,
          liOpenedNum: null
        }
    },
    methods: {
      menuTrigger: function () {
        this.menuOpened = !this.menuOpened
        this.setOpenedLi(null)
        this.$store.commit('setFloatMenuStatus', this.menuOpened)
      },
      setOpenedLi: function (num) {
        this.liOpenedNum = this.liOpenedNum === num || !this.menuOpened
          ? null : num
        this.$store.commit('setSubDirection', this.liOpenedNum)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "style";
</style>
