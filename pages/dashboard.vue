<script setup lang="tsx">
    try {
        const results = await useFetch('/api/session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                'authentication': useCookie('authentication').value
            }
        })
    }
    catch (error) {
        console.log(error)
    }
</script>
<template>
    <h1>E</h1>
</template>