<template>
	<h1>Route with param</h1>
	<NuxtLink to="/">To home</NuxtLink>
	<br />
	<h2>Param: {{ $route.params.type }}</h2>
	<h2>Query: {{ $route.query.type }}</h2>
</template>

<script lang="ts" setup>
definePageMeta({
	key: route => route.path + route.query.type,
	middleware: ['query-to-params'],
});
</script>
