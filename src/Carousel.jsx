import { Component } from "react"

export class Carousel extends Component {

	static defaultProps = {
		images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
	}

	state = {
		active: 0,
	}

	handleIndexClick(index, event) {
		this.setState({
			active: index,
		})
	}

	render() {
		let { active } = this.state
		let { images } = this.props

		return (
			<div className="carousel">
				<img src={images[active]} alt="animal"/>
				<div className="carousel-smaller">
					{images.map((photo, index) => (
						<img
							onClick={this.handleIndexClick.bind(this, index)}
							key={photo}
							src={photo}
							className={index === active ? 'active' : ''}
							alt="animal-thumbnail"
						/>
					))}
				</div>
			</div>
		)
	}
}
