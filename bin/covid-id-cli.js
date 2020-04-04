#!/usr/bin/env node

const axios = require("axios");
const program = require("commander");
const pkg = require("../package.json");
const color = require("colors");

const getData = async () => {
  const { data } = await axios.get("https://covid19.mathdro.id/api/countries/id");
  return data;
}

program.version(pkg.version)

program
  .command('id', { isDefault: true })
  .description('get covid-19 cases in Indonesia')
  .action(async () => {
    const { confirmed, recovered, deaths } = await getData()
    console.log(`Confirmed : ${confirmed.value}`.bgBlue)
    console.log(`Recovered : ${recovered.value}`.black.bgGreen)
    console.log(`Deaths : ${deaths.value}`.bgRed)
  })

program.parse(process.argv);
