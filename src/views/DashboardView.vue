<template>
  <div class="container text-center">
    <h1>後台</h1>
    <router-link to="/">回前台</router-link> |
    <router-link to="/admin/products">產品列表</router-link>

    <router-view v-if="checkSuccess"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  methods: {
    // 確認使用者
    checkLogin () {
      // 取 cookie 內的 token
      const myToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)gillToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )

      if (myToken) {
        // 將 token 帶入 axios headers
        this.$http.defaults.headers.common.Authorization = `${myToken}`

        const url = `${process.env.VUE_APP_URL}/api/user/check`
        this.$http
          .post(url)
          .then((res) => {
            // console.log(res)
            this.checkSuccess = true
          })
          .catch((err) => {
            console.log(err.response)
            alert(err.response.data.message)

            // 頁面跳轉
            this.$router.push('/login')
          })
      } else {
        alert('您尚未登入，請登入！')
        // 頁面跳轉
        this.$router.push('/login')
      }
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
