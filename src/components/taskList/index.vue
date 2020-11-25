
<template>
	<ul class="task-list">
		<li>
			<Task />
		</li>
		<li>
			<Task />
		</li>
	</ul>
</template>

<script lang="ts">
import Task from './Task';
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'TaskList',
	components: {
		Task
	}
})
</script>

<style lang="scss" scoped>

.task-list {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	list-style: none;
	gap: 27px;
}

</style>