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
      giftLink: 'https://www.zales.com/34-ct-tw-princesscut-diamond-cushion-frame-split-shank-bridal-set-10k-white-gold/p/V-20043393?cid=PLA-goo-shop_p1_jewelry_priority&gclid=CjwKCAiA9rjRBRAeEiwA2SV4ZdEp4zA4WIyLZYOvulw3ik7BjWStx7ilg-RNV49Chk7ckMu_DXU7AxoC0JQQAvD_BwE&gclsrc=aw.ds',
      birthday: '12/13/1986'
    },
    {
      name: 'Darian Fonticiella',
      relationship: 'Brother',
      interest: [
        'Being a dick',
        'Music',
        'Food',
        'Fishing',
        "Travel"
    ],
      priceRange: '$5',
      giftLink: 'https://www.toothbrush.com',
      birthday: '12/13/1986',
    },
];

Gifted.create(giftedList)
  .then((results) => {
      console.log(`${results.length} gifted people created`);
  })
  .catch((err) => {
      console.log("Save ERROR!");
      console.log(err);
  });
