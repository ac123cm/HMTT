<template>
  <van-nav-bar fixed placeholder>
    <template #left>
      <img src="@/assets/logo.png" alt="" />
    </template>
    <template #right>
      <van-button round size="small" type="default" icon="search">
        搜索
      </van-button>
    </template>
  </van-nav-bar>
  <div class="content">
    <van-tabs
      v-model:active="active"
      background="#fe3142"
      title-active-color="#fff"
      color="#fff"
    >
      <van-tab :title="item.name" v-for="item in list" :key="item.id">
        <ArtList :id="item.id"></ArtList>
      </van-tab>
    </van-tabs>
    <van-icon name="more" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { userChannel } from '@/api/home'
import ArtList from './components/ArtList.vue'

const active = ref(0)
const list = ref([])
onBeforeMount(async () => {
  const res = await userChannel()
  list.value = res.data.data.channels
})
</script>

<style lang="less" scoped>
:deep(.van-hairline--bottom:after) {
  border-bottom-width: 0;
}
img {
  width: 35px;
  height: 35px;
  object-fit: cover;
}
.content {
  position: relative;
  .van-icon-more {
    color: #fff;
    position: absolute;
    top: 7px;
    right: 2px;
    font-size: 30px;
  }
  :deep(.van-tabs__wrap) {
    padding-right: 30px;
    background-color: #fe3142;
  }
}
</style>
