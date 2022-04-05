const	{ accounts } = require('../assets/JSON/ServerSettings.json'),
	Event = require('../../structures/Event');

/**
 * guild member add event
 * @event Egglord#GuildMemberAdd
 * @extends {Event}
*/
class GuildMemberAdd extends Event {
	constructor(...args) {
		super(...args, {
			dirname: __dirname,
		});
	}

	/**
	 * Function for recieving event.
	 * @param {bot} bot The instantiating client
	 * @readonly
	*/
	async run(bot, member) {

		if (accounts.enabled) {
			// Only accounts older than 14 days can join
			if (member.user.createdAt > accounts.ageMin) {
				member.send({ content: 'Your account must be older than 14 days to join.' });
				member.kick({ reason: 'Account too young' });
			}
		}
	}
}

module.exports = GuildMemberAdd;
