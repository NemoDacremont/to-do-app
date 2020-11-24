<template>
	<header>
		<h1>#todo</h1>
		<nav id="nav">
			<router-link to="/">All</router-link> |
			<router-link to="/active">Active</router-link> |
			<router-link to="/completed">Completed</router-link>
		</nav>
	</header>

	<main>
		<router-view/>
	</main>

	<footer>
		Nemo D'acremont | <a target="_blank" href="https://github.com/odasta/">https://github.com/odasta/</a>
	</footer>
</template>

<style lang="scss">

// Import Fonts

@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway&display=swap');

// Colors

$red: #EB5757;
$blue: #2F80ED;
$dark-gray: #333333;
$gray-3: #828282;
$gray-4: #BDBDBD;
$gray-5: #A9A9A9;
$background-color: #FFF;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
