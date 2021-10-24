<template>
	<div class="app-conter"></div>
</template>

<script>
export default {
	name: 'RootArticle',
	onLoad({ id, title }) {
		uni.setNavigationBarTitle({ title })
	}
}
</script>

<style lang="scss" scoped></style>
