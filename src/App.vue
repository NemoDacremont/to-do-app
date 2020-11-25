<template>
	<header>
		<h1>#todo</h1>
		<nav class="nav">
			<ul class="nav__list">
				<li>
					<router-link to="/">All</router-link>
				</li>
				<li>
					<router-link to="/active">Active</router-link>
				</li>
				<li>
					<router-link to="/completed">Completed</router-link>
				</li>
			</ul>

			<div class="route-overlay" :style="`transform: translateX(${200 * routeIndex}%)`"></div>
		</nav>
	</header>

	<main>
		<router-view/>
	</main>

	<footer>
		Nemo D'acremont | <a target="_blank" href="https://github.com/odasta/">https://github.com/odasta/</a>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'App',
	data () {
		return {
			currentRoute: this.$router.currentRoute,
			routes: ['/', '/active', '/completed']
		}
	},
	computed: {
		routeIndex () {
			return (this.routes.indexOf(this.currentRoute.path) === -1) ?
				0:
				this.routes.indexOf(this.currentRoute.path);
		}
	}
})
</script>

<style lang="scss">

// Import Fonts

@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@700&display=swap');

// Colors

$red: #EB5757;
$blue: #2F80ED;
$dark-gray: #333333;
$gray-3: #828282;
$gray-4: #BDBDBD;
$gray-5: #A9A9A9;
$background-color: #FFF;

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
  font-family: 'montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark-gray;

	display: flex;
	flex-direction: column;
	align-items: center;
}

header {
	width: 609px;
	h1 {
		font-family: 'raleway', sans-serif;
		font-weight: 700;
		font-style: normal;
		font-size: 36px;
		line-height: 42px;
		letter-spacing: -0.045em;

		margin: 32px 0;
	}
}

.nav {
	position: relative;
	border-bottom: 1px solid $gray-4;

	a {
		font-weight: bold;
		color: $dark-gray;
		overflow: hidden;
		position: relative;
	}

	.nav__list {
		list-style: none;
		display: flex;
		align-items: center;
		width: 100%;
		padding: 0;
		margin: 0;

		li {
			width: 33%;
			display: flex;
			justify-content: center;
			align-items: center;

			a {
				width: 100%;
				padding: 18px 0;
				text-decoration: none;
			}
		}
	}

	.route-overlay {
		height: 0;
		width: 16.5%;
		border-top: 4px solid $blue;
		border-radius: 4px 4px 0 0;
		position: absolute;
		top: calc(100% - 4px);
		left: 8.25%;
		transition: transform 0.3s cubic-bezier(.65,.05,.36,1);
	}
}
</style>
