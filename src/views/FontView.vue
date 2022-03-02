<template>
  <div class="container text-center">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">首頁</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/products"
                >產品列表</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/admin"
                >前往後台</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0 justify-content-end">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/cart">
              購物車
              <span class="position-absolute top-30 start-80 translate-middle badge rounded-pill bg-danger">
                {{ cartItemQty }}
              </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <h1>前台</h1>
    <router-link to="/">首頁</router-link> |
    <router-link to="/products">產品列表</router-link> |
    <router-link to="/cart">購物車</router-link> |
    <router-link to="/admin">前往後台</router-link> |
    <router-link to="/login">登入</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      cart: {
        carts: []
      },
      cartItemQty: 0
    }
  },
  methods: {
    // 取得購物車列表
    getCart () {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res)
          this.cart = res.data.data

          // 購物車顯示"總數量"
          this.cartItemQty = 0
          this.cart.carts.forEach((item) => {
            this.cartItemQty += item.qty
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>
