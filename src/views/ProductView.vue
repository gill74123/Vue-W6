<template>
  <h2>這是單一產品列表</h2>
  <div class="row">
      <div class="col-6">
        <img :src="product.imageUrl" alt="">
      </div>
      <div class="col-6 text-start">
        <h3>{{ product.title }}</h3>
        <p>價錢：$ {{ product.price}}</p>
        <div class="input-group">
          <input type="number" class="form-control" min="1">
          <button type="button" class="btn btn-primary">加入購物車</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/-MvbcFyg3tr_A7ju5IpW`
      this.$http.get(url)
        .then((res) => {
          console.log(res)
          this.product = res.data.product
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
