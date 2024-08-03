// Redirect from 'type' query to 'type' param
export default defineNuxtRouteMiddleware(to => {
	const { type, ...q } = to.query;
	console.log(to.params.type, type);
	if (typeof type === 'string') {
		if (!to.params.type) {
			return navigateTo({ ...to, query: q, params: { type } });
		}
		return navigateTo({ ...to, query: q });
	}
});
