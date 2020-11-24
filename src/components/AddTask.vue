
<template>
	<form class="add-task" @submit.prevent="">
		<input type="text" name="add-task__input" id="add-task__input" placeholder="ex: do math exercise">
		<input type="submit" value="Add">
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'AddTask'
})
</script>

<style lang="scss" scoped>

</style>
