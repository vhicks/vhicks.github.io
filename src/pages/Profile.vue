<template>
    
</template>

<script>
export default {
    name: 'profile',
    computed: {
        currentUser () {
            return this.$store.state.currentUser
        }
    }
}
</script>
