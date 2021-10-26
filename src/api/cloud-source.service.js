import request from '@/utils/request'

/**创建分类标签**/
export function nodeCreateCloudSource(params) {
	return request({
		url: `/api/cloud-source/create`,
		method: 'POST',
		data: params
	})
}

/**修改分类标签**/
export function nodeUpdateCloudSource(params) {
	return request({
		url: `/api/cloud-source/update`,
		method: 'PUT',
		data: params
	})
}

/**切换分类标签状态**/
export function nodeCloudSourceCutover(params) {
	return request({
		url: `/api/cloud-source/cutover`,
		method: 'PUT',
		data: params
	})
}

/**分类标签信息**/
export function nodeCloudSource(params) {
	return request({
		url: `/api/cloud-source/info`,
		method: 'GET',
		data: params
	})
}

/**分类标签列表**/
export function nodeCloudSources(params) {
	return request({
		url: `/api/cloud-source/list-node`,
		method: 'GET',
		data: params
	})
}

/**删除分类标签**/
export function nodeDeleteCloudSource(params) {
	return request({
		url: `/api/cloud-source/del`,
		method: 'DELETE',
		data: params
	})
}
