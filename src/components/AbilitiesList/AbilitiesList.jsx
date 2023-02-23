import { memo } from 'react'
import { Ability } from '../../assets/data/Skeleton';
import './AbilitiesList.css'

export const AbilitiesList = memo((props) => (
	<div className="abilities">
		<ul className="abilities__list">
			{props.abilities.map(ability => (
				<li key={ability[Ability.id]} className="ability">
					<h4 className="ability_title">{ability[Ability.Name]}</h4>
					<div className="ability__field">
						<p className="ability__value">
							{ability[Ability.Flavor]}
						</p>
						<p className="ability__desc">
							{ability[Ability.Description]}
						</p>
					</div>
					{ability[3] && (
						<div className="ability__field">
							<p className="ability__desc">
								{ability[Ability.Additional]}
							</p>
						</div>
					)}
				</li>
			))}
		</ul>
	</div>
));
