<template>
	<div class="app-conter">
		<node-swiper :loading="swiper.loading" :dataSource="swiper.dataSource"></node-swiper>
		<block v-if="!swiper.loading">
			<node-article :loading="node.loading" :more="node.more" :dataSource="node.dataSource"></node-article>
		</block>
	</div>
</template>

<script>
import { HttpStatus, nodeBanner, nodeClientArticles } from '@/api'

export default {
	name: 'Home',
	data() {
		return {
			swiper: {
				dataSource: [],
				loading: true
			},
			node: {
				page: 1,
				size: 10,
				dataSource: [],
				more: true,
				loading: true
			}
		}
	},
	onLoad() {
		this.initNodeBanner().finally(() => {
			this.initNodeClientArticles()
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
		/**轮播壁纸**/
		async initNodeBanner() {
			try {
				const { code, data } = await nodeBanner()
				if (code === HttpStatus.OK) {
					this.swiper = Object.assign(this.swiper, {
						dataSource: data,
						loading: false
					})
				}
				return data
			} catch (e) {
				return e
			}
		},
		/**文章列表-客户端**/
		async initNodeClientArticles(concat) {
			try {
				const { page, size } = this.node
				const { code, data } = await nodeClientArticles({ page, size })
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
		onSearch() {}
	}
}
</script>

<style lang="scss" scoped>
.app-conter {
	overflow: hidden;
}
</style>
