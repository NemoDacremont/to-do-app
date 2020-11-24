<template>
  <div class="All">
		<AddTask />
		<h1>All</h1>
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
	name: 'All',
	components: {
		AddTask,
		Task
	}
})
</script>
