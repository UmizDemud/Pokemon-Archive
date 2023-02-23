import React, { useState } from 'react'
import { Meta, Move } from "../../assets/data/Skeleton";
import { typeToColor } from "../../assets/typeToColor";
import arrow from "../../assets/icons/basic_arrow_right.svg";

export const MoveItem = (props) => {
	const { move } = props;
	const [isOpen, setIsOpen] = useState(false);
	const color = typeToColor[move[Move.Type]];
	const effectChance = `${move[Move['Effect Chance']]}%`;

	return (
		<li className="move" key={move[0]}>
			<button
				className="move__header"
				type="button"
				onClick={() => setIsOpen(!isOpen)}
			>
				<img
						className="move__toggle"
						style={{transform: isOpen ? 'rotateZ(90deg)' : 'rotateZ(0)'}}
						src={arrow}
						alt="toggle item"
					/>
				<h4 style={{color}}>
					{move[Move.Name]}
				</h4>
			</button>
			{isOpen && (
				<div className="move__body">
					<div className="move__body--stats">
						{!!move[Move.Power] && (
							<p className="move__field">
								<b>Power:</b> <span>{move[Move.Power]}</span>
							</p>
						)}
						{!!move[Move.Accuracy] && (
							<p className="move__field">
								<b>Accuracy:</b> <span>{move[Move.Accuracy]}</span>
							</p>
						)}
						{!!move[Move['Damage Class']] && (
							<p className="move__field">
								<b>Damage Class:</b> <span>{move[Move['Damage Class']]}</span>
							</p>
						)}
						{!!move[Move.Target] && (
							<p className="move__field">
								<b>Target:</b> <span>{move[Move.Target]}</span>
							</p>
						)}
						{!!move[Move.Meta] && (
							<>
								{!!move[Move.Meta][Meta.Ailment] && (
									<p className="move__field">
										<b>Ailment:</b> <span>{move[Move.Meta][Meta.Ailment]}</span>
									</p>
								)}
								{!!move[Move.Meta][Meta.Category] && (
									<p className="move__field">
										<b>Category:</b> <span>{move[Move.Meta][Meta.Category]}</span>
									</p>
								)}
								{!!move[Move.Meta][Meta['Crit Rate']] && (
									<p className="move__field">
										<b>Crit Rate:</b> <span>{move[Move.Meta][Meta['Crit Rate']]} / 6</span>
									</p>
								)}
								{!!move[Move.Meta][Meta.Drain] && (
									<p className="move__field">
										<b>Drain:</b> <span>{move[Move.Meta][Meta.Drain]}</span>
									</p>
								)}
								{!!move[Move.Meta][Meta['Flinch Chance']] && (
									<p className="move__field">
										<b>Flinch Chance:</b> <span>{move[Move.Meta][Meta['Flinch Chance']]}</span>
									</p>
								)}
								{!!move[Move.Meta][Meta.Healing] && (
									<p className="move__field">
										<b>Healing:</b> <span>{move[Move.Meta][Meta.Healing]}</span>
									</p>
								)}
								{!!move[Move.Meta][Meta['Max Hits']] && (
									<p className="move__field">
										<b>Max Hits:</b> <span>{move[Move.Meta][Meta['Max Hits']]}</span>
									</p>
								)}
								{!!move[Move.Meta][Meta['Min Hits']] && (
									<p className="move__field">
										<b>Min Hits:</b> <span>{move[Move.Meta][Meta['Min Hits']]}</span>
									</p>
								)}
								{!!move[Move.Meta][Meta['Max Turns']] && (
									<p className="move__field">
										<b>Max Turns:</b> <span>{move[Move.Meta][Meta['Max Turns']]}</span>
									</p>
								)}
								{!!move[Move.Meta][Meta['Min Turns']] && (
									<p className="move__field">
										<b>Min Turns:</b> <span>{move[Move.Meta][Meta['Min Turns']]}</span>
									</p>
								)}
								{!!move[Move.Meta][Meta['Stat Chance']] && (
									<p className="move__field">
										<b>Stat Chance:</b> <span>{move[Move.Meta][Meta['Stat Chance']]}</span>
									</p>
								)}
							</>
						)}
					</div>
					<div className="move__body--desc">
						{!!move[Move.Flavor] && (
							<p className="move__flavor">{move[Move.Flavor]}</p>
						)}
						{!!move[Move.Description] && (
							<p className="move__desc">{move[Move.Description].replace('$effect_chance%', effectChance)}</p>
						)}
					</div>
				</div>
			)}
		</li>
	)
}
