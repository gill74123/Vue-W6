<template>
  <h2>這是產品列表</h2>
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
            <button type="button" class="btn btn-outline-dark">查看更多</button>
            <button type="button" class="btn btn-danger">加入購物車</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res)
          this.products = res.data.products
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
