const axios = require('axios');
const cheerio = require('cheerio');

const getServer = async (serverid) => {

    const url = "https://www.battlemetrics.com/servers/scum/" + serverid;
    const response = await axios(url);
    const $ = cheerio.load(response.data);
    const scriptContent = $('#storeBootstrap').html();

    if (scriptContent) {
        const jsonData = JSON.parse(scriptContent);
        return jsonData.state.servers.servers[serverid];
    } else {
        return null;
    }
}

module.exports = { getServer }