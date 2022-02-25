<template>
  <h2>這是購物車列表</h2>
  <Loading :active="isLoading"></Loading>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="text-end mb-2">
              <button type="button" class="btn btn-outline-danger" :disabled="cart.carts.length === 0" @click="deleteCarts">
                <div class="spinner-border spinner-border-sm" v-if="spinnerOn" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                清空購物車
              </button>
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
                            <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItemCart(cart.id)">
                              <div class="spinner-border spinner-border-sm" v-if="cart.id === spinnerOn" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>
                              X
                            </button>
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
      <!-- 表單 -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2>資料表單</h2>
          <Form class="text-start" v-slot="{ errors }" @submit.prevent="addOrder">
            <div class="mb-3">
              <label for="Email1" class="form-label">Email</label>
              <Field type="email" class="form-control" :class="{ 'is-invalid': errors['Email'] }" id="Email1" name="Email" aria-describedby="emailHelp" placeholder="請輸入 Email"
              rules="email|required" v-model="formData.user.email"></Field>
              <error-message name="Email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <Field type="text" class="form-control" :class="{ 'is-invalid': errors['收件人姓名'] }" id="name" aria-describedby="emailHelp" name="收件人姓名" placeholder="請輸入姓名"
              rules="required" v-model="formData.user.name"></Field>
              <error-message name="收件人姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <Field type="tel" class="form-control" :class="{ 'is-invalid': errors['收件人電話'] }" id="tel" aria-describedby="emailHelp" name="收件人電話" placeholder="請輸入電話"
              rules="min:8|integer|required" v-model="formData.user.tel"></Field>
              <error-message name="收件人電話" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <Field type="text" class="form-control" :class="{ 'is-invalid': errors['收件人地址'] }" id="address" aria-describedby="emailHelp" name="收件人地址" placeholder="請輸入地址"
              rules="required" v-model="formData.user.address"></Field>
              <error-message name="收件人地址" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <Field type="email" class="form-control" id="message" name="留言" cols="30" rows="10" aria-describedby="emailHelp" as="textarea"
              v-model="formData.message"></Field>
            </div>
            <div class="mb-3 text-end">
              <button type="submit" class="btn btn-danger" :disabled="cart.carts.length === 0">送出訂單</button>
            </div>
          </Form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: {
        carts: []
      },
      formData: {
        user: {}
      },
      isLoading: false,
      spinnerOn: false
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

          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 清空購物車列表
    deleteCarts () {
      this.spinnerOn = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/carts`
      this.$http
        .delete(url)
        .then((res) => {
          // console.log(res)
          this.getCart()

          this.spinnerOn = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 刪除購物車單一品項
    deleteItemCart (id) {
      this.spinnerOn = id
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http
        .delete(url)
        .then((res) => {
          // console.log(res)
          this.getCart()

          this.spinnerOn = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 建立訂單
    addOrder () {
      console.log(this.formData)
    }
  },
  mounted () {
    this.getCart()
    this.isLoading = true
  }
}
</script>
