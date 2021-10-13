<template>
	<div>
		<div class="node-html markdown-body" v-html="node && node.html"></div>
	</div>
</template>

<script>
import { HttpStatus, nodeClientArticle } from '@/api'
import '@/style/css/index.css'
// import '@/style/markdown/github-markdown.min.css'

export default {
	name: 'Article',
	data() {
		return {
			node: null
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
					console.log(data)
					this.node = data
				}
			} catch (e) {}
		}
	}
}
</script>

<style lang="scss" scoped></style>
