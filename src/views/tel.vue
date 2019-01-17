<template>
  <div>
    name: {{name}}
  </div>
</template>

<script>
export default {
  computed: {
    name () {
      return this.$store.state.appName
    }
  }
}
</script>
