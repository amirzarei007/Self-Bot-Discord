/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const Discord = require('discord.js');
const weather = require('weather-js');
const config = require("../config.json")
module.exports = {
    name:"weather",
    description:"send weather in channel",

    async run (client,message, args){
        const idowner = `${config.botstat.ownerID}`
        if(message.author.id === idowner) {
/*   Made by Mr Swift  */
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
            if (result === undefined || result.length === 0) return message.channel.send(`**Invalid** location`);

            var current = result[0].current;
            var location = result[0].location;
/*   Made by Mr Swift  */
          
             message.channel.startTyping();
             message.channel.send(`**${current.skytext}** \n𝐖𝐞𝐚𝐭𝐡𝐞𝐫 𝐟𝐨𝐫𝐞𝐜𝐚𝐬𝐭 𝐟𝐨𝐫 ${current.observationpoint} \n𝐓𝐢𝐦𝐞𝐳𝐨𝐧𝐞 UTC ${location.timezone} \n𝐃𝐞𝐠𝐫𝐞𝐞 𝐓𝐲𝐩𝐞: 𝐂𝐞𝐥𝐬𝐢𝐮𝐬 \n𝐓𝐞𝐦𝐩𝐞𝐫𝐚𝐭𝐮𝐫𝐞: ${current.temperature} \n𝐖𝐢𝐧𝐝 :${current.winddisplay}\n 𝐅𝐞𝐞𝐥𝐬 𝐥𝐢𝐤𝐞: ${current.feelslike} \n𝐇𝐮𝐦𝐢𝐟𝐢𝐭𝐲: ${current.humidity} %`);
             message.channel.stopTyping()

        })


    }
    }
}