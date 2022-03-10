import React from 'react'
import { render } from 'react-dom'
import './index.css'
import SearchParams from "./SearchParams"

const App = () => {
	return (
		<div>
			<h1>Adopt Me!</h1>
			<SearchParams/>
		</div>
	)
}

render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById('root'),
)
