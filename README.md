# Built on top of [Skeleton](http://getskeleton.com/)
***
- Ridiculously compact CSS framework (__16kb__ minified)
- Completely modular (Remove whatever you're not using)
- 100% Responsive
- __OPTIONAL__ JavaScript (Extremely minor details)

## For full-width, replace every occurrence of "container" with "u-full-width u-cf"
- __Recommend__ using sidebar with full-width design
	- Wrap everything in "sidebar-setup"
	- Example:
```html
<div class="sidebar-setup">
	<nav role="side-navigation">
	...
	</nav>
	<div class="content">
	...
	</div>
	<footer>
	...
	</footer>
</div>
```

### Navigation
- 16:9 Logo __recommended__
- Uses checkbox trick for responsive navigation
- Currently supports:
    - Fixed top
```html
<nav role="navigation">
	<div class="container">
		<div class="logo two columns">
			<img src="http://placehold.it/160x90" />
		</div>

		<div class="ten columns">
			<input type="checkbox" id="toggle" />
			<label for="toggle" onclick></label>

			<ul class="u-pull-right">
				<li class="active"><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
			</ul>
		</div>
	</div>
</nav>
```

### Gallery
- Utilizes CSS animations
- Supports up to __10__ slides
```html
<div class="gallery twelve columns">
	<div class="tagline">
		<div class="inner">Test image gallery</div>
	</div>

	<input type="radio" id="slide1" name="slide" checked />
	<section class="slide">
		<div class="caption">
			<div class="inner">Test Slide 1</div>
		</div>
		<img src="http://placehold.it/1000x450" />
	</section>

	<input type="radio" id="slide2" name="slide" />
	<section class="slide">
		<div class="caption">
			<div class="inner">Test Slide 2</div>
		</div>
		<img src="http://placehold.it/1000x450" />
	</section>

	<input type="radio" id="slide3" name="slide" />
	<section class="slide">
		<div class="caption">
			<div class="inner">Test Slide 3</div>
		</div>
		<img src="http://placehold.it/1000x450" />
	</section>

	<input type="radio" id="slide4" name="slide" />
	<section class="slide">
		<div class="caption">
			<div class="inner">Test Slide 4</div>
		</div>
		<img src="http://placehold.it/1000x450" />
	</section>

	<div class="nav">
		<div class="u-cf">
			<label for="slide1" onclick></label>
			<label for="slide2" onclick></label>
			<label for="slide3" onclick></label>
			<label for="slide4" onclick></label>
		</div>
	</div>
</div>
```

### Panels
```html
<div class="panel-container row">
	<div class="inner">
		<div class="panel four columns">
			<div class="inner">
				<h3>Test Panel</h3>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				<a href="#">Test</a>
			</div>
		</div>
		<div class="panel eight columns">
			<div class="inner">
				<h3>Test Image Panel</h3>

				<div class="image">
					<img src="http://placehold.it/1000x450" />
				</div>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>
	</div>
</div>
```

#### Supports masonry-like panels
```html
<div class="flow-container row">
	<div class="inner">
		<div class="panel">
			<h3>Test Panel</h3>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

			<a href="#">Test</a>
		</div>
		<div class="panel">
			<h3>Test Panel</h3>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur.</p>

			<a href="#">Test</a>
		</div>
		<div class="panel">
			<h3>Test Panel</h3>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua.</p>

			<a href="#">Test</a>
		</div>
		<div class="panel">
			<h3>Test Image Panel</h3>

			<div class="image">
				<img src="./app/images/elegant_dish.jpg" />
			</div>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
		<div class="panel">
			<h3>Test Image Panel</h3>

			<div class="image">
				<img src="./app/images/elegant_dish.jpg" />
			</div>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
		<div class="panel">
			<h3>Test Panel</h3>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua.</p>

			<a href="#">Test</a>
		</div>
		<div class="panel">
			<h3>Test Panel</h3>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

			<a href="#">Test</a>
		</div>
	</div>
</div>
```

### Footer
```html
<footer>
	<div class="u-full-width u-cf">
		<div class="final ten offset-by-one columns">
			<ul class="contact">
				<li>
					<img src="./app/images/email.png" />
				</li>
				<li>
					<img src="./app/images/facebook.png" />
				</li>
				<li>
					<img src="./app/images/twitter.png" />
				</li>
				<li>
					<img src="./app/images/instagram.png" />
				</li>
			</ul>
		</div>
	</div>
	<div class="copyright u-full-width u-cf">
		<h5>Worth The Tip</h5>
		<p>2016 &#169; All rights reserved.</p>
	</div>
</footer>
```