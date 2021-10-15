<template>
	<div class="app-conter">
		<node-skeleton animated :loading="loading">
			<div slot="template" class="node-article">
				<node-skeleton-item height="42rpx" width="80%" margin="10rpx 0" />
				<node-skeleton-item height="108rpx" margin="20rpx 0 0" />
				<div>
					<node-skeleton-item height="480rpx" margin="30rpx 0 0" />
					<node-skeleton-item variant="h1" width="60%" margin="50rpx 0 0" />
					<node-skeleton-item variant="h1" margin="16rpx 0 0" />
					<node-skeleton-item margin="40rpx 0 0" />
					<node-skeleton-item margin="20rpx 0 0" />
					<node-skeleton-item width="80%" margin="20rpx 0 0" />
				</div>
			</div>
			<div class="node-article">
				<div class="node-title u-line-3">{{ node.title }}</div>
				<div class="node-user">
					<u-image
						v-if="node.user.avatar"
						width="64rpx"
						height="64rpx"
						shape="circle"
						:src="`${node.user.avatar}?x-oss-process=style/resize`"
						:border-radius="6"
						mode="scaleToFill"
						><u-loading slot="loading"></u-loading>
					</u-image>
					<div class="node-user-conter">
						<div style="display: flex;align-items: center;margin-bottom: 6rpx;">
							<div class="node-user-item">
								<text>{{ node.user.nickname }}</text>
							</div>
							<div class="node-user-item">
								<text>{{ node.createTime }}</text>
							</div>
							<div class="node-user-item">
								<u-icon name="eye" color="#999999" size="26"></u-icon>
								<text style="margin-left: 8rpx;">{{ node.browse }}</text>
							</div>
							<div class="node-user-item">
								<u-icon name="eye" color="#999999" size="26"></u-icon>
								<text style="margin-left: 8rpx;">{{ node.browse }}</text>
							</div>
						</div>
						<div style="display: flex;align-items: center;">
							<u-tag
								size="mini"
								color="#ffffff"
								mode="dark"
								style="margin-right: 10rpx;"
								v-for="k in node.source"
								:key="k.id"
								:bg-color="k.color"
								:text="k.name"
							/>
						</div>
					</div>
				</div>
				<node-wxml v-if="!loading" :content="node.content"></node-wxml>
			</div>
		</node-skeleton>
		<u-back-top mode="square" :scroll-top="scrollTop" :icon-style="{ color: '#ffffff' }"></u-back-top>
	</div>
</template>

<script>
import { SCROLL_MIXIN } from '@/mixins/common'
import { HttpStatus, nodeClientArticle } from '@/api'

export default {
	name: 'Article',
	mixins: [SCROLL_MIXIN],
	data() {
		return {
			node: null,
			loading: true
		}
	},
	onLoad({ id, title }) {
		uni.setNavigationBarTitle({ title: title || '使用CSS绘制各种图形' })
		this.initNodeClientArticle(id || 5)
	},
	methods: {
		/**文章信息-客户端**/
		async initNodeClientArticle(id) {
			try {
				const { code, data } = await nodeClientArticle({ id })
				if (code === HttpStatus.OK) {
					this.node = data
					this.loading = false
				}
			} catch (e) {}
		}
	}
}
</script>

<style lang="scss">
.node-article {
	padding: 20rpx;
	line-height: 1.5;
	.node-title {
		font-size: 40rpx;
		color: #333333;
		font-weight: 500;
	}
	.node-user {
		padding: 20rpx;
		margin-top: 20rpx;
		border-radius: 10rpx;
		background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
		display: flex;
		align-items: center;
		&-conter {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-left: 20rpx;
			font-size: 20rpx;
			color: #999999;
		}
		.node-user-item {
			display: flex;
			align-items: center;
			margin-right: 20rpx;
		}
	}
}
</style>
