import { Component, Fragment } from "react"
import { withRouter } from "react-router-dom"
import { Carousel } from "./Carousel"
import { ErrorBoundary } from "./ErrorBoundary"
import { ThemeContext } from "./ThemeContext"
import { Modal } from "./Modal"

class _Details extends Component {

	state = {
		loading: true,
		showModal: false,
	}

	async componentDidMount() {
		let id = this.props.match.params.id
		let res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
		let json = await res.json()

		this.setState({
			loading: false,
			...json.pets[0],
		})
	}

	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal })
	}

	adopt = () => {
		window.location = 'http://bit.ly/pet-adopt'
	}

	render() {
		if (this.state.loading) {
			return (
				<div className="details">
					<h2>Loading...</h2>
				</div>
			)
		}

		let { name, animal, breed, city, state, description, images } = this.state

		return (
			<div className="details">
				<Carousel images={images}/>
				<div>
					<h1>{name}</h1>
					<h2>{animal} - {breed} - {city}, {state}</h2>
					<ThemeContext.Consumer>
						{([theme]) => (
							<button
								onClick={this.toggleModal}
								style={{ backgroundColor: theme }}>Adopt {name}</button>
						)}
					</ThemeContext.Consumer>
					<p>{description}</p>
					{
						this.state.showModal
							? (
								<Modal>
									<h2>Would you like to adopt {name}?</h2>
									<div className="buttons">
										<ThemeContext.Consumer>
											{([theme]) => (
												<Fragment>
													<button
														style={{ backgroundColor: theme }}
														onClick={this.adopt}>Yes
													</button>
													<button
														style={{ backgroundColor: theme }}
														onClick={this.toggleModal}>No
													</button>
												</Fragment>
											)}
										</ThemeContext.Consumer>
									</div>
								</Modal>
							)
							: null
					}
				</div>
			</div>
		)
	}

}

const DetailsWithRouter = withRouter(_Details)

export const Details = () => {
	return (
		<ErrorBoundary>
			<DetailsWithRouter/>
		</ErrorBoundary>
	)
}
