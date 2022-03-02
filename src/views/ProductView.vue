<template>
  <h2>這是單一產品列表</h2>
  <Loading :active="isLoading"></Loading>
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
          <!-- <input type="number" class="form-control" min="1"> -->
          <select name="" id="" class="form-select" v-model="productQty" :disabled="spinnerOn">
            <option v-for="num in 30" :key="num" :value="num">{{ num }}</option>
          </select>
          <button type="button" class="btn btn-primary" @click="addCart(product.id, productQty)">
            <div class="spinner-border spinner-border-sm" v-if="spinnerOn" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            加入購物車
          </button>
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
      productId: '',
      isLoading: false,
      productQty: 1,
      spinnerOn: false
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.productId = id
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url)
        .then((res) => {
          // console.log(res)
          this.product = res.data.product

          this.isLoading = false
        })
    },
    addCart (id, qty = 1) {
      this.spinnerOn = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: id,
        qty: qty
      }
      this.$http.post(url, { data })
        .then((res) => {
          // console.log(res)
          this.spinnerOn = false

          emitter.emit('get-cart')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProduct()
    this.isLoading = true

    console.log(this)
  }
}
</script>
