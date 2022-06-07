<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="item" v-for="(item, index) in commentList" :key="index">
      <div class="avatar">
        <img :src="item.aut_photo" alt="" />
      </div>
      <div class="info">
        <p class="name">{{ item.aut_name }}</p>
        <p class="content">
          {{ item.content }}
        </p>
        <p class="time">
          <span>{{ item.pubdate }}</span>
          <span @click="replyShow(item)">回复({{ item.reply_count }})</span>
        </p>
      </div>
      <div class="like">
        <van-icon name="like-o" />
      </div>
    </div>
  </van-list>
  <van-field v-model.trim="sms" center clearable placeholder="请输入评论内容">
    <template #button>
      <van-button size="small" type="primary" @click="release">发布</van-button>
    </template>
  </van-field>
  <!-- 回复 -->
  <Reply ref="reply"></Reply>
</template>

<script setup>
import { comments, commentsPost } from '@/api/article'
import { Toast } from 'vant'
import { reactive, ref } from 'vue'
import Reply from './Reply.vue'

const props = defineProps(['source']) // 文章id

const offset = ref(null)
const commentList = reactive([]) // 评论列表

const loading = ref(false) // 加载状态
const finished = ref(false) // 加载完成

async function onLoad () {
  const res = await comments({
    type: 'a',
    source: props.source,
    offset: offset.value,
    limit: 2
  })
  commentList.push(...res.data.data.results)
  loading.value = false
  offset.value = res.data.data.last_id
  if (res.data.data.last_id === res.data.data.end_id) {
    finished.value = true
  }
}

const reply = ref(null) // 组件实例

function replyShow (item) {
  reply.value.show = true // 显示回复内容
  reply.value.userComment = item // 赋值用户信息
}

const sms = ref('') // 输入框内容
// 发布评论
async function release () {
  if (sms.value === '') {
    Toast({
      message: '内容不为空',
      position: 'bottom'
    })
    return
  }
  const res = await commentsPost({
    target: props.source,
    content: sms.value
  })
  Toast({
    message: '发布成功',
    position: 'bottom'
  })
  commentList.unshift(res.data.data.new_obj)
  sms.value = ''
}
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
      &:nth-child(1) {
        color: #ccc;
        margin-right: 8px;
      }
      &:nth-child(2) {
        color: #f87b86;
      }
    }
  }
}
.van-field {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
