<template>
  <!-- 用户 -->
  <div class="top">
    <div class="photo">
      <img src="" alt="" />
    </div>
    <div class="info">
      <p class="name">用户名</p>
      <p class="time">2022-06-03</p>
    </div>
  </div>
  <!-- 中间 -->
  <div class="middle">
    <div class="item">
      <van-icon name="newspaper-o" />
      <h3>我的作品</h3>
    </div>
    <div class="item">
      <van-icon name="star-o" />
      <h3>我的收藏</h3>
    </div>
    <div class="item">
      <van-icon name="tosend" />
      <h3>阅读历史</h3>
    </div>
  </div>
  <!-- 底部 -->
  <div class="bottom">
    <van-cell-group>
      <van-cell is-link icon="edit" title="编辑资料" @click="goEdit" />
      <van-cell is-link icon="service-o" title="小智同学" />
      <van-cell is-link icon="setting-o" title="系统设置" />
      <van-cell is-link icon="manager-o" title="退出登录" @click="logout" />
    </van-cell-group>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.top {
  width: 100%;
  height: 140px;
  background-color: rgb(59, 153, 246);
  display: flex;
  align-items: center;
  .photo {
    margin: 0 15px 0 30px;
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .info {
    .name {
      font-size: 20px;
      color: #fff;
      margin-bottom: 5px;
    }
    .time {
      background-color: #fff;
      color: rgb(49, 133, 216);
    }
  }
}

.middle {
  display: flex;
  justify-content: space-around;
  .item {
    text-align: center;
    :deep(.van-icon) {
      font-size: 26px;
      padding: 10px 0;
    }
    h3 {
      font-weight: 500;
    }
    &:nth-child(1) {
      .van-icon {
        color: rgb(59, 153, 246);
      }
    }
    &:nth-child(2) {
      .van-icon {
        color: rgb(254, 67, 114);
      }
    }
    &:nth-child(3) {
      .van-icon {
        color: rgb(248, 194, 76);
      }
    }
  }
}

.bottom {
  margin-top: 16px;
}
</style>
