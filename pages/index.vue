<template>
	<div>
		<h1>Index</h1>
		<NuxtLink to="/route-with-param">No param, no query</NuxtLink><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-type', params: { type: 'foo' } }">Param = "foo", no query</NuxtLink
		><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-type', query: { type: 'baz' } }">No param, query = "baz"</NuxtLink
		><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-type', params: { type: 'foo' }, query: { type: 'baz' } }"
			>Param = "foo", query = "baz"</NuxtLink
		>
	</div>
</template>

<script lang="ts" setup></script>
