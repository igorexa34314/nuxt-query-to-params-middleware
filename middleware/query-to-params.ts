// Redirect from 'type' query to 'type' param
export default defineNuxtRouteMiddleware(to => {
	const { type, ...q } = to.query;
	if (!type) {
		return;
	} else if (!to.params.type && typeof type === 'string') {
		console.log(to.params.type, type);

		return navigateTo({ ...to, query: q, params: { type } });
	}
	return navigateTo({ ...to, query: q });
});
