<template>
	<div class="node-article">
		<node-wxml :content="content"></node-wxml>
	</div>
</template>

<script>
import { HttpStatus, nodeClientArticle } from '@/api'

export default {
	name: 'Article',
	data() {
		return {
			content: ''
		}
	},
	onLoad({ id, title }) {
		uni.setNavigationBarTitle({ title })
		this.initNodeClientArticle(id)
	},
	methods: {
		/**文章信息-客户端**/
		async initNodeClientArticle(id) {
			try {
				uni.showLoading({ title: '加载中' })
				const { code, data } = await nodeClientArticle({ id })
				if (code === HttpStatus.OK) {
					this.content = data.content
				}
				setTimeout(() => uni.hideLoading(), 500)
			} catch (e) {}
		}
	}
}
</script>

<style lang="scss">
.node-article {
	padding: 20rpx;
}
</style>
