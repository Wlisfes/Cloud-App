import request from '@/utils/request'

/**创建标签**/
export function nodeCreateSource(params) {
	return request({
		url: `/api/source/create`,
		method: 'POST',
		data: params
	})
}

/**修改标签**/
export function nodeUpdateSource(params) {
	return request({
		url: `/api/source/update`,
		method: 'PUT',
		data: params
	})
}

/**切换标签状态**/
export function nodeSourceCutover(params) {
	return request({
		url: `/api/source/cutover`,
		method: 'PUT',
		data: params
	})
}

/**标签信息**/
export function nodeSource(params) {
	return request({
		url: `/api/source/info`,
		method: 'GET',
		data: params
	})
}

/**标签列表**/
export function nodeSources(params) {
	return request({
		url: `/api/source/list-node`,
		method: 'GET',
		data: params
	})
}

/**分类标签**/
export function nodeDeleteSource(params) {
	return request({
		url: `/api/source/del`,
		method: 'DELETE',
		data: params
	})
}
