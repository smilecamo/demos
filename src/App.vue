<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/argu/argu1">argu1</router-link> |
      <router-link to="/argu/argu2">argu2</router-link> |
      <router-link to="/parent">parent</router-link> |
      <router-link to="/parent/children">children</router-link> |
      <router-link to="/name">命名路由</router-link> |
    </div>
    <router-view/>
    <router-view name='tel'></router-view>
    <router-view name='email'></router-view>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
