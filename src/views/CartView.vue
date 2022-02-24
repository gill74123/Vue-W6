<template>
  <h2>這是購物車列表</h2>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="text-end mb-2">
              <button type="button" class="btn btn-outline-danger">清空購物車</button>
            </div>
              <table class="table align-middle">
                  <thead>
                      <tr>
                          <th></th>
                          <th>圖片</th>
                          <th>品名</th>
                          <th style="width: 110px">數量</th>
                          <th>單價</th>
                      </tr>
                  </thead>
                  <tbody>
                    <template v-if="cart.carts">
                      <tr v-for="cart in cart.carts" :key="cart.id">
                          <td>
                            <button type="button" class="btn btn-outline-danger btn-sm">X</button>
                          </td>
                          <td><img :src="cart.product.imageUrl" height="100" alt=""></td>
                          <td>{{ cart.product.title }}</td>
                          <td>{{ cart.qty }}</td>
                          <td>{{ cart.product.price }}</td>
                      </tr>
                    </template>
                  </tbody>
                  <tfoot>
                      <tr>
                          <td colspan="4" class="text-end">總計</td>
                          <td>{{ cart.total }}</td>
                      </tr>
                      <tr class="text-success">
                          <td colspan="4" class="text-end">折扣價</td>
                          <td>{{ cart.final_total }}</td>
                      </tr>
                  </tfoot>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: {}
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          console.log(res)
          this.cart = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
