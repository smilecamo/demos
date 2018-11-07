<template>
  <div class="home">
    <button @click='back'>回退</button>
    <button @click='handle'>跳转到parent</button>
    <button @click='handle'>替换到parent</button>
    <button @click='params'>传参</button>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    back () {
      // 第一种回退
      // this.$router.go(-1)
      // 第二种
      this.$router.back()
    },
    handle () {
      // 路径跳转
      // this.$router.push('/parent')
      // 命名跳转 会产生浏览器记录
      this.$router.push({
        name: 'parent',
        // 在路径中显示
        query: {
          name: 111
        }
      })
      // 替换 不会产生浏览器记录
      // this.$router.replace({ name: 'parent' })
    },
    params () {
      const name = 'name'
      // 通过this.$route.params.XX 课以获取到
      this.$router.push({
        // 第一种通过params结合name
        // name: 'argu',
        // params: {
        //   name: 'lison'
        // }
        // 第二种通过path路径
        path: `/argu/${name}`
      })
    }
  }
}
</script>
