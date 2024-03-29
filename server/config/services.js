/*
  This file contains the configuration information needed to proxy requests to your desired server
  for both your bundle.js and any AJAX requests made to your API. In order for this to work your
  service's API must be set up in a very specific manner following RESTful API naming conventions.

  The endpoints defined in your API should be prefixed with /api/ and should look like some of the
  examples below:

    /api/listings/:listing_id
    /api/listings/:listing_id/reviews
    /api/products/:product_id
    /api/products/:product_id/questions

  Given this endpoint, for each service you will need to remove the /api/ prefix and add the
  remainder of the endpoint to the configuration object below as the value for the api key in the
  object.

  For example:

    /api/listings/:listing_id = /listings or /listings/:listing_id
    /api/listings/:listing_id/reviews = /listings/:listing_id/reviews
    /api/products/:product_id = /products or /products/:product_id
    /api/products/:product_id/questions = /products/:product_id/questions

  The url key in each service object should correspond to the url of the service you are trying to
  proxy requests to. At the start these will point to servers running locally on your machine, but
  once you deploy onto AWS then you will need to update these urls to point to the ip addresses
  of the servers running on AWS.

  The bundle key in each service object should correspond to the name of that particular service's
  webpack bundle.

  For a service with an API of /api/listings/:listing_id/reviews, running on http://localhost:3004
  and a webpack bundled called bundle.js, the configuration object for that service will look like:

  {
    api: /listings/:listing_id/reviews,
    url: 'http://localhost:3004',
    bundle: 'bundle.js',
  }
*/

// taylor - http://54.172.160.204:3001/ service 1 /product_scroll/*

// micheal - http://18.217.57.74:3001/ service 2

// frans - http://3.133.118.32:3001/ service 3

// john - http://18.224.65.20:3004/ service 4

//proxy on aws - http://3.86.35.244:3000/


// module.exports = {
//   service1: {
//     api: '/product_scroll/',
//     url: 'http://34.229.55.54:3001/',
//     bundle: 'bundle.js',
//   },
//   service2: {
//     api: '/main',
//     url: 'http://18.217.57.74:3001/',
//     bundle: 'bundle.js',
//   },
//   service3: {
//     api: '/Bag',
//     url: 'http://3.133.118.32:3001/',
//     bundle: 'bundle.js',
//   },
//   service4: {
//     api: '/*',
//     url: 'http://18.224.65.20:3004/',
//     bundle: 'bundle.js',
//   },
// };

module.exports = {
    service1: {
      api: '/product_scroller',
      url: 'http://100.26.235.24:3001/', // taylor
      bundle: 'bundle.js',
    },
    service2: {
      api: '/main',
      url: 'http://18.217.57.74:3001/', // michael
      bundle: 'bundle.js',
    },
    service3: {
      api: '/Bag',
      url: 'http://52.14.36.65:3001/', // frans
      bundle: 'bundle.js',
    },
    service4: {
      api: '/*',
      url: 'http://18.224.65.20:3004/', // john
      bundle: 'bundle.js',
    },
  };