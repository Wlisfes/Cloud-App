<template>
	<div class="node-article">
		<towxml :nodes="result" />
		<block v-if="html || result">
			<!-- <wxParse className="node-html" :content="html" :imageProp="{ mode: 'widthFix' }"></wxParse> -->
		</block>
	</div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import marked from 'marked'
import towxml from '../../static/towxml/towxml'
import { HttpStatus, nodeClientArticle } from '@/api'

export default {
	name: 'Article',
	components: { wxParse, towxml },
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
					// this.html = marked(data.html)
					this.result = this.towxml(data.content, 'markdown', {
						theme: 'light', // 主题，默认`light`
						events: {
							// 为元素绑定的事件方法
							tap: e => {
								console.log('tap', e)
							}
						}
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
.h2w__mark {
	display: inline-block;
	color: #48b378;
	padding: 2rpx 8rpx;
	border-radius: 8rpx;
	background-color: #ebebeb;
	font-family: 'Operator Mono', Consolas, Monaco, Menlo, monospace;
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
