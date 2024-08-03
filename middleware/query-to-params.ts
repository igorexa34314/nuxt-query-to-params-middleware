// Redirect from 'type' query to 'type' param
export default defineNuxtRouteMiddleware(to => {
	const { type, ...q } = to.query;
	console.log('from middleware: param =', to.params.type, ';  query =', type);
	if (typeof type === 'string') {
		if (!to.params.type) {
			return navigateTo({ ...to, query: q, params: { type } });
		}
		return navigateTo({ ...to, query: q });
	}
});
