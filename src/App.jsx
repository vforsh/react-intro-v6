import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import { StrictMode, useState } from "react"
import { render } from "react-dom"
import { SearchParams } from "./SearchParams"
import { Details } from "./Details"
import { ThemeContext } from "./ThemeContext"
import './style.css'

export const App = () => {
	const theme = useState('darkblue')

	return (
		<StrictMode>
			<ThemeContext.Provider value={theme}>
				<div>
					<Router>
						<Link to="/">
							<h1>Adopt Me!</h1>
						</Link>
						<Switch>
							<Route path="/details/:id">
								<Details/>
							</Route>
							<Route path="/">
								<SearchParams/>
							</Route>
						</Switch>
					</Router>
				</div>
			</ThemeContext.Provider>
		</StrictMode>
	)
}

render(<App/>, document.getElementById("root"))
