<!--test.vue-->
<template>
  <div class="qk-image">
    <img :src="imageSrc" alt="">
  </div>
</template>

<script>
	export default {
		name: 'QkImage', // 这个名字很重要，它就是未来的标签名<qk-text></qk-text>
		props: {
			imageSrc: {
				type: String,
        default: 'http://oss1.rsc1.cn:9271/group1/M00/00/95/rBIJl2CWAoiAD2WVAAALeclUHnA607.png'
      }
		}
	}
</script>

<style lang="scss" scoped>
  .qk-image{
    width: 100%;
    height: 100%;
  }
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
