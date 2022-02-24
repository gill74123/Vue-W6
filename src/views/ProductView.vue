<template>
  <h2>這是單一產品列表</h2>
  <div class="row">
      <div class="col-6">
        <img :src="product.imageUrl" height="300"  alt="">
      </div>
      <div class="col-6 text-start">
        <h3>{{ product.title }}</h3>
        <div v-if="!(product.origin_price === product.price)">
          <p class="text-danger">$ {{ product.price}} / {{ product.unit}}</p>
          <del>$ {{ product.origin_price }} / {{ product.unit }}</del>
        </div>
        <p v-else>$ {{ product.price}} / {{ product.unit}}</p>
        <div class="input-group">
          <input type="number" class="form-control" min="1">
          <button type="button" class="btn btn-primary" @click="addCart">加入購物車</button>
        </div>
      </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      product: {},
      productId: ''
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.productId = id
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url)
        .then((res) => {
          console.log(res)
          this.product = res.data.product
        })
    },
    addCart () {
      emitter.emit('add-cart', this.productId)
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
