<template>
  <VContainer
    grid-list-md
    text-xs-center
  >
    <VBtn
      dark
      @click="About"
    >
      about
    </VBtn>
    <VBtn
      @click="Home"
    >
      Home
    </VBtn>
    <RouterView />
  </VContainer>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      //
    };
  },
  methods: {
    About() {
      this.$router.push('/about');
    },
    Home() {
      this.$router.push('/home');
    },
  },
};
</script>

<style lang="stylus" scoped>
body
  text-align center
</style>
