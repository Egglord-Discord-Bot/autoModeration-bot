const	Event = require('../../structures/Event');

/**
 * Ready event
 * @event Egglord#Ready
 * @extends {Event}
*/
class Ready extends Event {
	constructor(...args) {
		super(...args, {
			dirname: __dirname,
			once: true,
		});
	}

	/**
	 * Function for recieving event.
	 * @param {bot} bot The instantiating client
	 * @readonly
	*/
	async run(bot) {
		bot.logger.log(`Bot online ${bot.user.tag}`);
	}
}

module.exports = Ready;
