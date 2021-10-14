<template>
	<div class="node-article">
		<block v-if="html">
			<wxParse className="node-html" :content="html" :imageProp="{ mode: 'widthFix' }"></wxParse>
		</block>
	</div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import marked from 'marked'
import { HttpStatus, nodeClientArticle } from '@/api'

export default {
	name: 'Article',
	components: { wxParse },
	data() {
		return {
			html: ''
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
					this.html = marked(data.html)
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
.node-html {
	.mark {
		display: inline-block;
		color: #48b378;
		padding: 2rpx 8rpx;
		border-radius: 8rpx;
		background-color: #ebebeb;
		font-family: 'Operator Mono', Consolas, Monaco, Menlo, monospace;
	}
	.blockquote {
		.mark {
			line-height: 1.4;
			padding: 0 10rpx;
			margin-left: 10rpx;
		}
	}
}
</style>
