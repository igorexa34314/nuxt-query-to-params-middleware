// Redirect from 'type' query to 'type' param
export default defineNuxtRouteMiddleware((to, from) => {
	const { type, ...q } = to.query;
	console.log('from middleware: param =', to.params.type, ';  query =', type);
	if (type) {
		return navigateTo({ ...to, query: q });
	}
});
