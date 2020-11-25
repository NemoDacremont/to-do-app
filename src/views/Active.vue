<template>
	<div class="active">
		<AddTask />
		<h1>Active</h1>
		<ul clas="tasks-list">
			<!-- v-for list -->
			<li>
				<Task />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import AddTask from '@/components/AddTask';
import Task from '@/components/task';
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Active',
	components: {
		AddTask,
		Task
	}
})
</script>

<style lang="scss" scoped>

</style>
