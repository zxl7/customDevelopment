<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<script>
// ios 禁止缩放
window.onload = function() {
  document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  document.addEventListener('gesturestart', function(event) {
    event.preventDefault()
  })
}
</script>
<style>
#app {
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background: #f6f6f6;
}
</style>
