<template>
	<div style="padding: 0 20rpx;">
		<node-skeleton animated :loading="loading">
			<div slot="template" style="border-radius: 8rpx;overflow: hidden;">
				<node-skeleton-item variant="image" height="250rpx" />
			</div>
			<div class="node-swiper">
				<u-swiper :list="dataSource" name="cover"></u-swiper>
			</div>
		</node-skeleton>
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
