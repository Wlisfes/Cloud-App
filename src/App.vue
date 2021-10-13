<script>
export default {
	mpType: 'app',
	onLaunch() {
		console.log('App Launch')
	},
	onShow() {
		console.log('App Show')
	},
	onHide() {
		console.log('App Hide')
	}
}
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
page {
	> .app-conter {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
}
</style>
