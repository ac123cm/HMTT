<template>
  <van-nav-bar
    title="编辑资料"
    left-arrow
    @click-left="$router.push('/layout/mine')"
  />
</template>

<script setup></script>

<style lang="less" scoped>
.van-nav-bar__content {
  background-color: blue;
}
</style>
