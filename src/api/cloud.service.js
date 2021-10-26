import request from '@/utils/request'

/**创建音视频-授权管理端**/
export function nodeCreateCloud(params) {
	return request({
		url: `/api/cloud/create`,
		method: 'POST',
		data: params
	})
}

/**修改音视频媒体-授权管理端**/
export function nodeUpdateCloud(params) {
	return request({
		url: `/api/cloud/update`,
		method: 'PUT',
		data: params
	})
}

/**切换音视频媒体状态-授权管理端**/
export function nodeCloudCutover(params) {
	return request({
		url: `/api/cloud/cutover`,
		method: 'PUT',
		data: params
	})
}

/**音视频信息-授权管理端**/
export function nodeCloud(params) {
	return request({
		url: `/api/cloud/info`,
		method: 'GET',
		data: params
	})
}

/**删除音视频媒体-授权管理端**/
export function nodeDeleteCloud(params) {
	return request({
		url: `/api/cloud/del`,
		method: 'DELETE',
		data: params
	})
}

/**音视频列表-授权管理端**/
export function nodeClouds(params) {
	return request({
		url: `/api/cloud/list-node`,
		method: 'GET',
		data: params
	})
}

/**音视频列表-客户端**/
export function nodeClientClouds(params) {
	return request({
		url: `/api/cloud/client/list-node`,
		method: 'GET',
		data: params
	})
}

/**音视频信息-客户端**/
export function nodeClientCloud(params) {
	return request({
		url: `/api/cloud/client/info`,
		method: 'GET',
		data: params
	})
}
