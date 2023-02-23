export const _abilities = [
  [
    1,
    'Stench',
    "This Pokémon's damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pokémon is first in the party.",
    'Has no effect in battle.',
    'Helps repel wild POKéMON.'
  ],
  [
    2,
    'Drizzle',
    "The weather changes to rain when this Pokémon enters battle and does not end unless replaced by another weather condition.\n\nIf multiple Pokémon with this ability, drought, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
    null,
    'Summons rain in battle.'
  ],
  [
    3,
    'Speed-boost',
    "This Pokémon's Speed rises one stage after each turn.",
    null,
    'Gradually boosts SPEED.'
  ],
  [
    4,
    'Battle-armor',
    'Moves cannot score critical hits against this Pokémon.\n\nThis ability functions identically to shell armor.',
    null,
    'Blocks critical hits.'
  ],
  [
    5,
    'Sturdy',
    'When this Pokémon is at full HP, any hit that would knock it out will instead leave it with 1 HP.  Regardless of its current HP, it is also immune to the one-hit KO moves: fissure, guillotine, horn drill, and sheer cold.\n\nIf this Pokémon is holding a focus sash, this ability takes precedence and the item will not be consumed.',
    'Does not prevent regular KOs from full HP.',
    'Negates 1-hit KO attacks.'
  ],
  [
    6,
    'Damp',
    'While this Pokémon is in battle, self destruct and explosion will fail and aftermath will not take effect.',
    null,
    'Prevents self-destruction.'
  ],
  [
    7,
    'Limber',
    'This Pokémon cannot be paralyzed.\n\nIf a Pokémon is paralyzed and acquires this ability, its paralysis is healed; this includes when regaining a lost ability upon leaving battle.',
    null,
    'Prevents paralysis.'
  ],
  [
    8,
    'Sand-veil',
    'During a sandstorm, this Pokémon has 1.25× its evasion, and it does not take sandstorm damage regardless of type.\n\nThe evasion bonus does not count as a stat modifier.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.',
    null,
    'Ups evasion in a sandstorm.'
  ],
  [
    9,
    'Static',
    "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed.\n\nPokémon that are immune to electric-type moves can still be paralyzed by this ability.\n\nOverworld: If the lead Pokémon has this ability, there is a 50% chance that encounters will be with an electric Pokémon, if applicable.",
    'Has no overworld effect.',
    'Paralyzes on contact.'
  ],
  [
    10,
    'Volt-absorb',
    "Whenever an electric-type move hits this Pokémon, it heals for 1/4 of its maximum HP, negating any other effect on it.\n\nThis ability will not take effect if this Pokémon is ground-type and thus immune to Electric moves.  Electric moves will ignore this Pokémon's substitute.\n\nThis effect includes non-damaging moves, i.e. thunder wave.",
    'Does not absorb non-damaging electric moves, i.e. thunder wave.',
    'Turns electricity into HP.'
  ],
  [
    11,
    'Water-absorb',
    "Whenever a water-type move hits this Pokémon, it heals for 1/4 of its maximum HP, negating any other effect on it.\n\nWater moves will ignore this Pokémon's substitute.",
    null,
    'Changes water into HP.'
  ],
  [
    12,
    'Oblivious',
    'This Pokémon cannot be infatuated and is immune to captivate.\n\nIf a Pokémon is infatuated and acquires this ability, its infatuation is cleared.',
    null,
    'Prevents attraction.'
  ],
  [
    13,
    'Cloud-nine',
    'While this Pokémon is in battle, weather can still be in play, but will not have any of its effects.\n\nThis ability functions identically to air lock.',
    null,
    'Negates weather effects.'
  ],
  [
    14,
    'Compound-eyes',
    "This Pokémon's moves have 1.3× their accuracy.\n\nThis ability has no effect on the one-hit KO moves (fissure, guillotine, horn drill, and sheer cold).\n\nOverworld: If the first Pokémon in the party has this ability, the chance of a wild Pokémon holding a particular item is raised from 50%, 5%, or 1% to 60%, 20%, or 5%, respectively.",
    'Has no overworld effect.',
    'Raises accuracy.'
  ],
  [
    15,
    'Insomnia',
    'This Pokémon cannot be asleep.\n\nThis causes rest to fail altogether.  If a Pokémon is asleep and acquires this ability, it will immediately wake up; this includes when regaining a lost ability upon leaving battle.\n\nThis ability functions identically to vital spirit in battle.',
    null,
    'Prevents sleep.'
  ],
  [
    16,
    'Color-change',
    "Whenever this Pokémon takes damage from a move, the Pokémon's type changes to match the move.\n\nIf the Pokémon has two types, both are overridden.  The Pokémon must directly take damage; for example, moves blocked by a substitute will not trigger this ability, nor will moves that deal damage indirectly, such as spikes.\n\nThis ability takes effect on only the last hit of a multiple-hit attack.\n\nIn Pokémon Colosseum and XD: Gale of Darkness, this ability does not take effect on Shadow-type moves.",
    'Triggers on every hit of multiple-hit moves.',
    'Changes type to foe’s move.'
  ],
  [
    17,
    'Immunity',
    'This Pokémon cannot be poisoned.  This includes bad poison.\n\nIf a Pokémon is poisoned and acquires this ability, its poison is healed; this includes when regaining a lost ability upon leaving battle.',
    null,
    'Prevents poisoning.'
  ],
  [
    18,
    'Flash-fire',
    "This Pokémon is immune to fire-type moves.  Once this Pokémon has been hit by a Fire move, its own Fire moves will inflict 1.5× as much damage until it leaves battle.\n\nThis ability has no effect while the Pokémon is frozen.  The Fire damage bonus is retained even if the Pokémon is frozen and thawed or the ability is lost or disabled.  Fire moves will ignore this Pokémon's substitute.  This ability takes effect even on non-damaging moves, i.e. will o wisp.",
    'will o wisp does not trigger this ability for Pokémon immune to burns.',
    'Powers up if hit by fire.'
  ],
  [
    19,
    'Shield-dust',
    "This Pokémon is immune to the extra effects of moves used against it.\n\nAn extra effect is a move's chance, listed as an \"effect chance\", to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.",
    null,
    'Prevents added effects.'
  ],
  [
    20,
    'Own-tempo',
    'This Pokémon cannot be confused.\n\nIf a Pokémon is confused and acquires this ability, its confusion will immediately be healed.',
    null,
    'Prevents confusion.'
  ],
  [
    21,
    'Suction-cups',
    'This Pokémon cannot be forced out of battle by moves such as whirlwind.\n\ndragon tail and circle throw still inflict damage against this Pokémon.\n\nOverworld: If the lead Pokémon has this ability, the success rate while fishing is increased.',
    'Has no overworld effect.',
    'Firmly anchors the body.'
  ],
  [
    22,
    'Intimidate',
    "When this Pokémon enters battle, the opponent's Attack is lowered by one stage.  In a double battle, both opponents are affected.\n\nThis ability also takes effect when acquired during a battle, but will not take effect again if lost and reobtained without leaving battle.\n\nThis ability has no effect on an opponent that has a substitute.\n\nOverworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
    'Has no overworld effect.',
    'Lowers the foe’s ATTACK.'
  ],
  [
    23,
    'Shadow-tag',
    'While this Pokémon is in battle, opposing Pokémon cannot flee or switch out.\n\nOther Pokémon with this ability are unaffected.  Pokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.',
    'Affects other Pokémon with this ability.',
    'Prevents the foe’s escape.'
  ],
  [
    24,
    'Rough-skin',
    "Whenever a move makes contact with this Pokémon, the move's user takes 1/8 of its maximum HP in damage.\n\nThis ability functions identically to iron barbs.",
    "Inflicts only 1/16 of the attacker's maximum HP in damage.",
    'Hurts to touch.'
  ],
  [
    25,
    'Wonder-guard',
    'This Pokémon is immune to damaging moves that are not super effective against it.\n\nMoves that inflict fixed damage, such as night shade or seismic toss, are considered super effective if their types are.  Damage not directly dealt by moves, such as damage from weather, a status ailment, or spikes, is not prevented.\n\nThis ability cannot be copied with role play or traded away with skill swap, but it can be copied with trace, disabled with gastro acid, or changed with worry seed.  This Pokémon can still use Role Play itself to lose this ability, but not Skill Swap.\n\nIf this Pokémon has a substitute, this ability will block moves as usual and any moves not blocked will react to the Substitute as usual.',
    'fire fang and moves that inflict typeless damage ignore this ability regardless of type.',
    '“Super effective” hits.'
  ],
  [
    26,
    'Levitate',
    'This Pokémon is immune to ground-type moves, spikes, toxic spikes, and arena trap.\n\nThis ability is disabled during gravity or ingrain, or while holding an iron ball.  This ability is not disabled during roost.',
    null,
    'Not hit by GROUND attacks.'
  ],
  [
    27,
    'Effect-spore',
    "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed, poisoned, or put to sleep, chosen at random.\n\nNothing is done to compensate if the move's user is immune to one of these ailments; there is simply a lower chance that the move's user will be affected.",
    null,
    'Leaves spores on contact.'
  ],
  [
    28,
    'Synchronize',
    "Whenever this Pokémon is burned, paralyzed, or poisoned, the Pokémon who gave this Pokémon that ailment is also given the ailment.\n\nThis ability passes back bad poison when this Pokémon is badly poisoned.  This ability cannot pass on a status ailment that the Pokémon did not directly receive from another Pokémon, such as the poison from toxic spikes or the burn from a flame orb.\n\nOverworld: If the lead Pokémon has this ability, wild Pokémon have a 50% chance of having the lead Pokémon's nature, and a 50% chance of being given a random nature as usual, including the lead Pokémon's nature.  This does not work on Pokémon received outside of battle or roaming legendaries.",
    'Has no overworld effect.',
    'Passes on status problems.'
  ],
  [
    29,
    'Clear-body',
    'This Pokémon cannot have its stats lowered by other Pokémon.\n\nThis ability does not prevent any stat losses other than stat modifiers, such as the Speed cut from paralysis.  This Pokémon can still be passed negative stat modifiers through guard swap, heart swap, or power swap.\n\nThis ability functions identically to white smoke in battle.',
    null,
    'Prevents ability reduction.'
  ],
  [
    30,
    'Natural-cure',
    'This Pokémon is cured of any major status ailment when it is switched out for another Pokémon.\n\nIf this ability is acquired during battle, the Pokémon is cured upon leaving battle before losing the temporary ability.',
    null,
    'Heals upon switching out.'
  ],
  [
    31,
    'Lightning-rod',
    "All other Pokémon's single-target electric-type moves are redirected to this Pokémon if it is an eligible target.  Other Pokémon's Electric moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it.\n\nIf the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability.\n\nIf the Pokémon is a ground-type and thus immune to Electric moves, its immunity prevents the Special Attack boost.",
    'Has no overworld effect.',
    'Draws electrical moves.'
  ],
  [
    32,
    'Serene-grace',
    "This Pokémon's moves have twice their usual effect chance.\n\nAn effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, flamethrower's chance of burning the target is doubled, but protect's chance of success and air cutter's increased critical hit rate are unaffected.\n\nsecret power is unaffected.",
    null,
    'Promotes added effects.'
  ],
  [
    33,
    'Swift-swim',
    "This Pokémon's Speed is doubled during rain.\n\nThis bonus does not count as a stat modifier.",
    null,
    'Raises SPEED in rain.'
  ],
  [
    34,
    'Chlorophyll',
    "This Pokémon's Speed is doubled during strong sunlight.\n\nThis bonus does not count as a stat modifier.",
    null,
    'Raises SPEED in sunshine.'
  ],
  [
    35,
    'Illuminate',
    'Overworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.\n\nThis ability has no effect in battle.',
    null,
    'Encounter rate increases.'
  ],
  [
    36,
    'Trace',
    "When this Pokémon enters battle, it copies a random opponent's ability.\n\nThis ability cannot copy flower gift, forecast, illusion, imposter, multitype, trace, wonder guard, or zen mode.",
    'Can copy flower gift and wonder guard.',
    'Copies special ability.'
  ],
  [
    37,
    'Huge-power',
    "This Pokémon's Attack is doubled while in battle.\n\nThis bonus does not count as a stat modifier.\n\nThis ability functions identically to pure power.",
    null,
    'Raises ATTACK.'
  ],
  [
    38,
    'Poison-point',
    "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
    null,
    'Poisons foe on contact.'
  ],
  [
    39,
    'Inner-focus',
    'This Pokémon cannot flinch.',
    null,
    'Prevents flinching.'
  ],
  [
    40,
    'Magma-armor',
    'This Pokémon cannot be frozen.\n\nIf a Pokémon is frozen and acquires this ability, it will immediately thaw out; this includes when regaining a lost ability upon leaving battle.\n\nOverworld: If any Pokémon in the party has this ability, each egg in the party has its hatch counter decreased by 2 (rather than 1) each step cycle, making eggs hatch roughly twice as quickly.  This effect does not stack if multiple Pokémon have this ability or flame body.',
    'Has no overworld effect.',
    'Prevents freezing.'
  ],
  [
    41,
    'Water-veil',
    'This Pokémon cannot be burned.\n\nIf a Pokémon is burned and acquires this ability, its burn is healed; this includes when regaining a lost ability upon leaving battle.',
    null,
    'Prevents burns.'
  ],
  [
    42,
    'Magnet-pull',
    'While this Pokémon is in battle, opposing steel-type Pokémon cannot flee or switch out.\n\nPokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.\n\nOverworld: If the lead Pokémon has this ability, Steel-type Pokémon have a higher encounter rate.',
    'Has no overworld effect.',
    'Traps STEEL-type POKéMON.'
  ],
  [
    43,
    'Soundproof',
    'This Pokémon is immune to moves flagged as being sound-based.\n\nheal bell is unaffected.  uproar still prevents this Pokémon from sleeping.  This Pokémon can still receive a Perish Song counter through baton pass, and will retain a Perish Song counter if it acquires this ability after Perish Song is used.\n\nhowl, roar of time, sonic boom, and yawn are not flagged as sound-based.',
    'Prevents heal bell from curing the Pokémon, whether or not it is in battle.',
    'Avoids sound-based moves.'
  ],
  [
    44,
    'Rain-dish',
    'This Pokémon heals for 1/16 of its maximum HP after each turn during rain.',
    null,
    'Slight HP recovery in rain.'
  ],
  [
    45,
    'Sand-stream',
    "The weather changes to a sandstorm when this Pokémon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pokémon with this ability, drizzle, drought, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
    null,
    'Summons a sandstorm.'
  ],
  [
    46,
    'Pressure',
    "Moves targetting this Pokémon use one extra PP.\n\nThis ability stacks if multiple targets have it.  This ability still affects moves that fail or miss.  This ability does not affect ally moves that target either the entire field or just its side, nor this Pokémon's self-targetted moves; it does, however, affect single-targetted ally moves aimed at this Pokémon, ally moves that target all other Pokémon, and opponents' moves that target the entire field.  If this ability raises a move's PP cost above its remaining PP, it will use all remaining PP.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nOverworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
    'Has no overworld effect.',
    'Raises foe’s PP usage.'
  ],
  [
    47,
    'Thick-fat',
    'This Pokémon takes half as much damage from fire- and ice-type moves.',
    null,
    'Heat-and-cold protection.'
  ],
  [
    48,
    'Early-bird',
    "This Pokémon's remaining sleep turn count falls by 2 rather than 1.\n\nIf this Pokémon's sleep counter is at 1, it will fall to 0 and then the Pokémon will wake up.",
    null,
    'Awakens quickly from sleep.'
  ],
  [
    49,
    'Flame-body',
    "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being burned.\n\nOverworld: If any Pokémon in the party has this ability, each egg in the party has its hatch counter decreased by 2 (rather than 1) each step cycle, making eggs hatch roughly twice as quickly.  This effect does not stack if multiple Pokémon have this ability or magma armor.",
    'Has no overworld effect.',
    'Burns the foe on contact.'
  ],
  [
    50,
    'Run-away',
    'This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.',
    null,
    'Makes escaping easier.'
  ],
  [
    51,
    'Keen-eye',
    "This Pokémon cannot have its accuracy lowered.\n\nThis ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.\n\nOverworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
    'Has no overworld effect.',
    'Prevents loss of accuracy.'
  ],
  [
    52,
    'Hyper-cutter',
    "This Pokémon's Attack cannot be lowered by other Pokémon.\n\nThis ability does not prevent any Attack losses other than stat modifiers, such as the Attack cut from a burn.  This Pokémon can still be passed negative Attack modifiers through heart swap or power swap.",
    'Has no overworld effect.',
    'Prevents ATTACK reduction.'
  ],
  [
    53,
    'Pickup',
    "At the end of each turn, if another Pokémon consumed or Flung a held item that turn, this Pokémon picks up the item if it is not already holding one.  After each battle, this Pokémon has a 10% chance of picking up an item if it is not already holding one.\n\nThe air balloon and eject button cannot be picked up.\n\nThe items that may be found vary by game, and, since Pokémon Emerald, by the Pokémon's level.  This ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
    'Has no effect in battle.',
    'May pick up items.'
  ],
  [
    54,
    'Truant',
    'Every second turn on which this Pokémon should attempt to use a move, it will instead do nothing ("loaf around").\n\nLoafing around interrupts moves that take multiple turns the same way paralysis, flinching, etc do.  Most such moves, for example bide or rollout, are simply cut off upon loafing around.  Attacks with a recharge turn, such as hyper beam, do not have to recharge; attacks with a preparation turn, such as fly, do not end up being used.  Moves that are forced over multiple turns and keep going through failure, such as outrage, uproar, or any move forced by encore, keep going as usual.\n\nIf this Pokémon is confused, its confusion is not checked when loafing around; the Pokémon cannot hurt itself, and its confusion does not end or come closer to ending.\n\nIf this Pokémon attempts to move but fails, e.g. because of paralysis or gravity, it still counts as having moved and will loaf around the next turn.  If it does not attempt to move, e.g. because it is asleep or frozen, whatever it would have done will be postponed until its next attempt; that is, it will either loaf around or move as usual, depending on what it last did.\n\nThis ability cannot be changed with worry seed, but it can be disabled with gastro acid, changed with role play, or traded away with skill swap.',
    null,
    'Moves only every two turns.'
  ],
  [
    55,
    'Hustle',
    "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.\n\nSpecial moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.\n\nOverworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
    'Has no overworld effect.',
    'Trades accuracy for power.'
  ],
  [
    56,
    'Cute-charm',
    "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated.\n\nOverworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
    'Has no overworld effect.',
    'Infatuates on contact.'
  ],
  [
    57,
    'Plus',
    'This Pokémon has 1.5× its Special Attack if any friendly Pokémon has plus or minus.\n\nThis bonus does not count as a stat modifier.  If either ability is disabled by gastro acid, both lose their effect.',
    'Powers up only when paired with minus.',
    'Powers up with MINUS.'
  ],
  [
    58,
    'Minus',
    'This Pokémon has 1.5× its Special Attack if any friendly Pokémon has plus or minus.\n\nThis bonus does not count as a stat modifier.  If either ability is disabled by gastro acid, both lose their effect.',
    'Powers up only when paired with plus.',
    'Powers up with PLUS.'
  ],
  [
    59,
    'Forecast',
    "During rain, strong sunlight, or hail, this Pokémon's type changes to water, fire, or ice, respectively, and its form changes to match.\n\nThis ability has no effect for any Pokémon other than castform.\n\nIf the weather ends or becomes anything that does not trigger this ability, or a Pokémon with air lock or cloud nine enters battle, this Pokémon's type and form revert to their default.  If this ability is lost or disabled, this Pokémon cannot change its current type and form until it regains its ability.",
    null,
    'Changes with the weather.'
  ],
  [
    60,
    'Sticky-hold',
    "This Pokémon's hold item cannot be removed by other Pokémon.\n\nDamaging moves that would remove this Pokémon's item can still inflict damage against this Pokémon, e.g. knock off or pluck.  This Pokémon can still use moves that involve the loss of its own item, e.g. fling or trick.\n\nOverworld: If the lead Pokémon has this ability, the encounter rate while fishing is increased.",
    'Has no overworld effect.',
    'Prevents item theft.'
  ],
  [
    61,
    'Shed-skin',
    'After each turn, this Pokémon has a 33% of being cured of any major status ailment.',
    'Chance of taking effect is 30%.',
    'Heals the body by shedding.'
  ],
  [
    62,
    'Guts',
    'Whenever this Pokémon is asleep, burned, paralyzed, or poisoned, it has 1.5× its Attack.  This Pokémon is not affected by the usual Attack cut from a burn.\n\nThis bonus does not count as a stat modifier.',
    'Does not take effect during sleep.',
    'Ups ATTACK if suffering.'
  ],
  [
    63,
    'Marvel-scale',
    'Whenever this Pokémon has a major status ailment, it has 1.5× its Defense.\n\nThis bonus does not count as a stat modifier.',
    null,
    'Ups DEFENSE if suffering.'
  ],
  [
    64,
    'Liquid-ooze',
    'Whenever a Pokémon would heal after hitting this Pokémon with a leeching move like absorb, it instead loses as many HP as it would usually gain.\n\ndream eater is unaffected.',
    null,
    'Draining causes injury.'
  ],
  [
    65,
    'Overgrow',
    'When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.',
    null,
    'Ups GRASS moves in a pinch.'
  ],
  [
    66,
    'Blaze',
    'When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.',
    null,
    'Ups FIRE moves in a pinch.'
  ],
  [
    67,
    'Torrent',
    'When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.',
    null,
    'Ups WATER moves in a pinch.'
  ],
  [
    68,
    'Swarm',
    'When this Pokémon has 1/3 or less of its HP remaining, its bug-type moves inflict 1.5× as much regular damage.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is increased.',
    'Has no overworld effect.',
    'Ups BUG moves in a pinch.'
  ],
  [
    69,
    'Rock-head',
    "This Pokémon does not receive recoil damage from its recoil moves.\n\nstruggle's recoil is unaffected.  This ability does not prevent crash damage from missing with jump kick or high jump kick.",
    null,
    'Protects the Pokémon\nfrom recoil damage.'
  ],
  [
    70,
    'Drought',
    "The weather changes to strong sunlight when this Pokémon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pokémon with this ability, drizzle, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
    null,
    'Summons sunlight in battle.'
  ],
  [
    71,
    'Arena-trap',
    'While this Pokémon is in battle, opposing Pokémon cannot flee or switch out.  flying-type Pokémon and Pokémon in the air, e.g. due to levitate or magnet rise, are unaffected.\n\nPokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.',
    'Has no overworld effect.',
    'Prevents fleeing.'
  ],
  [
    72,
    'Vital-spirit',
    'This Pokémon cannot be asleep.\n\nThis causes rest to fail altogether.  If a Pokémon is asleep and acquires this ability, it will immediately wake up; this includes when regaining a lost ability upon leaving battle.\n\nThis ability functions identically to insomnia in battle.\n\nOverworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.',
    'Has no overworld effect.',
    'Prevents sleep.'
  ],
  [
    73,
    'White-smoke',
    'This Pokémon cannot have its stats lowered by other Pokémon.\n\nThis ability does not prevent any stat losses other than stat modifiers, such as the Speed cut from paralysis; nor self-inflicted stat drops, such as the Special Attack drop from overheat; nor opponent-triggered stat boosts, such as the Attack boost from swagger.  This Pokémon can still be passed negative stat modifiers through guard swap, heart swap, or power swap.\n\nThis ability functions identically to clear body in battle.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved.',
    'Has no overworld effect.',
    'Prevents ability reduction.'
  ],
  [
    74,
    'Pure-power',
    "This Pokémon's Attack is doubled in battle.\n\nThis bonus does not count as a stat modifier.\n\nThis ability functions identically to huge power.",
    null,
    'Raises ATTACK.'
  ],
  [
    75,
    'Shell-armor',
    'Moves cannot score critical hits against this Pokémon.\n\nThis ability functions identically to battle armor.',
    null,
    'Blocks critical hits.'
  ],
  [
    76,
    'Air-lock',
    'While this Pokémon is in battle, weather can still be in play, but will not have any of its effects.\n\nThis ability functions identically to cloud nine.',
    null,
    'Negates weather effects.'
  ],
  [
    77,
    'Tangled-feet',
    'When this Pokémon is confused, it has twice its evasion.',
    null,
    'Raises evasion if the\nPokémon is confused.'
  ],
  [
    78,
    'Motor-drive',
    "Whenever an electric-type move hits this Pokémon, its Speed rises one stage, negating any other effect on it.\n\nThis ability will not take effect if this Pokémon is immune to Electric moves.  Electric moves will ignore this Pokémon's substitute.\n\nThis effect includes non-damaging moves, i.e. thunder wave.",
    null,
    'Raises Speed if hit by an\nElectric-type move.'
  ],
  [
    79,
    'Rivalry',
    'This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.\n\nIf either Pokémon is genderless, damage is unaffected.',
    null,
    'Raises Attack if the foe\nis of the same gender.'
  ],
  [
    80,
    'Steadfast',
    'Whenever this Pokémon flinches, its Speed rises one stage.',
    null,
    'Raises Speed each time\nthe Pokémon flinches.'
  ],
  [
    81,
    'Snow-cloak',
    'During hail, this Pokémon has 1.25× its evasion, and it does not take hail damage regardless of type.\n\nThe evasion bonus does not count as a stat modifier.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved in snow.',
    null,
    'Raises evasion in a\nhailstorm.'
  ],
  [
    82,
    'Gluttony',
    "This Pokémon eats any held Berry triggered by low HP when it falls below 50% of its HP, regardless of the Berry's usual threshold.",
    null,
    'Encourages the early use\nof a held Berry.'
  ],
  [
    83,
    'Anger-point',
    'Whenever this Pokémon receives a critical hit, its Attack rises to the maximum of 6 stages.\n\nThis ability will still take effect if the critical hit is received by a substitute.',
    null,
    'Raises Attack upon taking\na critical hit.'
  ],
  [
    84,
    'Unburden',
    'When this Pokémon uses or loses its held item, its Speed is doubled.  If it gains another item or leaves battle, this bonus is lost.\n\nThis includes when the Pokémon drops its item because of knock off.  This bonus does not count as a stat modifier.  There is no notification when this ability takes effect.',
    null,
    'Raises Speed if a held\nitem is used.'
  ],
  [
    85,
    'Heatproof',
    'This Pokémon takes half as much damage from fire-type moves and burns.',
    null,
    'Weakens the power of\nFire-type moves.'
  ],
  [
    86,
    'Simple',
    "Each stage of this Pokémon's stat modifiers acts as two stages.  These doubled stages are still limited to a minimum of -6 and a maximum of 6.\n\nThis Pokémon can still accumulate less than -3 or more than 3 stages of stat modifiers, even though the extra ones have no effect after doubling.",
    null,
    'The Pokémon is prone to\nwild stat changes.'
  ],
  [
    87,
    'Dry-skin',
    'This Pokémon takes 1/8 of its maximum HP in damage after each turn during strong sunlight, but it heals for 1/8 of its HP each turn during rain.  This Pokémon takes 1.25× as much damage from fire-type moves, but whenever a water move hits it, it heals for 1/4 its maximum HP instead.',
    null,
    'Reduces HP if it is hot.\nWater restores HP.'
  ],
  [
    88,
    'Download',
    "When this Pokémon enters battle, its Attack or Special Attack, whichever corresponds to its opponents' weaker total defensive stat, rises one stage.  In the event of a tie, Special Attack is raised.\n\nThis ability also takes effect when acquired during a battle.",
    null,
    'Adjusts power according\nto the foe’s ability.'
  ],
  [
    89,
    'Iron-fist',
    'Moves flagged as being punch-based have 1.2× their base power for this Pokémon.\n\nsucker punch is not flagged as punch-based; its original, Japanese name only means "surprise attack".',
    null,
    'Boosts the power of\npunching moves.'
  ],
  [
    90,
    'Poison-heal',
    'If this Pokémon is poisoned, it will heal for 1/8 of its maximum HP after each turn rather than taking damage.  This includes bad poison.',
    'Poison still damages the Pokémon outside of battle.',
    'Restores HP if the\nPokémon is poisoned.'
  ],
  [
    91,
    'Adaptability',
    'This Pokémon inflicts twice as much damage with moves whose types match its own, rather than the usual same-type attack bonus of 1.5×.',
    null,
    'Powers up moves of the\nsame type.'
  ],
  [
    92,
    'Skill-link',
    "This Pokémon always hits five times with two-to-five-hit moves, such as icicle spear.  It also bypasses the accuracy checks on triple kick's second and third hits.",
    'triple kick is unaffected.',
    'Increases the frequency\nof multi-strike moves.'
  ],
  [
    93,
    'Hydration',
    'This Pokémon is cured of any major status ailment after each turn during rain.',
    null,
    'Heals status problems if\nit is raining.'
  ],
  [
    94,
    'Solar-power',
    'During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.',
    null,
    'Boosts Sp. Atk, but\nlowers HP in sunshine.'
  ],
  [
    95,
    'Quick-feet',
    'Whenever this Pokémon has a major status ailment, it has 1.5× its Speed.  This Pokémon is not affected by the usual Speed cut from paralysis.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved.',
    null,
    'Boosts Speed if there is a\nstatus problem.'
  ],
  [
    96,
    'Normalize',
    "This Pokémon's moves all act as if they were normal-type.\n\nMoves that inflict typeless damage do so as usual.  Moves of variable type, such as hidden power, are affected.  They otherwise work as usual, however; weather ball, for example, is always forced to be Normal, but it still has doubled power and looks different during weather.\n\nAs thunder wave is prevented by immunities, unlike most non-damaging moves, it does not affect ghost-type Pokémon under the effect of this ability.",
    null,
    'All the Pokémon’s moves\nbecome the Normal type.'
  ],
  [
    97,
    'Sniper',
    'This Pokémon inflicts triple damage with critical hits, rather than the usual double damage.',
    null,
    'Powers up moves if they\nbecome critical hits.'
  ],
  [
    98,
    'Magic-guard',
    "This Pokémon is immune to damage not directly caused by a move.\n\nFor example, this Pokémon takes no damage from from weather, recoil, status ailments, or spikes, but it still suffers from the Attack cut when burned, and a life orb will still power up this Pokémon's moves without damaging it.  Anything that directly depends on such damage will also not happen; for example, leech seed will neither hurt this Pokémon nor heal the opponent, and Pokémon with a jaboca berry or rowap berry will not consume the berry when hit by this Pokémon.\n\nThe following are unaffected: struggle, pain split (whether used by or against this Pokémon), belly drum, substitute, curse, moves that knock the user out, and damage from confusion.\n\nThis Pokémon will neither lose nor regain HP if it drains HP from a Pokémon with liquid ooze.\n\nIf this Pokémon is badly poisoned, the poison counter is still increased each turn; if the Pokémon loses this ability, it will begin taking as much damage as it would be if it had been taking increasing damage each turn.",
    'Paralysis cannot prevent the Pokémon from moving, though the Speed cut is unaffected.  Poison still damages the Pokémon outside of battle.',
    'The Pokémon only takes\ndamage from attacks.'
  ],
  [
    99,
    'No-guard',
    'Moves used by or against this Pokémon never miss.\n\nOne-hit KO moves are unaffected.  Moves affected by this ability can hit Pokémon during the preparation turn of moves like dig or fly.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.',
    'Due to a glitch, moves affected by this ability have a (100 - accuracy)% chance to hit through detect or protect.',
    'Ensures the Pokémon and\nits foe’s attacks land.'
  ],
  [
    100,
    'Stall',
    'This Pokémon moves last within its priority bracket.\n\nMultiple Pokémon with this ability move in order of Speed amongst themselves.\n\nThe full incense and lagging tail take precedence over this ability; that is, Pokémon with these items move after Pokémon with this ability.  Pokémon with both this ability and one of these items are delayed as much as if they had only the item.\n\nThis ability works as usual during trick room: Pokémon with this ability will move in reverse order of Speed after Pokémon without it.',
    null,
    'The Pokémon moves after\neven slower foes.'
  ],
  [
    101,
    'Technician',
    "This Pokémon's moves have 1.5× their power if their base power is 60 or less.\n\nThis includes moves of variable power, such as hidden power and magnitude, when their power is 60 or less.  helping hand's power boost is taken into account for any move, as is defense curl's power boost for rollout.",
    'struggle is unaffected.  helping hand and defense curl are not taken into account.',
    'Powers up the Pokémon’s\nweaker moves.'
  ],
  [
    102,
    'Leaf-guard',
    'This Pokémon cannot be given a major status ailment during strong sunlight.\n\nThis ability does not heal prior status ailments.  rest will fail altogether with this ability in effect.  yawn will immediately fail if used on this Pokémon during strong sunlight, and an already-used Yawn will fail if the weather turns to strong sunlight in the meantime.',
    'rest works as usual during strong sunlight.',
    'Prevents status problems\nin sunny weather.'
  ],
  [
    103,
    'Klutz',
    'In battle, this Pokémon cannot use its held item, nor will the item have any passive effect on the battle, positive or negative.  This Pokémon also cannot use fling.\n\nThe Speed cut from the iron ball and the effort items (the macho brace, power weight, power bracer, power belt, power lens, power band, and power anklet) is unaffected.  Items that do not directly affect the battle, such as the exp share, the amulet coin, or the soothe bell, work as usual.  All held items work as usual out of battle.\n\nOther moves that use the held item, such as natural gift and switcheroo, work as usual.',
    'fling can be used as usual.',
    'The Pokémon can’t use\nany held items.'
  ],
  [
    104,
    'Mold-breaker',
    "This Pokémon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pokémon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pokémon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pokémon's moves can paralyze a Pokémon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pokémon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to teravolt and turboblaze.",
    null,
    'Moves can be used\nregardless of abilities.'
  ],
  [
    105,
    'Super-luck',
    "This Pokémon's moves have critical hit rates one stage higher than normal.",
    null,
    'Heightens the critical-hit\nratios of moves.'
  ],
  [
    106,
    'Aftermath',
    "When this Pokémon is knocked out by a move that makes contact, the move's user takes 1/4 its maximum HP in damage.",
    null,
    'Damages the foe landing\nthe finishing hit.'
  ],
  [
    107,
    'Anticipation',
    'When this Pokémon enters battle, if one of its opponents has a move that is super effective against it, self destruct, explosion, or a one-hit knockout move, all participating trainers are notified.\n\nThe move itself is not revealed; only that there is such a move.  Moves that inflict typeless damage, such as future sight, and moves of variable type, such as hidden power, count as their listed types.  counter, metal burst, mirror coat, and one-hit KO moves to which this Pokémon is immune do not trigger this ability.',
    null,
    'Senses the foe’s\ndangerous moves.'
  ],
  [
    108,
    'Forewarn',
    'When this Pokémon enters battle, it reveals the move with the highest base power known by any opposing Pokémon to all participating trainers.\n\nIn the event of a tie, one is chosen at random.\n\nMoves without a listed base power are assigned one as follows:\n\nPower | Moves\n----: | -----\n  160 | One-hit KO moves: fissure, guillotine, horn drill, and sheer cold\n  120 | Counter moves: counter, metal burst, and mirror coat\n   80 | Variable power or set damage: crush grip, dragon rage, electro ball, endeavor, final gambit, flail, frustration, grass knot, gyro ball, heat crash, heavy slam, hidden power, low kick, natural gift, night shade, psywave, return, reversal, seismic toss, sonic boom, trump card, and wring out\n    0 | Any such move not listed\n',
    null,
    'Determines what moves\nthe foe has.'
  ],
  [
    109,
    'Unaware',
    "This Pokémon ignores other Pokémon's stat modifiers for the purposes of damage and accuracy calculation.\n\nEffectively, this affects modifiers of every stat except Speed.\n\nThe power of punishment and stored power is calculated as usual.  When this Pokémon hurts itself in confusion, its stat modifiers affect damage as usual.",
    null,
    'Ignores any change in\nability by the foe.'
  ],
  [
    110,
    'Tinted-lens',
    'This Pokémon deals twice as much damage with moves that are not very effective against the target.',
    null,
    'Powers up “not very\neffective” moves.'
  ],
  [
    111,
    'Filter',
    'This Pokémon takes 0.75× as much damage from moves that are super effective against it.\n\nThis ability functions identically to solid rock.',
    null,
    'Powers down super­\neffective moves.'
  ],
  [
    112,
    'Slow-start',
    "This Pokémon's Attack and Speed are halved for five turns upon entering battle.\n\nThis ability also takes effect when acquired during battle.  If this Pokémon loses its ability before the five turns are up, its Attack and Speed return to normal; if it then regains this ability without leaving battle, its Attack and Speed are halved again, but the counter keeps counting from where it was.",
    null,
    'Temporarily halves Attack\nand Speed.'
  ],
  [
    113,
    'Scrappy',
    "This Pokémon ignores ghost-type Pokémon's immunity to normal- and fighting-type moves.\n\nGhost Pokémon's other types affect damage as usual.",
    null,
    'Enables moves to hit\nGhost-type foes.'
  ],
  [
    114,
    'Storm-drain',
    "All other Pokémon's single-target water-type moves are redirected to this Pokémon, if it is an eligible target.  Other Pokémon's Water moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it.\n\nIf the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability.",
    'Redirects water moves without negating them or granting any Special Attack boost.  Does not redirect hidden power.',
    'The Pokémon draws in all\nWater-type moves.'
  ],
  [
    115,
    'Ice-body',
    'This Pokémon heals for 1/16 of its maximum HP after each turn during hail, and it does not take hail damage regardless of type.',
    null,
    'The Pokémon regains HP in\na hailstorm.'
  ],
  [
    116,
    'Solid-rock',
    'This Pokémon takes 0.75× as much damage from moves that are super effective against it.\n\nThis ability functions identically to filter.',
    null,
    'Reduces damage from\nsupereffective attacks.'
  ],
  [
    117,
    'Snow-warning',
    "The weather changes to hail when this Pokémon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pokémon with this ability, drizzle, drought, or sand stream are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
    null,
    'The Pokémon summons a\nhailstorm in battle.'
  ],
  [
    118,
    'Honey-gather',
    'This Pokémon has a chance of picking up honey after each battle.  This chance starts at 5% and rises another 5% after every tenth level: 5% from level 1–10, 10% from 11–20, and so on, up to 50% from 91–100.\n\nThis ability is checked after the battle ends, at which point any temporary ability changes have worn off.',
    null,
    'The Pokémon may gather\nHoney from somewhere.'
  ],
  [
    119,
    'Frisk',
    "When this Pokémon enters battle, it reveals an opposing Pokémon's held item to all participating trainers.\n\nIn a double battle, if one opponent has an item, this Pokémon will Frisk that Pokémon; if both have an item, it will Frisk one at random.",
    null,
    'The Pokémon can check\nthe foe’s held item.'
  ],
  [
    120,
    'Reckless',
    "This Pokémon's recoil moves and crash moves have 1.2× their base power.\n\nstruggle is unaffected.\n\nThe \"crash moves\" are the moves that damage the user upon missing: jump kick and high jump kick.",
    null,
    'Powers up moves that\nhave recoil damage.'
  ],
  [
    121,
    'Multitype',
    "If this Pokémon is holding an elemental Plate, its type and form change to match the Plate.\n\nThis Pokémon's held item, whether or not it is a Plate, cannot be taken by covet or thief, nor removed by knock off, nor traded by switcheroo or trick.  Covet, Thief, and Knock Off still inflict damage against this Pokémon.  Unlike with sticky hold, this Pokémon cannot use fling, Switcheroo, or Trick to lose its item itself, nor gain an item through Switcheroo or Trick if it does not have one.\n\nThis ability has no effect for any Pokémon other than arceus.  This ability cannot be traded with skill swap, nor copied with role play or trace, nor disabled with gastro acid, nor changed with worry seed.  This Pokémon cannot use Skill Swap or Role Play to lose its ability itself.  mold breaker cannot ignore this ability.\n\nIf a Pokémon Transforms into an Arceus with this ability, it will Transform into Arceus's default, normal-type form.  If the Transforming Pokémon is holding a Plate, this ability will then activate and change the Pokémon into the corresponding form.",
    null,
    'Changes type to match\nthe held Plate.'
  ],
  [
    122,
    'Flower-gift',
    "Friendly Pokémon have 1.5× their Attack and Special Defense during strong sunlight if any friendly Pokémon has this ability.\n\nUnlike forecast, multitype, and zen mode, this ability is not tied to its Pokémon's form change; cherrim will switch between its forms even if it loses this ability.  As such, this ability also works if obtained by a Pokémon other than Cherrim.",
    null,
    'Powers up party Pokémon\nwhen it is sunny.'
  ],
  [
    123,
    'Bad-dreams',
    'Opposing Pokémon take 1/8 of their maximum HP in damage after each turn while they are asleep.',
    null,
    'Reduces a sleeping foe’s\nHP.'
  ],
  [
    124,
    'Pickpocket',
    "Whenever a move makes contact with this Pokémon, if it does not have a held item, it steals the attacker's held item.\n\nThis Pokémon cannot steal upon being knocked out.  It can steal if the attacker has a substitute, but cannot steal when its own Substitute is hit.  If a move hits multiple times, only the last hit triggers this ability.  If this Pokémon is wild, it cannot steal from a trained Pokémon.",
    null,
    'Steals an item when hit\nby another Pokémon.'
  ],
  [
    125,
    'Sheer-force',
    "This Pokémon's moves with extra effects have 1.3× their power, but lose their extra effects.\n\nAn effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect. For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.\n\nMoves that lower the user's stats are unaffected.",
    null,
    'Removes added effects to\nincrease move damage.'
  ],
  [
    126,
    'Contrary',
    "Whenever this Pokémon's stats would be raised, they are instead lowered by the same amount, and vice versa.",
    null,
    'Makes stat changes have\nan opposite effect.'
  ],
  [
    127,
    'Unnerve',
    "Opposing Pokémon cannot eat held Berries while this Pokémon is in battle.\n\nAffected Pokémon can still use bug bite or pluck to eat a target's Berry.",
    null,
    'Makes the foe nervous and\nunable to eat Berries.'
  ],
  [
    128,
    'Defiant',
    "When any of this Pokémon's stats are lowered, its Attack rises by two stages.\n\nIf multiple stats are lowered at once, this ability takes effect with each stat lowered.",
    null,
    'When its stats are lowered\nits Attack increases.'
  ],
  [
    129,
    'Defeatist',
    "This Pokémon's Attack and Special Attack are halved when it has half its HP or less.",
    null,
    'Lowers stats when HP\nbecomes half or less.'
  ],
  [
    130,
    'Cursed-body',
    'Moves that hit this Pokémon have a 30% chance of being Disabled afterward.',
    null,
    'May disable a move used\non the Pokémon.'
  ],
  [
    131,
    'Healer',
    'Friendly Pokémon next to this Pokémon in double and triple battles each have a 30% chance of being cured of any major status ailment after each turn.',
    null,
    'May heal an ally’s status\nconditions.'
  ],
  [
    132,
    'Friend-guard',
    'All friendly Pokémon take 0.75× as much direct damage from moves while this Pokémon is in battle.\n\nThis effect stacks if multiple allied Pokémon have it.',
    null,
    'Reduces damage done\nto allies.'
  ],
  [
    133,
    'Weak-armor',
    'Whenever a physical move hits this Pokémon, its Speed rises one stage and its Defense falls one stage.\n\nThis ability triggers on every hit of a multiple-hit move.',
    null,
    'Physical attacks lower\nDefense and raise Speed.'
  ],
  [
    134,
    'Heavy-metal',
    'This Pokémon has double the usual weight for its species.',
    null,
    'Doubles the Pokémon’s\nweight.'
  ],
  [
    135,
    'Light-metal',
    'This Pokémon has half the usual weight for its species.',
    null,
    'Halves the Pokémon’s\nweight.'
  ],
  [
    136,
    'Multiscale',
    'This Pokémon takes half as much damage when it is hit having full HP.',
    null,
    'Reduces damage when HP\nis full.'
  ],
  [
    137,
    'Toxic-boost',
    'This Pokémon has 1.5× its Attack when poisoned.',
    null,
    'Powers up physical\nattacks when poisoned.'
  ],
  [
    138,
    'Flare-boost',
    'This Pokémon has 1.5× its Special Attack when burned.',
    null,
    'Powers up special attacks\nwhen burned.'
  ],
  [
    139,
    'Harvest',
    'After each turn, if the last item this Pokémon consumed was a Berry and it is not currently holding an item, it has a 50% chance of regaining that Berry, or a 100% chance during strong sunlight.',
    null,
    'May create another\nBerry after one is used.'
  ],
  [
    140,
    'Telepathy',
    "This Pokémon does not take damage from friendly Pokémon's moves, including single-target moves aimed at it.",
    null,
    'Anticipates an ally’s\nattack and dodges it.'
  ],
  [
    141,
    'Moody',
    "After each turn, one of this Pokémon's stats at random rises two stages, and another falls one stage.\n\nIf a stat is already at 6 or -6 stages, it will not be chosen to be increased or decreased, respectively.",
    null,
    'Raises one stat and\nlowers another.'
  ],
  [
    142,
    'Overcoat',
    'This Pokémon does not take damage from weather.',
    null,
    'Protects the Pokémon from\ndamage from weather.'
  ],
  [
    143,
    'Poison-touch',
    "This Pokémon's contact moves have a 30% chance of poisoning the target with each hit.\n\nThis counts as an extra effect for the purposes of shield dust.  This ability takes effect before mummy.",
    null,
    'May poison targets when a\nPokémon makes contact.'
  ],
  [
    144,
    'Regenerator',
    'This Pokémon regains 1/3 of its maximum HP when it is switched out for another Pokémon under any circumstances other than having fainted.\n\nThis ability does not take effect when a battle ends.',
    null,
    'Restores a little HP when\nwithdrawn from battle.'
  ],
  [
    145,
    'Big-pecks',
    "This Pokémon's Defense cannot be lowered by other Pokémon.\n\nThis Pokémon can still be passed negative Defense modifiers through heart swap or guard swap.",
    null,
    'Protects the Pokémon from\nDefense-lowering attacks.'
  ],
  [
    146,
    'Sand-rush',
    "This Pokémon's Speed is doubled during a sandstorm, and it does not take sandstorm damage, regardless of type.",
    null,
    'Boosts the Pokémon’s\nSpeed in a sandstorm.'
  ],
  [
    147,
    'Wonder-skin',
    'Non-damaging moves have exactly 50% base accuracy against this Pokémon.',
    null,
    'Makes status-changing\nmoves more likely to miss.'
  ],
  [
    148,
    'Analytic',
    "This Pokémon's moves have 1.3× their power when it moves last in a turn.\n\nfuture sight and doom desire are unaffected.",
    null,
    'Boosts move power when\nthe Pokémon moves last.'
  ],
  [
    149,
    'Illusion',
    'This Pokémon, upon being sent out, appears to have the species, nickname, and Poké Ball of the last Pokémon in the party that is able to battle.  This illusion breaks upon being hit by a damaging move.\n\nOther damage, e.g. from weather or spikes, does not break the illusion, nor does damage done to a substitute.\n\nIf the party order becomes temporarily shuffled around as Pokémon are switched out in battle, this ability chooses the last Pokémon according to that shuffled order.',
    null,
    'Comes out disguised as\nthe Pokémon in back.'
  ],
  [
    150,
    'Imposter',
    'This Pokémon transforms into a random opponent upon entering battle.  This effect is identical to the move transform.',
    null,
    'It transforms itself into\nthe Pokémon it is facing.'
  ],
  [
    151,
    'Infiltrator',
    "This Pokémon's moves ignore light screen, reflect, and safeguard.",
    null,
    'Passes through the foe’s\nbarrier and strikes.'
  ],
  [
    152,
    'Mummy',
    "Whenever a contact move hits this Pokémon, the attacking Pokémon's ability changes to Mummy.\n\nmultitype is unaffected.  If a Pokémon with moxie knocks this Pokémon out, the former's ability will change without taking effect.",
    null,
    'Contact with this Pokémon\nspreads this Ability.'
  ],
  [
    153,
    'Moxie',
    "This Pokémon's Attack rises one stage upon knocking out another Pokémon, even a friendly Pokémon.\n\nThis ability does not take effect when the Pokémon indirectly causes another Pokémon to faint, e.g. through poison or spikes.\n\nIf this Pokémon knocks out a Pokémon with mummy, the former's ability will change without taking effect.",
    null,
    'Boosts Attack after\nknocking out any Pokémon.'
  ],
  [
    154,
    'Justified',
    'Whenever a dark-type move hits this Pokémon, its Attack rises one stage.\n\nThe move is not negated in any way.',
    null,
    'Raises Attack when hit by\na Dark-type move.'
  ],
  [
    155,
    'Rattled',
    "This Pokémon's Speed rises one stage with each hit from a damaging dark-, ghost-, or bug-type move.",
    null,
    'Some move types scare\nit and boost its Speed.'
  ],
  [
    156,
    'Magic-bounce',
    'When this Pokémon is targeted by a move flagged as being reflectable, the move is redirected to its user.\n\nAll reflectable moves are non-damaging, and most non-damaging moves that target other Pokémon are reflectable.\n\nA move reflected by this ability or magic coat cannot be reflected back.',
    null,
    'Reflects status-\nchanging moves.'
  ],
  [
    157,
    'Sap-sipper',
    'Whenever a grass-type move hits this Pokémon, its Attack rises one stage, negating any other effect on it.',
    null,
    'Boosts Attack when hit by\na Grass-type move.'
  ],
  [
    158,
    'Prankster',
    "This Pokémon's non-damaging moves have their priority increased by one stage.",
    null,
    'Gives priority to a\nstatus move.'
  ],
  [
    159,
    'Sand-force',
    "During a sandstorm, this Pokémon's rock-, ground-, and steel-type moves have 1.3× their base power.  This Pokémon does not take sandstorm damage, regardless of type.",
    null,
    'Boosts certain moves’\npower in a sandstorm.'
  ],
  [
    160,
    'Iron-barbs',
    "Whenever a move makes contact with this Pokémon, the move's user takes 1/8 of its maximum HP in damage.\n\nThis ability functions identically to rough skin.",
    null,
    'Inflicts damage to the\nPokémon on contact.'
  ],
  [
    161,
    'Zen-mode',
    'This Pokémon switches between Standard Mode and Zen Mode after each turn depending on its HP.  Below 50% of its maximum HP, it switches to Zen Mode, and at 50% or above, it switches to Standard Mode.\n\nThis Pokémon returns to Standard Mode upon leaving battle or losing this ability.  This ability has no effect if this Pokémon is not a darmanitan.',
    null,
    'Changes the Pokémon’s\nshape when HP is halved.'
  ],
  [
    162,
    'Victory-star',
    "All friendly Pokémon's moves, including this Pokémon's own moves, have 1.1× their usual accuracy while this Pokémon is in battle.",
    null,
    'Boosts the accuracy of its\nallies and itself.'
  ],
  [
    163,
    'Turboblaze',
    "This Pokémon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pokémon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pokémon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pokémon's moves can paralyze a Pokémon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pokémon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to mold breaker and teravolt.",
    null,
    'Moves can be used\nregardless of Abilities.'
  ],
  [
    164,
    'Teravolt',
    "This Pokémon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pokémon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pokémon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pokémon's moves can paralyze a Pokémon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pokémon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to mold breaker and turboblaze.",
    null,
    'Moves can be used\nregardless of Abilities.'
  ],
  [
    165,
    'Aroma-veil',
    'Protects allies against moves that affect their mental state.',
    null,
    'Protects allies from attacks that\nlimit their move choices.'
  ],
  [
    166,
    'Flower-veil',
    'Protects friendly grass Pokémon from having their stats lowered by other Pokémon.',
    null,
    'Prevents lowering of ally\nGrass-type Pokémon’s stats.'
  ],
  [
    167,
    'Cheek-pouch',
    "Restores HP upon eating a Berry, in addition to the Berry's effect.",
    null,
    'Restores HP as well when\nthe Pokémon eats a Berry.'
  ],
  [
    168,
    'Protean',
    "Changes the bearer's type to match each move it uses.\n\nThe type change takes place just before the move is used.",
    null,
    'Changes the Pokémon’s type to\nthe type of the move it’s using.'
  ],
  [
    169,
    'Fur-coat',
    'Halves damage from physical attacks.',
    null,
    'Halves damage from\nphysical moves.'
  ],
  [
    170,
    'Magician',
    "Steals the target's held item when the bearer uses a damaging move.",
    null,
    'The Pokémon steals the held item\nof a Pokémon it hits with a move.'
  ],
  [
    171,
    'Bulletproof',
    'Protects against bullet, ball, and bomb-based moves.',
    null,
    'Protects the Pokémon from\nsome ball and bomb moves.'
  ],
  [
    172,
    'Competitive',
    'Raises Special Attack by two stages upon having any stat lowered.',
    null,
    'Boosts the Sp. Atk stat when\na stat is lowered.'
  ],
  [
    173,
    'Strong-jaw',
    'Strengthens biting moves to 1.5× their power.',
    null,
    'The Pokémon’s strong jaw gives\nit tremendous biting power.'
  ],
  [
    174,
    'Refrigerate',
    "Turns the bearer's normal-type moves into ice-type moves.  Moves changed by this ability have 1.3× their power.",
    null,
    'Normal-type moves become\nIce-type moves.'
  ],
  [
    175,
    'Sweet-veil',
    'Prevents friendly Pokémon from sleeping.',
    null,
    'Prevents itself and ally Pokémon\nfrom falling asleep.'
  ],
  [
    176,
    'Stance-change',
    'Changes aegislash to Blade Forme before using a damaging move, or Shield Forme before using kings shield.',
    null,
    'The Pokémon changes form\ndepending on how it battles.'
  ],
  [
    177,
    'Gale-wings',
    "Raises flying moves' priority by one stage.",
    null,
    'Gives priority to Flying-type\nmoves.'
  ],
  [
    178,
    'Mega-launcher',
    'Strengthens aura and pulse moves to 1.5× their power.',
    null,
    'Powers up aura and pulse moves.'
  ],
  [
    179,
    'Grass-pelt',
    'Boosts Defense while grassy terrain is in effect.',
    null,
    'Boosts the Defense stat\nin Grassy Terrain.'
  ],
  [
    180,
    'Symbiosis',
    "Passes the bearer's held item to an ally when the ally uses up its item.",
    null,
    'The Pokémon can pass\nan item to an ally.'
  ],
  [
    181,
    'Tough-claws',
    'Strengthens moves that make contact to 1.33× their power.',
    null,
    'Powers up moves that\nmake direct contact.'
  ],
  [
    182,
    'Pixilate',
    "Turns the bearer's normal-type moves into fairy moves.  Moves changed by this ability have 1.3× their power.",
    null,
    'Normal-type moves become\nFairy-type moves.'
  ],
  [
    183,
    'Gooey',
    "Lowers attacking Pokémon's Speed by one stage on contact.",
    null,
    'Contact with the Pokémon\nlowers the attacker’s Speed stat.'
  ],
  [
    184,
    'Aerilate',
    "Turns the bearer's normal-type moves into flying-type moves.  Moves changed by this ability have 1.3× their power.",
    null,
    'Normal-type moves become\nFlying-type moves.'
  ],
  [
    185,
    'Parental-bond',
    'Lets the bearer hit twice with damaging moves.  The second hit has half power.',
    null,
    'Parent and child\nattack together.'
  ],
  [
    186,
    'Dark-aura',
    'Strengthens dark moves for all friendly and opposing Pokémon.',
    null,
    'Powers up each Pokémon’s\nDark-type moves.'
  ],
  [
    187,
    'Fairy-aura',
    'Strengthens fairy moves for all friendly and opposing Pokémon.',
    null,
    'Powers up each Pokémon’s\nFairy-type moves.'
  ],
  [
    188,
    'Aura-break',
    'While this Pokémon is on the field, dark aura and fairy aura weaken moves of their respective types to 2/3 their power, rather than strengthening them.',
    null,
    'The effects of “Aura” Abilities\nare reversed.'
  ],
  [
    189,
    'Primordial-sea',
    'When this Pokémon enters battle or gains this ability, the weather becomes heavy rain.  Heavy rain has all the properties of rain dance and also causes damaging Fire moves to fail.\n\nHeavy rain ends when this Pokémon leaves battle or loses this ability, or when this ability is nullified.  The weather cannot otherwise be changed except by the effects of delta stream and desolate land.\n\nair lock and cloud nine will prevent the effects of heavy rain, including allowing Fire moves to work, but will not allow the weather to be changed.',
    null,
    'Affects weather and nullifies any\nFire-type attacks.'
  ],
  [
    190,
    'Desolate-land',
    'When this Pokémon enters battle or gains this ability, the weather becomes extremely harsh sunlight.  Extremely harsh sunlight has all the properties of sunny day and also causes damaging Water moves to fail.\n\nExtremely harsh sunlight ends when this Pokémon leaves battle or loses this ability, or when this ability is nullified.  The weather cannot otherwise be changed except by the effects of delta stream and primordial sea.\n\nair lock and cloud nine will prevent the effects of extremely harsh sunlight, including allowing Water moves to work, but will not allow the weather to be changed.',
    null,
    'Affects weather and nullifies any\nWater-type attacks.'
  ],
  [
    191,
    'Delta-stream',
    'When this Pokémon enters battle or gains this ability, the weather becomes a mysterious air current.  A mysterious air current causes moves to not be super effective against Flying; they do neutral damage instead.  anticipation and stealth rock are not affected.\n\nThe mysterious air current ends when this Pokémon leaves battle or loses this ability, or when this ability is nullified.  The weather cannot otherwise be changed except by the effects of desolate land and primordial sea.\n\nair lock and cloud nine will prevent the effect of a mysterious air current, but will not allow the weather to be changed.',
    null,
    'Affects weather and eliminates all\nof the Flying type’s weaknesses.'
  ],
  [
    192,
    'Stamina',
    "Raises this Pokémon's Defense by one stage when it takes damage from a move.",
    null,
    'Boosts the Defense stat when hit by an attack.'
  ],
  [
    193,
    'Wimp-out',
    "After this Pokémon is hit by a move, if that move caused this Pokémon's HP to drop below half, it switches out.",
    null,
    'The Pokémon cowardly switches out when its HP\nbecomes half or less.'
  ],
  [
    194,
    'Emergency-exit',
    "After this Pokémon is hit by a move, if that move caused this Pokémon's HP to drop below half, it switches out.",
    null,
    'The Pokémon, sensing danger, switches out when its\nHP becomes half or less.'
  ],
  [
    195,
    'Water-compaction',
    "Raises this Pokémon's Defense by two stages when it's hit by a Water move.",
    null,
    'Boosts the Pokémon’s Defense stat sharply when hit\nby a Water-type move.'
  ],
  [
    196,
    'Merciless',
    "This Pokémon's moves critical hit against poisoned targets.",
    null,
    'The Pokémon’s attacks become critical hits if the\ntarget is poisoned.'
  ],
  [
    197,
    'Shields-down',
    'When this Pokémon enters battle and at the end of each turn, if its HP is 50% or above, it changes into Meteor Form; otherwise, it changes into Core Form.  In Meteor Form, it cannot be given a major status ailment (though existing ones are not cured), cannot become drowsy from yawn, and cannot use rest (which will simply fail).\n\nThis ability cannot be copied, replaced, or nullified.  This ability only takes effect for Minior.',
    null,
    'When its HP becomes half or less, the Pokémon’s\nshell breaks and it becomes aggressive.'
  ],
  [
    198,
    'Stakeout',
    "This Pokémon's moves have double power against Pokémon that switched in this turn.",
    null,
    'Doubles the damage dealt to the target’s\nreplacement if the target switches out.'
  ],
  [
    199,
    'Water-bubble',
    'When this Pokémon is hit by a Fire move, the damage is halved.  When this Pokémon uses a Water move, the power is doubled. This Pokémon cannot be burned, and if it becomes burned, the burn is immediately cured.',
    null,
    'Lowers the power of Fire-type moves done to the\nPokémon and prevents the Pokémon from getting\na burn.'
  ],
  [
    200,
    'Steelworker',
    "This Pokémon's Steel moves have 1.5× power.",
    null,
    'Powers up Steel-type moves.'
  ],
  [
    201,
    'Berserk',
    'Whenever this Pokémon takes damage from a move that causes its HP to drop below 50%, its Special Attack rises by one stage.',
    null,
    'Boosts the Pokémon’s Sp. Atk stat when it takes a \nhit that causes its HP to become half or less.'
  ],
  [
    202,
    'Slush-rush',
    'During Hail, this Pokémon has double Speed.',
    null,
    'Boosts the Pokémon’s Speed stat in a hailstorm.'
  ],
  [
    203,
    'Long-reach',
    'A move used by this Pokémon will not make contact.',
    null,
    'The Pokémon uses its moves without making contact\nwith the target.'
  ],
  [
    204,
    'Liquid-voice',
    "When this Pokémon uses a move that is sound-based, that move's type is Water.",
    null,
    'All sound-based moves become Water-type moves.'
  ],
  [
    205,
    'Triage',
    "This Pokémon's healing moves have their priority increased by 3.",
    null,
    'Gives priority to a healing move.'
  ],
  [
    206,
    'Galvanize',
    'When this Pokémon uses a Normal moves, that move is Electric its power is 1.2×.',
    null,
    'Normal-type moves become Electric-type moves.\nThe power of those moves is boosted a little.'
  ],
  [
    207,
    'Surge-surfer',
    "Doubles this Pokémon's Speed on Electric Terrain.",
    null,
    'Doubles the Pokémon’s Speed stat on\nElectric Terrain.'
  ],
  [
    208,
    'Schooling',
    'If this Pokémon is a wishiwashi and level 20 or above, then when it enters battle and at the start of each turn, it becomes Schooling Form if its HP is 25% or higher and Solo Form otherwise.\n\nThis ability cannot be replaced, copied, or nullified.',
    null,
    'When it has a lot of HP, the Pokémon forms a\npowerful school. It stops schooling when its HP\nis low.'
  ],
  [
    209,
    'Disguise',
    'If this Pokémon is in its Disguised Form and takes damage from a move, it switches to its Busted Form and the damage is prevented.  Other effects are not prevented.\n\nThis ability cannot be copied or replaced.  This ability only takes effect for Mimikyu.',
    null,
    'Once per battle, the shroud that covers the\nPokémon can protect it from an attack.'
  ],
  [
    210,
    'Battle-bond',
    "Transforms this Pokémon into Ash-Greninja after fainting an opponent.  Water Shuriken's power is 20 and always hits three times.\n\nThis ability cannot be copied or replaced.  This ability only takes effect for Greninja.",
    null,
    'Defeating an opposing Pokémon strengthens the\nPokémon’s bond with its Trainer, and it becomes\nAsh-Greninja. Water Shuriken gets more powerful.'
  ],
  [
    211,
    'Power-construct',
    'Transforms 10% or 50% Zygarde into Complete Forme when its HP is below 50%.\n\nThis ability cannot be copied or replaced.  This ability only takes effect for Zygarde.',
    null,
    'Other Cells gather to aid when its HP becomes\nhalf or less. Then the Pokémon changes\nits form to Complete Forme.'
  ],
  [
    212,
    'Corrosion',
    "This Pokémon's moves and item ignore the usual immunity of Poison and Steel Pokémon when attempting to inflict poison.",
    null,
    'The Pokémon can poison the target even if it’s\na Steel or Poison type.'
  ],
  [
    213,
    'Comatose',
    "This Pokémon always acts as though it were Asleep.  It cannot be given another status ailment; it's unaffected by yawn; it can use sleep talk; and so on.",
    null,
    'It’s always drowsing and will never wake up.\nIt can attack without waking up.'
  ],
  [
    214,
    'Queenly-majesty',
    'When an opposing Pokémon attempts to use a move that targets this Pokémon or an ally, and that move has priority, it will fail.',
    null,
    'Its majesty pressures the opposing Pokémon,\nmaking it unable to attack using priority moves.'
  ],
  [
    215,
    'Innards-out',
    "When this Pokémon faints from an opponent's move, that opponent takes damage equal to the HP this Pokémon had remaining.",
    null,
    'Damages the attacker landing the finishing hit\nby the amount equal to its last HP.'
  ],
  [
    216,
    'Dancer',
    'Whenever another Pokémon uses a dance move, this Pokémon will use the same move immediately afterwards.',
    null,
    'When another Pokémon uses a dance move,\nit can use a dance move following it regardless\nof its Speed.'
  ],
  [
    217,
    'Battery',
    "Ally Pokémon's moves have their power increased to 1.3×.",
    null,
    'Powers up ally Pokémon’s special moves.'
  ],
  [
    218,
    'Fluffy',
    'Damage from contact moves is halved.  Damage from Fire moves is doubled.',
    null,
    'Halves the damage taken from moves that make\ndirect contact, but doubles that of Fire-type moves.'
  ],
  [
    219,
    'Dazzling',
    'When an opposing Pokémon attempts to use a move that targets this Pokémon or an ally, and that move has priority, it will fail.',
    null,
    'Surprises the opposing Pokémon, making it unable\nto attack using priority moves.'
  ],
  [
    220,
    'Soul-heart',
    "This Pokémon's Special Attack rises by one stage every time any Pokémon faints.",
    null,
    'Boosts its Sp. Atk stat every time a Pokémon faints.'
  ],
  [
    221,
    'Tangling-hair',
    "When this Pokémon takes regular damage from a contact move, the attacking Pokémon's Speed lowers by one stage.",
    null,
    'Contact with the Pokémon lowers the attacker’s\nSpeed stat.'
  ],
  [
    222,
    'Receiver',
    'When an ally faints, this Pokémon gains its Ability.',
    null,
    'The Pokémon copies the Ability of a defeated ally.'
  ],
  [
    223,
    'Power-of-alchemy',
    'When an ally faints, this Pokémon gains its Ability.',
    null,
    'The Pokémon copies the Ability of a defeated ally.'
  ],
  [
    224,
    'Beast-boost',
    "Raises this Pokémon's highest stat by one stage when it faints another Pokémon.",
    null,
    'The Pokémon boosts its most proficient stat each\ntime it knocks out a Pokémon.'
  ],
  [
    225,
    'Rks-system',
    "Changes this Pokémon's type to match its held Memory.\n\nThis ability cannot be copied, replaced, or nullified.  This ability only takes effect for Silvally.",
    null,
    'Changes the Pokémon’s type to match the\nmemory disc it holds.'
  ],
  [
    226,
    'Electric-surge',
    'When this Pokémon enters battle, it changes the terrain to electric terrain.',
    null,
    'Turns the ground into Electric Terrain when the\nPokémon enters a battle.'
  ],
  [
    227,
    'Psychic-surge',
    'When this Pokémon enters battle, it changes the terrain to psychic terrain.',
    null,
    'Turns the ground into Psychic Terrain when\nthe Pokémon enters a battle.'
  ],
  [
    228,
    'Misty-surge',
    'When this Pokémon enters battle, it changes the terrain to misty terrain.',
    null,
    'Turns the ground into Misty Terrain when\nthe Pokémon enters a battle.'
  ],
  [
    229,
    'Grassy-surge',
    'When this Pokémon enters battle, it changes the terrain to grassy terrain.',
    null,
    'Turns the ground into Grassy Terrain when\nthe Pokémon enters a battle.'
  ],
  [
    230,
    'Full-metal-body',
    "This Pokémon's stats cannot be lowered by other Pokémon's moves or abilities.  This effect only applies to normal stat modifications and not more exotic effects such as topsy turvy or power swap.\n\nThis Ability is not bypassed by mold breaker, teravolt, or turboblaze.",
    null,
    'Prevents other Pokémon’s moves or Abilities from\nlowering the Pokémon’s stats.'
  ],
  [
    231,
    'Shadow-shield',
    'When this Pokémon has full HP, regular damage (not fixed damage!) from moves is halved.\n\nThis ability cannot be nullified.',
    null,
    'Reduces the amount of damage the Pokémon takes\nwhile its HP is full.'
  ],
  [
    232,
    'Prism-armor',
    'Super-effective damage this Pokémon takes is reduced to 0.75×.\n\nThis Ability is not bypassed by mold breaker, teravolt, or turboblaze.',
    null,
    'Reduces the power of supereffective attacks taken.'
  ],
  [
    233,
    'Neuroforce',
    'Increases super-effective damage dealt to 1.25×.',
    null,
    'Powers up moves that are super effective.'
  ],
  [
    234,
    'Intrepid-sword',
    null,
    null,
    'Boosts the Pokémon’s Attack stat when the Pokémon\nenters a battle.'
  ],
  [
    235,
    'Dauntless-shield',
    null,
    null,
    'Boosts the Pokémon’s Defense stat when the Pokémon\nenters a battle.'
  ],
  [
    236,
    'Libero',
    null,
    null,
    'Changes the Pokémon’s type to the type of the\nmove it’s about to use.'
  ],
  [
    237,
    'Ball-fetch',
    null,
    null,
    'If the Pokémon is not holding an item, it will fetch\nthe Poké Ball from the first failed throw\nof the battle.'
  ],
  [
    238,
    'Cotton-down',
    null,
    null,
    'When the Pokémon is hit by an attack, it scatters\ncotton fluff around and lowers the Speed stat of\nall Pokémon except itself.'
  ],
  [
    239,
    'Propeller-tail',
    null,
    null,
    'Ignores the effects of opposing Pokémon’s Abilities and\nmoves that draw in moves.'
  ],
  [
    240,
    'Mirror-armor',
    null,
    null,
    'Bounces back only the stat-lowering effects that\nthe Pokémon receives.'
  ],
  [
    241,
    'Gulp-missile',
    null,
    null,
    'When the Pokémon uses Surf or Dive, it will come back\nwith prey. When it takes damage, it will spit out the prey\nto attack.'
  ],
  [
    242,
    'Stalwart',
    null,
    null,
    'Ignores the effects of opposing Pokémon’s Abilities and\nmoves that draw in moves.'
  ],
  [
    243,
    'Steam-engine',
    null,
    null,
    'Boosts the Pokémon’s Speed stat drastically if hit by a\nFire- or Water-type move.'
  ],
  [
    244,
    'Punk-rock',
    null,
    null,
    'Boosts the power of sound-based moves.\nThe Pokémon also takes half the damage from\nthese kinds of moves.'
  ],
  [
    245,
    'Sand-spit',
    null,
    null,
    'The Pokémon creates a sandstorm when it’s hit by\nan attack.'
  ],
  [
    246,
    'Ice-scales',
    null,
    null,
    'The Pokémon is protected by ice scales, which halve\nthe damage taken from special moves.'
  ],
  [247, 'Ripen', null, null, 'Ripens Berries and doubles their effect.'],
  [
    248,
    'Ice-face',
    null,
    null,
    'The Pokémon’s ice head can take a physical attack as\na substitute, but the attack also changes the Pokémon’s\nappearance. The ice will be restored when it hails.'
  ],
  [
    249,
    'Power-spot',
    null,
    null,
    'Just being next to the Pokémon powers up moves.'
  ],
  [
    250,
    'Mimicry',
    null,
    null,
    'Changes the Pokémon’s type depending on the terrain.'
  ],
  [
    251,
    'Screen-cleaner',
    null,
    null,
    'When the Pokémon enters a battle, the effects of\nLight Screen, Reflect, and Aurora Veil are nullified for\nboth opposing and ally Pokémon.'
  ],
  [
    252,
    'Steely-spirit',
    null,
    null,
    'Powers up ally Pokémon’s Steel-type moves.'
  ],
  [
    253,
    'Perish-body',
    null,
    null,
    'When hit by a move that makes direct contact,\nthe Pokémon and the attacker will faint after three turns\nunless they switch out of battle.'
  ],
  [
    254,
    'Wandering-spirit',
    null,
    null,
    'The Pokémon exchanges Abilities with a Pokémon\nthat hits it with a move that makes direct contact.'
  ],
  [
    255,
    'Gorilla-tactics',
    null,
    null,
    'Boosts the Pokémon’s Attack stat but only allows\nthe use of the first selected move.'
  ],
  [
    256,
    'Neutralizing-gas',
    null,
    null,
    'If the Pokémon with Neutralizing Gas is in the battle,\nthe effects of all Pokémon’s Abilities will be nullified\nor will not be triggered.'
  ],
  [
    257,
    'Pastel-veil',
    null,
    null,
    'Protects the Pokémon and its ally Pokémon from\nbeing poisoned.'
  ],
  [
    258,
    'Hunger-switch',
    null,
    null,
    'The Pokémon changes its form, alternating between\nits Full Belly Mode and Hangry Mode after the end of\neach turn.'
  ],
  [
    259,
    'Quick-draw',
    null,
    null,
    'Enables the Pokémon to move first occasionally.'
  ],
  [
    260,
    'Unseen-fist',
    null,
    null,
    'If the Pokémon uses moves that make direct contact,\nit can attack the target even if the target protects itself.'
  ],
  [
    261,
    'Curious-medicine',
    null,
    null,
    'When the Pokémon enters a battle, it scatters medicine\nfrom its shell, which removes all stat changes\nfrom allies.'
  ],
  [262, 'Transistor', null, null, 'Powers up Electric-type moves.'],
  [263, 'Dragons-maw', null, null, 'Powers up Dragon-type moves.'],
  [
    264,
    'Chilling-neigh',
    null,
    null,
    'When the Pokémon knocks out a target, it utters a\nchilling neigh, which boosts its Attack stat.'
  ],
  [
    265,
    'Grim-neigh',
    null,
    null,
    'When the Pokémon knocks out a target, it utters a\nterrifying neigh, which boosts its Sp. Atk stat.'
  ],
  [
    266,
    'As-one-glastrier',
    null,
    null,
    'This Ability combines the effects of both Calyrex’s\nUnnerve Ability and Glastrier’s Chilling Neigh Ability.'
  ],
  [
    267,
    'As-one-spectrier',
    null,
    null,
    'This Ability combines the effects of both Calyrex’s\nUnnerve Ability and Spectrier’s Grim Neigh Ability.'
  ],
  [268, 'Lingering-aroma', null, null, null],
  [269, 'Seed-sower', null, null, null],
  [270, 'Thermal-exchange', null, null, null],
  [271, 'Anger-shell', null, null, null],
  [272, 'Purifying-salt', null, null, null],
  [273, 'Well-baked-body', null, null, null],
  [274, 'Wind-rider', null, null, null],
  [275, 'Guard-dog', null, null, null],
  [276, 'Rocky-payload', null, null, null],
  [277, 'Wind-power', null, null, null],
  [278, 'Zero-to-hero', null, null, null],
  [279, 'Commander', null, null, null],
  [280, 'Electromorphosis', null, null, null],
  [281, 'Protosynthesis', null, null, null],
  [282, 'Quark-drive', null, null, null],
  [283, 'Good-as-gold', null, null, null],
  [284, 'Vessel-of-ruin', null, null, null],
  [285, 'Sword-of-ruin', null, null, null],
  [286, 'Tablets-of-ruin', null, null, null],
  [287, 'Beads-of-ruin', null, null, null],
  [288, 'Orichalcum-pulse', null, null, null],
  [289, 'Hadron-engine', null, null, null],
  [290, 'Opportunist', null, null, null],
  [291, 'Cud-chew', null, null, null],
  [292, 'Sharpness', null, null, null],
  [293, 'Supreme-overlord', null, null, null],
  [294, 'Costar', null, null, null],
  [295, 'Toxic-debris', null, null, null],
  [296, 'Armor-tail', null, null, null],
  [297, 'Earth-eater', null, null, null],
  [298, 'Mycelium-might', null, null, null],
  [10001, 'Mountaineer', null, null, null],
  [10002, 'Wave-rider', null, null, null],
  [10003, 'Skater', null, null, null],
  [10004, 'Thrust', null, null, null],
  [10005, 'Perception', null, null, null],
  [10006, 'Parry', null, null, null],
  [10007, 'Instinct', null, null, null],
  [10008, 'Dodge', null, null, null],
  [10009, 'Jagged-edge', null, null, null],
  [10010, 'Frostbite', null, null, null],
  [10011, 'Tenacity', null, null, null],
  [10012, 'Pride', null, null, null],
  [10013, 'Deep-sleep', null, null, null],
  [10014, 'Power-nap', null, null, null],
  [10015, 'Spirit', null, null, null],
  [10016, 'Warm-blanket', null, null, null],
  [10017, 'Gulp', null, null, null],
  [10018, 'Herbivore', null, null, null],
  [10019, 'Sandpit', null, null, null],
  [10020, 'Hot-blooded', null, null, null],
  [10021, 'Medic', null, null, null],
  [10022, 'Life-force', null, null, null],
  [10023, 'Lunchbox', null, null, null],
  [10024, 'Nurse', null, null, null],
  [10025, 'Melee', null, null, null],
  [10026, 'Sponge', null, null, null],
  [10027, 'Bodyguard', null, null, null],
  [10028, 'Hero', null, null, null],
  [10029, 'Last-bastion', null, null, null],
  [10030, 'Stealth', null, null, null],
  [10031, 'Vanguard', null, null, null],
  [10032, 'Nomad', null, null, null],
  [10033, 'Sequence', null, null, null],
  [10034, 'Grass-cloak', null, null, null],
  [10035, 'Celebrate', null, null, null],
  [10036, 'Lullaby', null, null, null],
  [10037, 'Calming', null, null, null],
  [10038, 'Daze', null, null, null],
  [10039, 'Frighten', null, null, null],
  [10040, 'Interference', null, null, null],
  [10041, 'Mood-maker', null, null, null],
  [10042, 'Confidence', null, null, null],
  [10043, 'Fortune', null, null, null],
  [10044, 'Bonanza', null, null, null],
  [10045, 'Explode', null, null, null],
  [10046, 'Omnipotent', null, null, null],
  [10047, 'Share', null, null, null],
  [10048, 'Black-hole', null, null, null],
  [10049, 'Shadow-dash', null, null, null],
  [10050, 'Sprint', null, null, null],
  [10051, 'Disgust', null, null, null],
  [10052, 'High-rise', null, null, null],
  [10053, 'Climber', null, null, null],
  [10054, 'Flame-boost', null, null, null],
  [10055, 'Aqua-boost', null, null, null],
  [10056, 'Run-up', null, null, null],
  [10057, 'Conqueror', null, null, null],
  [10058, 'Shackle', null, null, null],
  [10059, 'Decoy', null, null, null],
  [10060, 'Shield', null, null, null]
]
