<template>
	<div class="node-html">
		<towxml :nodes="html"></towxml>
	</div>
</template>

<script>
import towxml from '../../static/towxml/towxml'
export default {
	name: 'NodeWxml',
	components: { towxml },
	props: {
		content: {
			type: String,
			default: ''
		}
	},
	computed: {
		html() {
			return this.towxml(this.content, 'markdown', {
				theme: 'light'
			})
		}
	}
}
</script>
