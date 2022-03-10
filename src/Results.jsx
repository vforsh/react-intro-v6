import Pet from "./Pet"

export const Results = ({ pets }) => {
	return (
		<div className="search">{
			!pets.length
				? <h2>No pets found</h2>
				: pets.map((pet) => (
					<Pet
						name={pet.name}
						animal={pet.animal}
						breed={pet.breed}
						key={pet.id}
						id={pet.id}
						images={pet.images}
						location={'Candyland'}
					/>
				))
		}</div>
	)
}
