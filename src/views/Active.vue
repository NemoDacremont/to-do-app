<template>
	<div class="active">
		<AddTask />

		<TaskList />
	</div>
</template>

<script lang="ts">
import AddTask from '@/components/AddTask';
import TaskList from '@/components/taskList';
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Active',
	components: {
		AddTask,
		TaskList
	}
})
</script>

<style lang="scss" scoped>

</style>
