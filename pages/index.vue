<template>
  <div>
    <h1>
      <nuxt-link :to= "{name:'about',params:{newId:id}}">关于</nuxt-link>
      <nuxt-link to="/me">我的</nuxt-link>
    </h1>
  </div>
</template>

<script>


export default {
  data() {
    return {
      id: 5
    }
  }
}
</script>

<style>

</style>

