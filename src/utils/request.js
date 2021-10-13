export function create(node) {
	return function request(props) {
		return new Promise((resolve, reject) => {
			const URL = `${props.baseURL || node.baseURL || ''}${props.url}`
			uni.request({
				url: URL,
				method: props.method || 'GET',
				data: props.data || {},
				timeout: props.timeout || node.timeout || 60000,
				header: { ...(node.header && node.header), ...(props.header && props.header) },
				success: response => {
					const { statusCode, data } = response
					if (statusCode === 200 || data.code === 200) {
						resolve(data)
					} else {
						reject(data)
					}
				},
				fail: error => {
					props?.fail?.(error)
					reject(error)
				},
				complete: () => {
					props?.complete?.()
				}
			})
		})
	}
}

export default create({
	baseURL: 'https://lisfes.cn',
	// baseURL: 'http://192.168.0.20:3005',
	header: { mode: 'WeChat' }
})
