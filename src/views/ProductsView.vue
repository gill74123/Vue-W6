<template>
  <h2>這是產品列表</h2>
  <Loading :active="isLoading"></Loading>
  <table class="table">
    <thead>
      <tr>
        <th width="300">圖片</th>
        <th width="300">商品名稱</th>
        <th width="300">價格</th>
        <th width="300">操作</th>
      </tr>
    </thead>
    <tbody class="align-middle">
      <tr v-for="product in products" :key="product.id">
        <td>
          <img :src="product.imageUrl" height="100" alt="" />
        </td>
        <td>{{ product.title }}</td>
        <td>
          <p v-if="product.origin_price === product.price">
            NT$ {{ product.price }} 元
          </p>
          <div v-else>
            <del>原價 NT$ {{ product.origin_price }} 元</del>
            <p>現在只要 NT$ {{ product.price }} 元</p>
          </div>
        </td>
        <td>
          <div class="btn-group btn-group-sm">
            <button type="button" class="btn btn-outline-dark" @click="seeMoreInfo(product.id)">查看更多</button>
            <button type="button" class="btn btn-danger" @click="addCart(product.id)">
              <div class="spinner-border spinner-border-sm" v-if="product.id === spinnerOn" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              加入購物車
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      products: [],
      isLoading: false,
      spinnerOn: ''
    }
  },
  methods: {
    // 取得 產品列表
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res)
          this.products = res.data.products

          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 加入購物車
    addCart (id, qty = 1) {
      console.log('進入方法')
      this.spinnerOn = id
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: id,
        qty: qty
      }
      this.$http.post(url, { data })
        .then((res) => {
          console.log(res)
          this.spinnerOn = ''
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 查看更多
    seeMoreInfo (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  mounted () {
    this.getProducts()
    emitter.on('add-cart', (id) => {
      this.addCart(id)
    })
    console.log('裝載')
  },
  unmounted () {
    console.log('卸載')
    emitter.off('add-cart')
  }
}
</script>
