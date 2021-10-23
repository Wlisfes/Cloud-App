<template>
	<div :class="['el-skeleton__item', `el-skeleton__${variant}`]" :style="[useStyle]">
		<u-icon name="photo" :size="size" :color="color" v-if="variant === 'image'"></u-icon>
	</div>
</template>

<script>
export default {
	name: 'NodeSkeletonItem',
	props: {
		variant: {
			type: String,
			default: 'text'
		},
		width: {
			type: [String, Number],
			default: 0
		},
		height: {
			type: [String, Number],
			default: 0
		},
		size: {
			type: Number,
			default: 40
		},
		color: {
			type: String,
			default: '#909399'
		},
		margin: {
			type: [String, Number],
			default: 0
		}
	},
	computed: {
		useStyle() {
			let style = {}
			if (this.width) {
				style = { ...style, width: typeof this.width === 'number' ? `${this.width}rpx` : this.width }
			}
			if (this.height) {
				style = { ...style, height: typeof this.height === 'number' ? `${this.height}rpx` : this.height }
			}
			if (this.margin) {
				style = { ...style, margin: this.margin }
			}
			return style
		}
	}
}
</script>

<style>
.el-skeleton__item {
	display: block;
	height: 32rpx;
	border-radius: 8rpx;
	width: 100%;
	background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
	background-size: 400% 100%;
	animation: el-skeleton-loading 1.4s ease infinite;
}
@keyframes el-skeleton-loading {
	0% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0 50%;
	}
}
.el-skeleton__circle {
	border-radius: 50%;
	width: 72rpx;
	height: 72rpx;
	line-height: 72rpx;
}
.el-skeleton__circle--lg {
	width: 80rpx;
	height: 80rpx;
	line-height: 80rpx;
}
.el-skeleton__circle--md {
	width: 56rpx;
	height: 56rpx;
	line-height: 56rpx;
}
.el-skeleton__button {
	height: 80rpx;
	width: 128rpx;
	border-radius: 8rpx;
}
.el-skeleton__p {
	width: 100%;
}
.el-skeleton__p.is-last {
	width: 61%;
}
.el-skeleton__p.is-first {
	width: 33%;
}
.el-skeleton__text {
	width: 100%;
	height: 26rpx;
}
.el-skeleton__caption {
	height: 24rpx;
}
.el-skeleton__h1 {
	height: 40rpx;
}
.el-skeleton__h3 {
	height: 36rpx;
}
.el-skeleton__h5 {
	height: 32rpx;
}
.el-skeleton__image {
	width: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0;
}
.el-skeleton__image svg {
	fill: #dcdde0;
	width: 22%;
	height: 22%;
}
</style>
