<template>
	<div class="app-conter">
		<node-swiper :loading="swiper.loading" :dataSource="swiper.dataSource"></node-swiper>
		<div v-if="!swiper.loading">
			<node-article :loading="node.loading" :dataSource="node.dataSource"></node-article>
		</div>
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
				total: 0,
				dataSource: [],
				loading: true
			}
		}
	},
	onLoad() {
		this.initNodeBanner().finally(() => {
			this.initNodeClientArticles()
		})
	},
	//下拉刷新
	onPullDownRefresh() {
		this.node.page = 1
		this.node.size = 10
		Promise.all([this.initNodeBanner(), this.initNodeClientArticles()]).finally(() => {
			uni.stopPullDownRefresh()
		})
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
			} catch (e) {}
		},
		async initNodeClientArticles() {
			try {
				const { page, size } = this.node
				const { code, data } = await nodeClientArticles({ page, size })
				if (code === HttpStatus.OK) {
					this.node = Object.assign(this.node, {
						dataSource: data.list,
						total: data.total
					})
				}
				return data
			} catch (e) {}
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
