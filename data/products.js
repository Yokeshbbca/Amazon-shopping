export function getProduct(productId) {
  let matchingProduct;

    products.forEach((product) => {
      if(productId === product.id) {
        matchingProduct = product;
      }
    });

    return matchingProduct;
}

export const products = [
{
  id : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  image : "images/products/athletic-cotton-socks-6-pairs.jpg", 
  name : "Black and Gray Athletic Cotton Socks - 6 Pairs",
  priceCents : 1090,
  rating : {
    stars: 45,
    count: 87
  }
}, {
  id : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  image : "images/products/intermediate-composite-basketball.jpg",
  name : "Intermediate Size Basketball",
  priceCents : 2095,
  rating : {
    stars: 4, 
    count: 127
  }  
}, {
  id : "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  image : "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
  name : "Adults Plain Cotton T-Shirt - 2 Pack",
  priceCents : 799,
  rating : {
    stars: 45,
    count: 56
  },
  sizeChartLink : "images/clothing-size-chart.png",
  type : "clothing"
}, {
  id : "54e0eccd-8f36-462b-b68a-8182611d9add",
  image : "images/products/black-2-slot-toaster.jpg",
  name : "2 Slot Toaster - Black",
  priceCents : 1899,
  rating : {
    stars: 5, 
    count: 2197
  }
}, {
  id : "3ebe75dc-64d2-4137-8860-1f5a963e534b",
  image : "images/products/6-piece-white-dinner-plate-set.jpg",
  name : "6 Piece White Dinner Plate Set",
  priceCents : 2067,
  rating : {
    stars: 4, 
    count: 37
  }
}, {
  id : "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
  image : "images/products/6-piece-non-stick-baking-set.webp",
  name : "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
  priceCents : 3499,
  rating : {
    stars: 45, 
    count: 175
  }
}, {
  id : "dd82ca78-a18b-4e2a-9250-31e67412f98d",
  image : "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
  name : "Plain Hooded Fleece Sweatshirt",
  priceCents : 2400,
  rating : {
    stars: 45, 
    count: 317
  }
}, {
  id : "77919bbe-0e56-475b-adde-4f24dfed3a04",
  image : "images/products/luxury-tower-set-6-piece.jpg",
  name : "Luxury Towel Set - Graphite Gray",
  priceCents : 3599,
  rating : {
    stars: 45, 
    count: 144
  }  
}, {
  id : "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
  image : "images/products/liquid-laundry-detergent-plain.jpg",
  name : "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
  priceCents : 2899,
  rating : {
    stars: 45, 
    count: 305
  }
}, {
  id : "58b4fc92-e98c-42aa-8c55-b6b79996769a",
  image : "images/products/knit-athletic-sneakers-gray.jpg",
  name : "Waterproof Knit Athletic Sneakers - Gray",
  priceCents : 3390,
  rating : {
    stars: 4, 
    count: 89}
}, {
  id : "5968897c-4d27-4872-89f6-5bcb052746d7",
  image : "images/products/women-chiffon-beachwear-coverup-black.jpg",
  name : "Women's Chiffon Beachwear Cover Up - Black",
  priceCents : 2070,
  rating : {
    stars: 45, 
    count: 235},
  sizeChartLink : "images/clothing-size-chart.png",
  type : "clothing"
}, {
  id : "aad29d11-ea98-41ee-9285-b916638cac4a",
  image : "images/products/round-sunglasses-black.jpg",
  name : "Round Sunglasses",
  priceCents : 1560,
  rating : {
    stars: 45, 
    count: 30
  }
}, {
  id : "04701903-bc79-49c6-bc11-1af7e3651358",
  image : "images/products/women-beach-sandals.jpg",
  name : "Women's Two Strap Buckle Sandals - Tan",
  priceCents : 2499,
  rating : {
    stars: 45, 
    count: 562
  }
}, {
  id : "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
  image : "images/products/blackout-curtain-set-beige.webp",
  name : "Blackout Curtains Set 4-Pack - Beige",
  priceCents : 4599,
  rating : {
    stars: 45, 
    count: 232
  }
}, {
  id : "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
  image : "images/products/men-slim-fit-summer-shorts-gray.jpg",
  name : "Men's Slim-Fit Summer Shorts",
  priceCents : 1699,
  rating : {
    stars: 4, 
    count: 160
  }
}, {
  id : "c2a82c5e-aff4-435f-9975-517cfaba2ece",
  image : "images/products/electric-glass-and-steel-hot-water-kettle.webp",
  name : "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
  priceCents : 3074,
  rating : {
    stars: 5, 
    count: 846
  }
}, {
  id : "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
  image : "images/products/facial-tissue-2-ply-18-boxes.jpg",
  name : "Ultra Soft Tissue 2-Ply - 18 Box",
  priceCents : 2374,
  rating : {
    stars: 4, 
    count: 99
  }
}, {
  id : "a82c6bac-3067-4e68-a5ba-d827ac0be010",
  image : "images/products/straw-sunhat.webp",
  name : "Straw Lifeguard Sun Hat",
  priceCents : 2200,
  rating : {
    stars: 4, 
    count: 215
  }
}, {
  id : "e4f64a65-1377-42bc-89a5-e572d19252e2",
  image : "images/products/sky-flower-stud-earrings.webp",
  name : "Sterling Silver Sky Flower Stud Earrings",
  priceCents : 1799,
  rating : {
    stars: 45, 
    count: 52
  }
}, {
  id : "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
  image : "images/products/women-stretch-popover-hoodie-black.jpg",
  name : "Women's Stretch Popover Hoodie",
  priceCents : 1374,
  rating : {
    stars: 45, 
    count: 2465
  },
  sizeChartLink : "images/clothing-size-chart.png",
  type : "clothing"
}, {
  id : "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
  image : "images/products/bathroom-rug.jpg",
  name : "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
  priceCents : 1250,
  rating : {
    stars: 45, 
    count: 119 
  }
}, {
  id : "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
  image : "images/products/women-knit-ballet-flat-black.jpg",
  name : "Women's Knit Ballet Flat",
  priceCents : 2640,
  rating : {
    stars: 4, 
    count: 326
  }
}, {
  id : "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
  image : "images/products/men-golf-polo-t-shirt-blue.jpg",
  name : "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
  priceCents : 1599,
  rating : {
    stars: 45, 
    count: 2556
  },
  sizeChartLink : "images/clothing-size-chart.png",
  type : "clothing"
}, {
  id : "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
  image : "images/products/trash-can-with-foot-pedal-50-liter.jpg",
  name : "Trash Can with Foot Pedal - Brushed Stainless Steel",
  priceCents : 8300,
  rating : {
    stars: 45, 
    count: 2286
  }
}, {
  id : "19c6a64a-5463-4d45-9af8-e41140a4100c",
  image : "images/products/duvet-cover-set-blue-twin.jpg",
  name : "Duvet Cover Set with Zipper Closure",
  priceCents : 2399,
  rating : {
    stars: 4, 
    count: 456
  }
}, {
  id : "d2785924-743d-49b3-8f03-ec258e640503",
  image : "images/products/women-chunky-beanie-gray.webp",
  name : "Women's Chunky Cable Beanie - Gray",
  priceCents : 1250,
  rating : {
    stars: 5,
    count: 83
  }
}];
