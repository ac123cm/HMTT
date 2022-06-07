<template>
  <div class="art-list">
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        v-if="bol"
      >
        <!-- 新闻列表 -->
        <div
          class="item"
          v-for="item in artList"
          :key="item.art_id"
          @click="
            $router.push({ name: 'article', params: { article_id: item.art_id } })
          "
        >
          <div class="title">{{ item.title }}</div>
          <!-- 图片 -->
          <div class="pic">
            <img
              :src="i"
              alt=""
              v-for="(i, index) in item.cover.images"
              :key="index"
              :style="{ width: (1 / item.cover.images.length) * 100 + '%' }"
            />
          </div>
          <div class="other">
            <span>{{ item.aut_name }}</span>
            <span>{{ item.comm_count }}评论</span>
            <span>{{ timeCycle(item.pubdate) }}</span>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { articles } from '@/api/home'
import moment from 'moment'
moment.locale('zh-cn')

const props = defineProps(['id'])

const loading = ref(false) // 加载状态
const finished = ref(false) // 是否加载完成
const artList = ref([]) // 文章数组
const timestamp = ref(Date.now()) // 时间戳

async function onLoad () {
  const res = await articles({
    channel_id: props.id,
    timestamp: timestamp.value
  })

  artList.value.push(...res.data.data.results)
  loading.value = false

  if (res.data.data.pre_timestamp === null) {
    finished.value = true
  } else {
    timestamp.value = res.data.data.pre_timestamp
  }
}

// 时间转换
function timeCycle (time) {
  return moment(time).fromNow()
}

const isLoading = ref(false) // 下拉刷新加载
const bol = ref(true)
async function onRefresh () {
  // 还原初始值
  loading.value = false
  finished.value = false
  artList.value = []
  timestamp.value = Date.now()
  isLoading.value = false // 下拉刷新加载完成

  bol.value = false
  await nextTick()
  bol.value = true
}
</script>

<style lang="less" scoped>
.art-list {
  padding: 10px 14px;
  width: 100vw;
  box-sizing: border-box;
  position: fixed;
  top: 90px;
  bottom: 50px;
  left: 0;
  overflow: auto;
  .item {
    .title {
      font-size: 16px;
      padding-bottom: 6px;
    }
    .pic {
      display: flex;
      img {
        flex: 1;
        padding: 8px 4px;
        box-sizing: border-box;
      }
    }
    .other {
      padding: 10px 0;
      span {
        margin-right: 6px;
        font-size: 14px;
        color: #ccc;
      }
    }
  }
}
</style>
