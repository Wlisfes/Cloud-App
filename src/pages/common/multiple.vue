<template>
	<div class="app-conter">
		<node-source :loading="node.loading" :more="node.more" :dataSource="node.dataSource"></node-source>
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
				size: 18,
				dataSource: [],
				more: true,
				loading: true
			}
		}
	},
	created() {
		this.initNodeSources()
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
		}
	}
}
</script>

<style lang="scss" scoped>
.app-conter {
	height: 100%;
}
</style>
