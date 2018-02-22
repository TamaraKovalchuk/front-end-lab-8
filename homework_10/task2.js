/**
 * @typedef {Object} CombatHistory
 * @property {wins} number - Number of victories
 * @property {loses} number - Number of defeats
 */

/**
 * @typedef {Object} Stats
 * @property {string} name - The name of fighter
 * @property {number} attack - The amount of attack of fighter
 * @property {number} hp - The total number of health point of fighter
 */

/**
 * @typedef {Object} Fighter
 * @property {function} getName - Return name of the fighter
 * @property {function} fight - Return true if fighter make dmg to enemy, otherwise false
 * @property {function} block - Return true if enemy can block incoming damage, otherwise false (randomly)
 * @property {function} getStats - Retrurn {Stats} of fighter
 * @property {number} getCombatHistory - Return {CombatHistory} of previous fights
 */

/**
 * Pretty print fighter's info
 * @param {Fighter} fighter - The fighter
 * DO NOT MODIFY
 */
function showResult(fighter) {
	console.log("Fighter", fighter.getName());
	console.log("- Combat stats:", fighter.getCombatHistory());
	console.log("- Properties:", fighter.getStats());
}

function fighter(propertyFighter) {
	let _fighter = {};
	_fighter.props = propertyFighter;
	_fighter.combatHistory = { wins: 0, loses: 0 };
	_fighter.getName = () => {
		return _fighter.props.name;
	};
	_fighter.fight = defender => {
		if (!defender.block()) {
			if (_fighter.props.attack > defender.props.hp) {
				_fighter.combatHistory.wins += 1;
				defender.combatHistory.loses += 1;
			} else {
				defender.props.hp -= _fighter.props.attack;
			}
			if (defender.props.hp === 0) {
				_fighter.combatHistory.wins += 1;
				defender.combatHistory.loses += 1;
			}
			return true;
		} else {
			return false;
		}
	};
	_fighter.block = () => {
		return Math.round(Math.random()) === 1 ? true : false;
	};
	_fighter.getStats = () => {
		return _fighter.props;
	};
	_fighter.getCombatHistory = () => {
		return _fighter.combatHistory;
	};
	return _fighter;
}
/**
 * The following code must be valid after implementation!
 */

var fighter1 = fighter({ name: "John", attack: 100, hp: 100 });
var fighter2 = fighter({ name: "Kayn", attack: 50, hp: 300 });
var fighter3 = fighter({ name: "Bill", attack: 40, hp: 100 });

fighter1.fight(fighter2); // true, fighter 1 make damage to fighter 2
fighter1.fight(fighter3); // true, fighter 1 make damage to fighter 3

/**
 * Fighter John
 * - Combat stats: { wins: 1, loses: 0 }
 * - Properties: { name: 'John', attack: 100, hp: 100 }
 */
showResult(fighter1);

/** Fighter Kayn
 * - Combat stats: { wins: 0, loses: 0 }
 * - Properties: { name: 'Kayn', attack: 50, hp: 200 }
 */
showResult(fighter2);

/**
 * Fighter Bill
 * - Combat stats: { wins: 0, loses: 1 }
 * - Properties: { name: 'Bill', attack: 40, hp: 0 }
 */
showResult(fighter3);
