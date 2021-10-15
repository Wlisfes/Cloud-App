<template>
	<div class="app-conter">
		<node-skeleton animated :loading="loading">
			<div slot="template" class="node-article">
				<div class="node-title u-line-2">
					<node-skeleton-item height="48rpx" width="60%" margin="13rpx 0" />
					<node-skeleton-item height="48rpx" margin="13rpx 0" />
				</div>
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
				<node-wxml v-if="!loading" :content="node.content"></node-wxml>
			</div>
		</node-skeleton>
		<u-back-top mode="square" :scroll-top="scrollTop"></u-back-top>
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
}
</style>
