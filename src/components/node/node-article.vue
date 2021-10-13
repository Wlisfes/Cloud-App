<template>
	<div class="node-article">
		<!-- <div class="node-article-header">
			<div>dasdas</div>?x-oss-process=style/resize-16-9
		</div> -->

		<div class="node-list">
			<div class="node-list-item" v-for="node in dataSource" :key="node.id">
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
									<u-icon name="eye" color="#999999" size="30"></u-icon>
									<text>{{ node.browse }}</text>
								</div>
								<div class="node-setion">
									<u-icon name="eye" color="#999999" size="30"></u-icon>
									<text>{{ node.browse }}</text>
								</div>
								<div class="node-setion">
									<u-icon name="eye" color="#999999" size="30"></u-icon>
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
						:src="`${node.cover}?x-oss-process=style/resize-16-9`"
						:border-radius="6"
						mode="aspectFill"
						lazy-load
						><u-loading slot="loading"></u-loading>
					</u-image>
				</div>
			</div>
		</div>
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
		}
	}
}
</script>

<style lang="scss" scoped>
.node-article {
	display: flex;
	flex-direction: column;
	background-color: #f2f2f2;
	&-header {
		display: flex;
		align-items: center;
	}
	.node-list {
		position: relative;
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
}
</style>
