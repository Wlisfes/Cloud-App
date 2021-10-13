import request from '@/utils/request'

/**标签列表**/
export function nodeSources(params) {
	return request({
		url: `/api/source/list-node`,
		method: 'GET',
		data: params
	})
}
