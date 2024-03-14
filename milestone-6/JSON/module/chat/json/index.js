// read configuration file
const fs = require('fs');
const configData = fs.readFileSync('config.json','utf-8');
const config = JSON.parse(configData);

// modify configuration settings
config.database.port = 3000;

// stringify modified configuration and write back to file

const modifiedConfigData = JSON.stringify(config,null,2);
const dd = fs.writeSync('config.json',modifiedConfigData,'utf-8');

