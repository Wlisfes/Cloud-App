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
@import url('mpvue-wxparse/src/wxParse.css');
page {
	> .app-conter {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.node-loading {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20rpx;
	}
}
</style>
