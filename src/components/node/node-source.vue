<template>
	<div class="node-source">
		<node-skeleton animated :loading="loading && dataSource.length === 0">
			<div slot="template" class="node-list">
				<div class="node-list-item" v-for="key in 12" :key="key">
					<div class="node-conter">
						<div class="node-cover">
							<div class="node-cover-conter">
								<node-skeleton-item variant="image" :size="48" width="100%" height="100%" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="node-list">
				<div class="node-list-item" v-for="node in dataSource" :key="node.id">
					<div class="node-conter">
						<div class="node-cover">
							<div class="node-cover-conter">
								<u-image
									width="100%"
									height="100%"
									:src="`${node.icon}?x-oss-process=style/resize`"
									mode="aspectFill"
									lazy-load
									><u-loading slot="loading"></u-loading>
								</u-image>
							</div>
						</div>
					</div>
				</div>
				<block v-if="more">
					<div class="node-loading" style="width: 100%;padding-bottom: 40rpx;">
						<u-loading color="#fa541c" size="48"></u-loading>
					</div>
				</block>
				<block v-else>
					<div class="node-loading" style="width: 100%;padding-bottom: 40rpx;">
						<u-divider bg-color="#ffffff">没有更多了</u-divider>
					</div>
				</block>
			</div>
		</node-skeleton>
	</div>
</template>

<script>
export default {
	name: 'NodeSource',
	props: {
		dataSource: {
			type: Array,
			default: () => []
		},
		loading: {
			type: Boolean,
			default: true
		},
		more: {
			type: Boolean,
			default: true
		}
	}
}
</script>

<style lang="scss" scoped>
.node-source {
	position: relative;
	.node-list {
		display: flex;
		flex-wrap: wrap;
		padding: 10rpx;
		&-item {
			width: 25%;
			.node-conter {
				display: flex;
				flex-direction: column;
				padding: 20rpx;
				margin: 10rpx;
				border-radius: 10rpx;
				box-shadow: 0rpx 0rpx 10rpx rgba(0, 0, 0, 0.16);
			}
			.node-cover {
				width: 100%;
				height: 0;
				padding-bottom: 100%;
				position: relative;
				&-conter {
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;
					overflow: hidden;
				}
			}
		}
	}
}
</style>
