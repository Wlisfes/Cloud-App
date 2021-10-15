<template>
	<div>
		<template v-if="uiLoading">
			<div :class="['el-skeleton', animated ? 'is-animated' : '']">
				<template v-for="i in count">
					<slot v-if="loading" name="template">
						<node-skeleton-item
							v-for="item in rows"
							:key="`${i}-${item}`"
							:class="{
								'el-skeleton__paragraph': item !== 1,
								'is-first': item === 1,
								'is-last': item === rows && rows > 1
							}"
							variant="p"
						/>
					</slot>
				</template>
			</div>
		</template>
		<template v-else>
			<slot></slot>
		</template>
	</div>
</template>
<script>
export default {
	name: 'NodeSkeleton',
	props: {
		animated: {
			type: Boolean,
			default: false
		},
		count: {
			type: Number,
			default: 1
		},
		rows: {
			type: Number,
			default: 4
		},
		loading: {
			type: Boolean,
			default: true
		},
		throttle: {
			type: Number,
			default: 0
		}
	},
	watch: {
		loading: {
			handler(loading) {
				if (this.throttle <= 0) {
					this.uiLoading = loading
					return
				}
				if (loading) {
					clearTimeout(this.timeoutHandle)
					this.timeoutHandle = setTimeout(() => {
						this.uiLoading = this.loading
					}, this.throttle)
				} else {
					this.uiLoading = loading
				}
			},
			immediate: true
		}
	},
	data() {
		return {
			uiLoading: this.throttle <= 0 ? this.loading : false
		}
	}
}
</script>

<style lang="scss">
.el-skeleton__item {
	display: block;
	height: 32rpx;
	border-radius: 4rpx;
	width: 100%;
	background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
	background-size: 400% 100%;
	animation: el-skeleton-loading 1.4s ease infinite;
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
@keyframes el-skeleton-loading {
	0% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0 50%;
	}
}
.el-skeleton {
	width: 100%;
}
.el-skeleton__first-line,
.el-skeleton__paragraph {
	height: 32rpx;
	// margin-top: 16rpx;
	// background: #f2f2f2;
}
</style>
