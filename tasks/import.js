const fs = require('fs');
const path = require('path');

const csv = require('csvtojson');
const fetch = require('node-fetch');
const moment = require('moment');
const prettier = require('prettier');
const signale = require('signale');
const uuid = require('short-uuid');

const prettierOptions = {
  singleQuote: true
};

moment.locale('pt-br');

function getVideoId(url) {
  let videoId = url.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  return videoId;
}

function importSheet() {
  const url =
    'https://docs.google.com/spreadsheets/d/18SGmEnBtA157mAV-i2wDBO_yc4I1EekW7cNS8ameiJo/export?format=csv';

  const settings = { method: 'GET' };

  const header = 'date,text,url,cases,deaths';

  fetch(url, settings)
    .then(res => res.text())
    .then(text => {
      const parsed = text.split('\n').slice(1).join('\n');
      const csvStr = `${header}\n${parsed}`;

      const parsedQuotes = [];

      csv()
        .fromString(csvStr)
        .then(async quotes => {
          let order = 100;
          quotes.forEach(({ deaths, cases, date, text, url }) => {
            const id = uuid.generate();
            const momentDate = moment(date, 'DD/MM/YYYY');

            const videoId = url.includes('youtube')
              ? getVideoId(url)
              : undefined;

            parsedQuotes.push({
              id,
              order,
              deaths: parseInt(deaths.replace(/\./g, '')),
              cases: parseInt(cases.replace(/\./g, '')),
              date: momentDate.format('YYYY-MM-DD'),
              formattedDate: momentDate.format('LL'),
              text,
              url: videoId ? undefined : url,
              videoId
            });

            order += 100;
          });

          fs.writeFileSync(
            path.join(__dirname, '..', 'src', 'data', 'quotes.json'),
            prettier.format(JSON.stringify(parsedQuotes), {
              parser: 'json',
              ...prettierOptions
            })
          );

          signale.success('Frases atualizadas');
        });
    });
}

importSheet();
