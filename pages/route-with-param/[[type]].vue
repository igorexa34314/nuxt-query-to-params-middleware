<template>
	<h1>Route with param</h1>
	<NuxtLink to="/">To home</NuxtLink>
	<br />
	<h2>Path: {{ $route.path }}</h2>
	<h2>Param: {{ $route.params.type }}</h2>
	<h2>Query: {{ $route.query.type }}</h2>
</template>

<script lang="ts" setup>
definePageMeta({
	middleware: ['remove-type-query'],
});
</script>
