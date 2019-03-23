<template>
  <div>{{msg}}
    <p class="outbox"><span class="my-icon">the arrow icon</span></p>
    <p class="imgTest"></p>
  </div>
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

<style>
.outbox {
  width: 100px; 
  height: 100px;
  border: 1px solid green;
  background: #777;
}
.my-icon  {
  display: block;
  width: 30px;
  height: 30px;
  background: url(../assets/ok-icon.png) no-repeat;
}
.imgTest {
  display: block;
  width: 360px;
  height: 400px;
  background: url(../assets/timg.jpg) no-repeat
}
</style>


