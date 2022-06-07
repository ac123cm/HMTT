<template>
  <van-action-sheet v-model:show="show" title="回复内容">
    <div class="item">
      <div class="avatar">
        <img :src="userComment.aut_photo" alt="" />
      </div>
      <div class="info">
        <p class="name">{{ userComment.aut_name }}</p>
        <p class="content">
          {{ userComment.content }}
        </p>
        <p class="time">
          <span>{{ userComment.pubdate }}</span>
        </p>
      </div>
    </div>
    <van-divider>回复列表</van-divider>
    <van-field center clearable placeholder="请输入评论内容">
    <template #button>
      <van-button size="small" type="primary">发布</van-button>
    </template>
  </van-field>
  </van-action-sheet>
</template>

<script setup>
import { ref } from 'vue'

const userComment = ref({}) // 用户评论信息
const show = ref(false) // 是否显示动作面板
defineExpose({ show, userComment })
</script>

<style lang="less" scoped>
.item {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;

  .avatar {
    margin-right: 10px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #ccc;
      object-fit: cover;
    }
  }
  .info {
    flex: 1;
    padding: 0 10px;
    .name {
      color: #fe3142;
      font-size: 16px;
      padding: 6px 0;
    }
    .content {
      padding: 6px 0;
      word-wrap: break-word;
      word-break: break-all;
    }
  }
  .time {
    span {
      color: #ccc;
      margin-right: 8px;
    }
  }
}
</style>
