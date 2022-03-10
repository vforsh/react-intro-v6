import { render } from "react-dom"
import SearchParams from "./SearchParams"
import './style.css'
import { Details } from "./Details"
import { BrowserRouter as Router, Route } from "react-router-dom"

export const App = () => {
	return (
		<div>
			<h1>Adopt Me!</h1>
			<Router>
				<Route path="/details/:id">
					<Details/>
				</Route>
				<Route path="/">
					<SearchParams/>
				</Route>
			</Router>
		</div>
	)
}

render(<App/>, document.getElementById("root"))
