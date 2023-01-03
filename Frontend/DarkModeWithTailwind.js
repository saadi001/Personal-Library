/* 
After creating react app we have to follow these steps
*/

/* 
Steps: 1 Install tailwind css and configure it
* install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

* configure at tailwind.config.js
module.exports = {
      after content
     darkMode: "class",
}
*/

/* 
Steps: 2 install a package for beautiful sun moon animation
npm i react-toggle-dark-mode
*/

/* 
Steps: 3 create a hook to catch the theme chages
useDarkSide.js

code: 
import { useState, useEffect } from "react";

export default function useDarkSide() {
	const [theme, setTheme] = useState(localStorage.theme);
	const colorTheme = theme === "dark" ? "light" : "dark";

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme, colorTheme]);

	return [colorTheme, setTheme]
}

 */

/* 
Steps 4: create an event switcher component to change theme changing hook
Switcher.js

code:
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<DarkModeSwitch
				style={{ marginBottom: "2rem" }}
				checked={darkSide}
				onChange={toggleDarkMode}
				size={30}
			/>
		</>
	);
}

*/

/* 
Steps 5: Add switcher component to the file where user will trigger
App.js

code:
import React from "react";
import Switcher from "./Components/Switcher";

function App() {
	return (
		<div>
			<div style={{ textAlign: "center" }}>
				<h1 className="text-green text-3xl font-bold">
					GeeksforGeeks
				</h1>
				<h3 className="text-black dark:text-white text-2xl">
					Adding Dark Mode in ReactJS using Tailwind CSS
				</h3>
			</div>
			<center>
				<Switcher />
				<div class="w-56 overflow-hidden bg-white
				rounded-lg border border-gray-200
				shadow-md dark:bg-gray-800 dark:border-gray-700">
					<img
						class="rounded-t-lg"
						src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png"
						alt="gfg"
					/>
					<div class="p-5">
						<a href="##">
							<h5 class="mb-2 text-2xl
							font-bold tracking-tight
							text-gray-900 dark:text-white">
								GeeksforGeeks
							</h5>
						</a>
						<p class="mb-3 font-normal text-gray-700
							dark:text-gray-400">
							Best coding website for
							developers in the world.
						</p>
					</div>
				</div>
			</center>
		</div>
	);
}

export default App;

*/
