<template>
  <div class="container text-center">
    <h1>前台</h1>
    <router-link to="/">首頁</router-link> |
    <router-link to="/products">產品列表</router-link> |
    <router-link to="/cart">購物車</router-link> |
    <router-link to="/admin">前往後台</router-link> |
    <router-link to="/login">登入</router-link>
    <router-view></router-view>
  </div>
</template>
