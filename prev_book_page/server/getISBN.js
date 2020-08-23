<<<<<<< HEAD
const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;

const getISBN = (ItemId) => {
  const url =
    'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=' +
    encodeURIComponent(ItemId);

  //promise 선언
  const get_ISBN = async () => {
    try {
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  };

  //promise 실행

  return get_ISBN().then((isbn) => {
    const $ = cheerio.load(isbn.data);
    const $bodyList2 = $('div.Ere_prod_mconts_box');

    const ISBN = $bodyList2
      .find('div.conts_info_list1 ul li')
      .eq(4)
      .text()
      .split(' ')[2];
    //
    return ISBN;
  });
};

module.exports = getISBN;
=======
const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;

const getISBN = async (ItemId) => {
  const url =
    'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=' +
    encodeURIComponent(ItemId);

  //promise 선언
  const get_ISBN = async () => {
    try {
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  };

  //promise 실행

  return get_ISBN().then((isbn) => {
    const $ = cheerio.load(isbn.data);

    const ISBN = $('meta[property="books:isbn"]').attr('content');

    return ISBN;
  });
};

module.exports = getISBN;
>>>>>>> e5824205ad86236c9dea334db8d89bb3486a02b2
