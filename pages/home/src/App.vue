<template>
  <div>{{msg}}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: ' hello vue !!!'
    }
  },
  mounted () {
    console.log('has mounted')
  }
}
</script>

