<template>
  <router-view></router-view>
  <!-- 标签栏 -->
  <van-tabbar v-model="active">
    <van-tabbar-item to="/layout/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/layout/ask" icon="search">问答</van-tabbar-item>
    <van-tabbar-item to="/layout/video" icon="friends-o">视频</van-tabbar-item>
    <van-tabbar-item to="/layout/mine" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<style lang="less" scoped></style>
