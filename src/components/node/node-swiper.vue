<template>
	<div class="node-swiper">
		<block v-if="loading">
			<div class="node-loading">
				<u-loading color="#fa541c" size="48"></u-loading>
			</div>
		</block>
		<block v-else-if="dataSource.length > 0">
			<div class="node-swiper-conter">
				<u-swiper :list="dataSource" name="cover"></u-swiper>
			</div>
		</block>
	</div>
</template>

<script>
export default {
	name: 'NodeSwiper',
	props: {
		dataSource: {
			type: Array,
			default: () => []
		},
		loading: {
			type: Boolean,
			default: true
		}
	}
}
</script>

<style lang="scss" scoped>
.node-swiper {
	display: flex;
	flex-direction: column;
	&-conter {
		margin: 0 20rpx;
		position: relative;
	}
}
</style>
