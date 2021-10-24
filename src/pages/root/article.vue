<template>
	<div class="app-conter">
		<node-article
			:loading="node.loading"
			:more="node.more"
			:dataSource="node.dataSource"
			@router="onRouter"
		></node-article>
		<u-back-top mode="square" :scroll-top="scrollTop" :icon-style="{ color: '#ffffff' }"></u-back-top>
	</div>
</template>

<script>
import { SCROLL_MIXIN } from '@/mixins/common'
import { HttpStatus, nodeClientArticles } from '@/api'

export default {
	name: 'RootArticle',
	mixins: [SCROLL_MIXIN],
	data() {
		return {
			node: {
				id: null,
				page: 1,
				size: 10,
				dataSource: [],
				more: true,
				loading: true
			}
		}
	},
	onLoad({ id, title }) {
		uni.setNavigationBarTitle({
			title: title,
			success: () => {
				this.node.id = id
				this.initNodeClientArticles()
			}
		})
	},
	/**下拉刷新**/
	async onPullDownRefresh() {
		this.node.page = 1
		this.node.size = 10
		await this.initNodeClientArticles()
		uni.stopPullDownRefresh()
	},
	/**上拉加载**/
	async onReachBottom() {
		const { more, loading } = this.node
		if (more && !loading) {
			this.node.loading = true
			this.node.page++
			await this.initNodeClientArticles(true)
		}
	},
	methods: {
		/**文章列表-客户端**/
		async initNodeClientArticles(concat) {
			try {
				const { page, size, id } = this.node
				const { code, data } = await nodeClientArticles({ page, size, source: id })
				if (code === HttpStatus.OK) {
					if (concat) {
						this.node.dataSource = this.node.dataSource.concat(data.list)
					} else {
						this.node.dataSource = data.list
					}
					this.node.more = this.node.dataSource.length < data.total
					this.node.loading = false
				}
				return data
			} catch (e) {
				return e
			}
		},
		/**文章详情router**/
		onRouter({ id, title }) {
			uni.navigateTo({ url: `/pages/app/article?id=${id}&title=${title}` })
		}
	}
}
</script>

<style lang="scss" scoped>
.app-conter {
	height: 100%;
	background-color: #f2f2f2;
}
</style>
