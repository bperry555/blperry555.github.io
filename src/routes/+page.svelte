<script lang="ts">
	import Welcome from '$lib/Welcome.svx';
</script>

<div class="splash-screen">
	<section> 
		<h1>Hello, I'm Brian <span>&#x1F44B;</span></h1>
		<p class="skills-list">
			Problem Solver <span class="pipe">|</span> Data Analytics <span class="pipe">|</span> 
			Data Visualizations <span class="pipe">|</span>
		</p>
		<p class="skills-list">	
			 Software Engineering <span class="pipe">|</span> Automation <span class="pipe">|</span> Web Development <span class="pipe">|</span>
		</p>
		<p class="location">San Francisco CA.</p>
	</section>
</div>

<div class="welcome-post">
</div>
<Welcome />

<style lang="scss">
	@use "../../static/styles/vars.scss";

.splash-screen {
		display: grid;
		grid-template-columns: 20% 60% 20%;
		margin: 3em 0em 0 0em;

		section {
			grid-column: 2 / 3;
			padding: 1rem 2rem;
			border: 3px;
			border-radius: 20px;
			border-style: outset;
			border-color: vars.$primary-color;
			box-shadow: 10px 10px 5px 2px;

			h1 {
				font-family: vars.$secondary-font;
			}
			p {
				padding-left: 1.5em;
				font-family: vars.$primary-font;
				font-weight: 400;
				font-size: 1.5rem;
				line-height: 2rem;
			}
			.location {
				font-size: 1.1rem;
				font-style: italic;
			}

			.pipe {
				color: purple;
				font-weight: bold;
			}
			background-color: vars.$text-box-light;
		}
	}
</style>
