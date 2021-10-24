<template>
	<div class="app-conter">
		<node-source
			:loading="node.loading"
			:more="node.more"
			:dataSource="node.dataSource"
			@source="onSource"
		></node-source>
	</div>
</template>

<script>
import { HttpStatus, nodeSources } from '@/api'
export default {
	name: 'Multiple',
	data() {
		return {
			node: {
				page: 1,
				size: 40,
				dataSource: [],
				more: true,
				loading: true
			}
		}
	},
	onLoad() {
		this.initNodeSources()
	},
	/**下拉刷新**/
	async onPullDownRefresh() {
		this.node.page = 1
		await this.initNodeSources()
		uni.stopPullDownRefresh()
	},
	/**上拉加载**/
	async onReachBottom() {
		const { more, loading } = this.node
		if (more && !loading) {
			this.node.loading = true
			this.node.page++
			await this.initNodeSources(true)
		}
	},
	methods: {
		/**标签列表**/
		async initNodeSources(concat) {
			try {
				const { page, size } = this.node
				const { code, data } = await nodeSources({ page, size })
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
				console.log(e)
				return e
			}
		},
		/**分类详情列表**/
		onSource({ id, name }) {
			uni.navigateTo({ url: `/pages/root/article?id=${id}&title=${name}` })
		}
	}
}
</script>

<style lang="scss" scoped>
.app-conter {
	height: 100%;
}
</style>
