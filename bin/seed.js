require("dotenv").config();

require("../config/mongoose-setup");

const Gifted = require("../models/gifted-models");


const giftedList = [
    {
      name: 'Yissa Fonticiella',
      relationship: 'Wife',
      interest: [
        'Ariel Fonticiella',
        'Music',
        'Food',
        'Her Husband',
        'Shoes',
        "Travel"
    ],
      priceRange: '$500',
      giftLink: 'https://www.zales.com/34-ct-tw-princesscut-diamond-cushion-frame-split-shank-bridal-set-10k-white-gold/p/V-20043393?cid=PLA-goo-shop_p1_jewelry_priority&gclid=CjwKCAiA9rjRBRAeEiwA2SV4ZdEp4zA4WIyLZYOvulw3ik7BjWStx7ilg-RNV49Chk7ckMu_DXU7AxoC0JQQAvD_BwE&gclsrc=aw.ds'
    },

    {
    name: 'Darian Fonticiella',
    relationship: 'Brother',
    interest: [
      'Not Ariel Fonticiella',
      'Music',
      'Food',
      'Being a dick',
      'Fishing',
      "Travel"
  ],
    priceRange: '$10',
    giftLink: 'https://www.amazon.com/Colgate-Adult-Full-Toothbrush-Count/dp/B002YXXZQM/ref=sr_1_1_sspa?ie=UTF8&qid=1513043741&sr=8-1-spons&keywords=toothbrush&th=1'
  }
];

Gifted.create(giftedList)
  .then((results) => {
      console.log(`${results.length} gifted people created`);
  })
  .catch((err) => {
      console.log("Save ERROR!");
      console.log(err);
  });
