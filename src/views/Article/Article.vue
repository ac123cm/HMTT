<template>
  <van-nav-bar
    title="文章"
    left-arrow
    fixed
    placeholder
    @click-left="$router.push('/layout/home')"
  />
  <div class="content">
    <h2>{{ detail.title }}</h2>
    <div class="author">
      <div class="pic">
        <img :src="detail.aut_photo" alt="" />
      </div>
      <div class="info">
        <p class="name">{{ detail.aut_name }}</p>
        <p class="pubdate">{{ detail.pubdate }}</p>
      </div>
      <van-button size="small" round type="primary">+ 关注</van-button>
    </div>
    <div class="article" v-html="detail.content"></div>
  </div>
  <van-divider>END</van-divider>
  <div class="like">
    <van-button round icon="like" type="primary" color="red">喜欢</van-button>
    <van-button round icon="delete" type="primary" color="#ccc">不喜欢</van-button>
  </div>
  <Comment :source="props.article_id"></Comment>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { articlesDetail } from '@/api/home.js'
import Comment from './components/Comment.vue'

const props = defineProps(['article_id'])

const detail = ref({})

onMounted(async () => {
  const res = await articlesDetail(props.article_id)
  detail.value = res.data.data
})
</script>

<style lang="less" scoped>
.content {
  padding: 10px;
  h2 {
    font-size: 22px;
    margin-bottom: 8px;
  }
  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .pic {
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .info {
      flex: 1;
      margin-left: 15px;
    }
  }
  .article {
    width: 100%;
    overflow: auto;
    :deep(pre) {
      word-wrap: break-word;
      word-break: break-all;
      overflow: auto;
      background-color: #000;
      color: #fff;
    }
  }
}
.like {
  display: flex;
  justify-content: center;
  .van-button {
    margin-right: 15px;
  }
}
</style>
