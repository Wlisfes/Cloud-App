<template>
	<div class="app-conter">
		<node-skeleton animated :loading="loading">
			<div slot="template" class="node-list">
				<div class="node-list-item" v-for="node in 5" :key="node">
					<div class="node-title">
						<node-skeleton-item height="38rpx" margin="0 0 4rpx 0" />
					</div>
					<div class="node-conter">
						<div class="node-content">
							<div class="node-content-description">
								<node-skeleton-item margin="10rpx 0 0" />
								<node-skeleton-item margin="14rpx 0 0" />
							</div>
							<div class="node-footer">
								<div class="node-source">
									<div class="node-nickname">
										<node-skeleton-item width="84rpx" />
									</div>
									<div class="node-setion">
										<node-skeleton-item width="64rpx" />
									</div>
									<div class="node-setion">
										<node-skeleton-item width="64rpx" />
									</div>
									<div class="node-setion">
										<node-skeleton-item width="64rpx" />
									</div>
								</div>
								<div class="node-time">
									<node-skeleton-item width="124rpx" />
								</div>
							</div>
						</div>
						<node-skeleton-item variant="image" width="160rpx" height="160rpx" />
					</div>
				</div>
			</div>
			<div class="node-list">
				<div class="node-list-item" v-for="node in dataSource" :key="node.id" @click="onRouter(node)">
					<div class="node-title">
						<text class="u-line-2">{{ node.title }}</text>
					</div>
					<div class="node-conter">
						<div class="node-content">
							<div class="node-content-description">
								<text class="u-line-2">{{ node.description }}</text>
							</div>
							<div class="node-footer">
								<div class="node-source">
									<div class="node-nickname">
										<text>{{ node.user.nickname }}</text>
									</div>
									<div class="node-setion">
										<u-icon name="eye" color="#999999" size="28"></u-icon>
										<text>{{ node.browse }}</text>
									</div>
									<div class="node-setion">
										<u-icon name="eye" color="#999999" size="28"></u-icon>
										<text>{{ node.browse }}</text>
									</div>
									<div class="node-setion">
										<u-icon name="eye" color="#999999" size="28"></u-icon>
										<text>{{ node.browse }}</text>
									</div>
								</div>
								<div class="node-time">
									<text>{{ $u.timeFrom(node.createTime, 'yyyy-mm-dd') }}</text>
								</div>
							</div>
						</div>
						<u-image
							width="160rpx"
							height="160rpx"
							:src="`${node.cover}?x-oss-process=style/resize`"
							:border-radius="6"
							mode="aspectFill"
							lazy-load
							><u-loading slot="loading"></u-loading>
						</u-image>
					</div>
				</div>
				<block v-if="more">
					<div class="node-loading" style="padding-bottom: 40rpx;">
						<u-loading color="#fa541c" size="48"></u-loading>
					</div>
				</block>
				<block v-else>
					<div class="node-loading" style="padding-bottom: 40rpx;">
						<u-divider bg-color="#f2f2f2">没有更多了</u-divider>
					</div>
				</block>
			</div>
		</node-skeleton>
	</div>
</template>

<script>
export default {
	name: 'NodeArticle',
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
	},
	methods: {
		onRouter(node) {
			this.$emit('router', node)
		}
	}
}
</script>

<style lang="scss" scoped>
.node-list {
	position: relative;
	background-color: #f2f2f2;
	&-item {
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		padding: 20rpx;
		margin-bottom: 20rpx;
		.node-title {
			font-size: 32rpx;
			color: #333333;
			font-weight: 600;
			margin-bottom: 10rpx;
		}
	}
	.node-conter {
		display: flex;
		overflow: hidden;
		.node-content {
			flex: 1;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			margin-right: 20rpx;
		}
		.node-content-description {
			font-size: 28rpx;
			color: #666666;
			flex: 1;
		}
	}
	.node-footer {
		display: flex;
		align-items: center;
		font-size: 22rpx;
		color: #999999;
		.node-source {
			flex: 1;
			display: flex;
			align-items: center;
			overflow: hidden;
			margin-right: 20rpx;
		}
		.node-setion {
			margin-left: 20rpx;
			text {
				margin-left: 8rpx;
			}
		}
	}
}
</style>
