import {Product, Clothing, Appliance} from '../../data/products.js'

describe('Checl classes',()=>{
  it('Check Product Class',()=>{
    let product1 = new Product({
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  });

  expect(product1.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
  expect(product1.image).toEqual('images/products/athletic-cotton-socks-6-pairs.jpg');
  expect(product1.name).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
  expect(product1.rating.stars).toEqual(4.5);
  expect(product1.rating.count).toEqual(87);
  expect(product1.priceCents).toEqual(1090);
  expect(product1.getStarsUrl()).toEqual(`images/ratings/rating-45.png`);
  expect(product1.getPrice()).toEqual('$10.90');
  expect(product1.extraInfoHTML()).toEqual('')





  })


  it('Check Clothing Class',()=>{
    let product2 = new Clothing({
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  });

  expect(product2.id).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
  expect(product2.image).toEqual('images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg');
  expect(product2.name).toEqual('Adults Plain Cotton T-Shirt - 2 Pack');
  expect(product2.rating.stars).toEqual(4.5);
  expect(product2.rating.count).toEqual(56);
  expect(product2.priceCents).toEqual(799);
  expect(product2.getStarsUrl()).toEqual(`images/ratings/rating-45.png`);
  expect(product2.getPrice()).toEqual('$7.99');
  expect(product2.sizeChartLink).toEqual('images/clothing-size-chart.png')
  expect(product2.extraInfoHTML()).toContain('images/clothing-size-chart.png')





  })

  it('Check Appliance Class',()=>{
    let product2 = new Appliance({
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ],
    type:'appliance',
    instructionsLink:'images/products/appliances/appliance-instructions.png',
    warrantyLink:'images/products/appliances/appliance-warranty.png'
  });

  expect(product2.id).toEqual('c2a82c5e-aff4-435f-9975-517cfaba2ece');
  expect(product2.image).toEqual('images/products/electric-glass-and-steel-hot-water-kettle.webp');
  expect(product2.name).toEqual('Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter');
  expect(product2.rating.stars).toEqual(5);
  expect(product2.rating.count).toEqual(846);
  expect(product2.priceCents).toEqual(3074);
  expect(product2.getStarsUrl()).toEqual(`images/ratings/rating-50.png`);
  expect(product2.getPrice()).toEqual('$30.74');
  expect(product2.instructionsLink).toEqual('images/products/appliances/appliance-instructions.png')
  expect(product2.warrantyLink).toEqual('images/products/appliances/appliance-warranty.png')
  expect(product2.extraInfoHTML()).toContain('images/products/appliances/appliance-instructions.png');





  })
})