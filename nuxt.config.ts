// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	routeRules: {
		'/route-with-param-cached/**': { swr: 100 },
	},
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
});
