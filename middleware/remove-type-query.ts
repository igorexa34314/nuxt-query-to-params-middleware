// Redirect from 'type' query to 'type' param
export default defineNuxtRouteMiddleware(to => {
	if (!import.meta.client) return;
	const { type, ...q } = to.query;
	console.log('from middleware: param =', to.params.type, ';  query =', type);
	if (type) {
		return navigateTo({ ...to, query: q });
	}
});
