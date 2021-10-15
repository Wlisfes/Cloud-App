export const SCROLL_MIXIN = {
	data() {
		return {
			scrollTop: 0
		}
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop
	}
}
