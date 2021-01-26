<template>
    <div class="float-menu-container" :class="{'opened': menuOpened}">
        <i class="icon icon-menu" @click="menuTrigger"/>

        <ul class="menu-list">
            <li class="menu-item">
                <i class="icon doc-icon"/>
                <span class="desc">Организационные мероприятия</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="menu-item">
                <i class="icon people-icon"/>
                <span class="desc">Встречи</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="menu-item">
                <i class="icon voice-icon"/>
                <span class="desc">Агитация</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="menu-item">
                <i class="icon media-icon"/>
                <span class="desc">Сми и социальные сети</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="menu-item">
                <i class="icon question-icon"/>
                <span class="desc">Социология</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="menu-item">
                <i class="icon hard-icon"/>
                <span class="desc">Апм</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="menu-item">
                <i class="icon vote-icon"/>
                <span class="desc">Дни голосования</span>
                <i class="icon icon-left-arrow"/>
            </li>
            <li class="menu-item">
                <i class="icon finance-icon"/>
                <span class="desc">Финансы</span>
                <i class="icon icon-left-arrow"/>
            </li>
        </ul>
    </div>
</template>

<script>
  import store from '../../../../store'

  export default {
    name: 'FloatMenu',
    data() {
        return {
          menuOpened: false
        }
    },
    methods: {
      menuTrigger: function () {
        this.menuOpened = !this.menuOpened
        store.commit('setFloatMenuStatus', this.menuOpened)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "style";
</style>
