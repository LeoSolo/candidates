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
                    Сбор документов
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Сбор подписей
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Подача документ на регистрацию
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Формирование структуры управления кампанией
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Проведение паспортизации округа
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Определение бюджета кампании
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 2}"
                @click="setOpenedLi(2)"
            >
                <i class="icon people-icon"/>
                <span class="desc">Социология</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Проведение стартового социологического исследования
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Проведение контрольных социологических исследований
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Проведение опроса в день голосования
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 3}"
                @click="setOpenedLi(3)"
            >
                <i class="icon voice-icon"/>
                <span class="desc">Мобилизация</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Мобилизационный план
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Контроль выполнения плана
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Мобилизация в ЕДГ
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 4}"
                @click="setOpenedLi(4)"
            >
                <i class="icon media-icon"/>
                <span class="desc">Агитация</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Подготовка
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Запуск
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Контроль
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 5}"
                @click="setOpenedLi(5)"
            >
                <i class="icon question-icon"/>
                <span class="desc">Встречи</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Анализ, планирование, рекрутинг
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Встреча
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Отработка контактов
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
                    Подготовка макета АПМ для печати
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Уведомление АПМ
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Запуск
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Контроль
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 7}"
                @click="setOpenedLi(7)"
            >
                <i class="icon vote-icon"/>
                <span class="desc">СМИ и Социальные сети</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Составление медиа-карты округа
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Достижение договоренностей с пабликами и СМИ
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Размещение согласно медиа-плану
                    <i class="icon show-icon-grey"/>
                </div>
            </li>

            <li class="menu-item"
                :class="{'opened': liOpenedNum === 8}"
                @click="setOpenedLi(8)"
            >
                <i class="icon finance-icon"/>
                <span class="desc">Оппоненты</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="sub-directions">
                <div class="sub-direction">
                    <div class="status done"/>
                    Мониторинг оппонентов
                    <i class="icon show-icon-grey"/>
                </div>
                <div class="sub-direction">
                    <div class="status await"/>
                    Интернет-мониторинг
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
