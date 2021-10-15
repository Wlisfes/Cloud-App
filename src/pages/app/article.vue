<template>
	<div class="node-article">
		<towxml :nodes="result" />
	</div>
</template>

<script>
import towxml from '../../static/towxml/towxml'
import { HttpStatus, nodeClientArticle } from '@/api'

export default {
	name: 'Article',
	components: { towxml },
	data() {
		return {
			html: '',
			result: ''
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
				const { code, data } = await nodeClientArticle({ id })
				if (code === HttpStatus.OK) {
					this.html = data.html
					this.result = this.towxml(data.content, 'markdown', {
						theme: 'light'
					})
				}
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
