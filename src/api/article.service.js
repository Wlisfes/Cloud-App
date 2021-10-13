import request from '@/utils/request'

/**创建文章-授权管理端**/
export function nodeCreateArticle(params) {
	return request({
		url: `/api/article/create`,
		method: 'POST',
		data: params
	})
}

/**修改文章-授权管理端**/
export function nodeUpdateArticle(params) {
	return request({
		url: `/api/article/update`,
		method: 'PUT',
		data: params
	})
}

/**切换文章状态-授权管理端**/
export function nodeArticleCutover(params) {
	return request({
		url: `/api/article/cutover`,
		method: 'PUT',
		data: params
	})
}

/**文章信息-授权管理端**/
export function nodeArticle(params) {
	return request({
		url: `/api/article/info`,
		method: 'GET',
		data: params
	})
}

/**文章列表-授权管理端**/
export function nodeArticles(params) {
	return request({
		url: `/api/article/list-node`,
		method: 'GET',
		data: params
	})
}

/**删除文章-授权管理端**/
export function nodeDeleteArticle(params) {
	return request({
		url: `/api/article/del`,
		method: 'DELETE',
		data: params
	})
}

/*********************************************************************************/

/**文章列表-客户端**/
export function nodeClientArticles(params) {
	return request({
		url: `/api/article/client/list-node`,
		method: 'GET',
		data: params
	})
}

/**文章信息-客户端**/
export function nodeClientArticle(params) {
	return request({
		url: `/api/article/client/info`,
		method: 'GET',
		data: params
	})
}
