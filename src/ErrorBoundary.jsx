import { Component } from "react"
import { Link, Redirect } from "react-router-dom"

export class ErrorBoundary extends Component {

	state = {
		hasError: false,
		redirect: false,
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidCatch(error, errorInfo) {
		console.log('ErrorBoundary caught an error', error, errorInfo)

		setTimeout(() => this.setState({ redirect: true }), 5000)
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/"/>
		}

		if (this.state.hasError) {
			return (
				<h2>
					Error!
					<br/>
					<Link to="/">Back to the home page</Link>
				</h2>
			)
		}

		return this.props.children
	}

}
