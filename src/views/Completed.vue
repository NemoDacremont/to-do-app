
<template>
	<div class="completed">
		<h1>Completed</h1>
		<ul clas="tasks-list">
			<!-- v-for list -->
			<li>
				<Task />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Task from '@/components/task';
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Completed',
	components: {
		Task
	}
})
</script>
