<template>
  <h2>Hi!</h2>
  <h2>欢迎来到黑马头条</h2>
  <van-form ref="form">
    <van-cell-group inset>
      <van-field
        v-model="tel"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="rules.tel"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="rules.password"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" :loading="loading" @click="login">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { authorizations } from '@/api/user'
import { Toast } from 'vant'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const tel = ref('18612345678') // 用户信息
const password = ref('246810')
const loading = ref(false) // 加载状态

// 校验规则
const rules = reactive({
  tel: [
    { required: true, message: '请填写手机号', trigger: 'onBlur' },
    {
      // 正则校验
      pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '请输入正确的手机号',
      trigger: 'onBlur'
    }
  ],
  password: [
    { required: true, message: '请填写密码' },
    {
      pattern: /^\d{6}$/,
      message: '请填写正确的验证码',
      trigger: 'onBlur'
    }
  ]
})

// 声明一个ref来存放该元素的引用
const form = ref(null)
const router = useRouter()
const route = useRoute()
const store = useStore()

// 全局表单验证
async function login () {
  form.value.validate().then(async () => {
    loading.value = true // 显示加载状态
    try {
      const res = await authorizations({
        mobile: tel.value,
        code: password.value
      })
      // console.log(res)
      loading.value = false // 关闭加载状态
      Toast.success(res.data.message) // 成功提示
      router.push(route.query.back || '/layout/home') // 跳转到首页
      // 储存token到vuex实现响应式
      store.commit('setTokenObj', res.data.data)
    } catch (error) {
      console.log(error)
      loading.value = false // 关闭加载状态
    }
  })
}
</script>
