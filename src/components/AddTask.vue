
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
.add-task {
	width: 100%;
	display: flex;
	align-items: center;
	gap: 25px;
	padding: 18px 0;

	input[type=text] {
		width: 80%;
		padding: 20px 12px;
		border: 1px solid var(--gray-4);
		border-radius: 12px;

		&::placeholder {
			color: var(--gray-3);
		}
	}

	input[type=submit] {
	}
}
</style>
