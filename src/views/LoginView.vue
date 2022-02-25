<template>
  <div class="container">
    <div class="row justify-content-center text-center">
      <div class="col-md-5">
        <h1>登入頁面</h1>
        <form id="form" class="form-signin p-4">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="button">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="text-muted text-center my-3">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>
