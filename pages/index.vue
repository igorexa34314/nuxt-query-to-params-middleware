<template>
	<div>
		<h1>Index</h1>
		<h2>Without cache</h2>
		<h3>Default behavior</h3>
		<NuxtLink to="/route-with-param">No param, no query</NuxtLink><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-type', params: { type: 'foo' } }">Param = "foo", no query</NuxtLink
		><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-type', query: { type: 'baz' } }">No param, query = "baz"</NuxtLink
		><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-type', params: { type: 'foo' }, query: { type: 'baz' } }"
			>Param = "foo", query = "baz"</NuxtLink
		>
		<br /><br />
		<h3>With page reload</h3>
		<NuxtLink to="/route-with-param" external>No param, no query, page reload</NuxtLink><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-type', params: { type: 'foo' } }" external
			>Param = "foo", no query, page reload</NuxtLink
		><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-type', query: { type: 'baz' } }" external
			>No param, query = "baz", page reload</NuxtLink
		><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-type', params: { type: 'foo' }, query: { type: 'baz' } }" external
			>Param = "foo", query = "baz", page reload</NuxtLink
		>
		<br /><br />
		<h2>Cache</h2>
		<h3>Default behavior</h3>
		<NuxtLink to="/route-with-param-cached">No param, no query</NuxtLink><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-cached-type', params: { type: 'foo' } }"
			>Param = "foo", no query</NuxtLink
		><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-cached-type', query: { type: 'baz' } }">No param, query = "baz"</NuxtLink
		><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-cached-type', params: { type: 'foo' }, query: { type: 'baz' } }"
			>Param = "foo", query = "baz"</NuxtLink
		>
		<br /><br />
		<h3>With page reload</h3>
		<NuxtLink to="/route-with-param-cached" external>No param, no query, page reload</NuxtLink><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-cached-type', params: { type: 'foo' } }" external
			>Param = "foo", no query, page reload</NuxtLink
		><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-cached-type', query: { type: 'baz' } }" external
			>No param, query = "baz", page reload</NuxtLink
		><br /><br />
		<NuxtLink :to="{ name: 'route-with-param-cached-type', params: { type: 'foo' }, query: { type: 'baz' } }" external
			>Param = "foo", query = "baz", page reload</NuxtLink
		>
	</div>
</template>

<script lang="ts" setup></script>
