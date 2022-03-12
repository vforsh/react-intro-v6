import { useContext, useEffect, useState } from "react"
import { useBreedList } from "./use-breed-list"
import { Results } from "./Results"
import { ThemeContext } from "./ThemeContext"

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

export const SearchParams = () => {
	const [location, updateLocation] = useState("")
	const [animal, updateAnimal] = useState("")
	const [breed, updateBreed] = useState("")
	const [pets, setPets] = useState([])
	const [breeds] = useBreedList(animal)
	const [theme, setTheme] = useContext(ThemeContext)

	useEffect(async () => {
		requestPets()
	}, [])

	async function requestPets() {
		let res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)

		let json = await res.json()

		setPets(json.pets)
	}

	return (
		<div className="search-params">
			<form onSubmit={(e) => {
				e.preventDefault()
				requestPets()
			}}>
				<label htmlFor="location">
					Location
					<input
						id="location"
						value={location}
						placeholder="Location"
						onChange={(e) => updateLocation(e.target.value)}
					/>
				</label>
				<label htmlFor="animal">
					Animal
					<select
						id="animal"
						value={animal}
						onChange={(e) => updateAnimal(e.target.value)}
						onBlur={(e) => updateAnimal(e.target.value)}
					>
						<option/>
						{ANIMALS.map((animal) => (
							<option key={animal} value={animal}>
								{animal}
							</option>
						))}
					</select>
				</label>
				<label htmlFor="breed">
					Breed
					<select
						disabled={!breeds.length}
						id="breed"
						value={breed}
						onChange={(e) => updateBreed(e.target.value)}
						onBlur={(e) => updateBreed(e.target.value)}
					>
						<option/>
						{breeds.map((breed) => (
							<option key={breed} value={breed}>
								{breed}
							</option>
						))}
					</select>
				</label>
				<label htmlFor="theme">
					Theme
					<select name="theme"
					        id="theme"
					        value={theme}
					        onChange={e => setTheme(e.target.value)}
					        onBlur={e => setTheme(e.target.value)}
					>
						<option value="darkblue">Dark Blue</option>
						<option value="pink">Pink</option>
						<option value="peru">Peru</option>
						<option value="green">Green</option>
					</select>
				</label>
				<button style={{ backgroundColor: theme }}>Submit</button>
			</form>
			<Results pets={pets}/>
		</div>
	)
}
