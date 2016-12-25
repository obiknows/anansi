#!/usr/bin/env node
"use strict"

// some libraries
const x = require('x-ray')()
const osmosis = require("osmosis")

osmosis

.get('www.craigslist.org/about/sites')
.find('h1')
.set('country')
.find('h1["US"] + div a')
.set('location')
// .follow('@href')
// .find('header + nav + div + div li > a')
// .set('category')
// .follow('@href')
// .paginate('.totallink + a.button.next:first')
// .find('p > a')
// .follow('@href')
// .set({
//     'title':        'section > h2',
//     'description':  '#postingbody',
//     'subcategory':  'div.breadbox > span[4]',
//     'date':         'time@datetime',
//     'latitude':     '#map@data-latitude',
//     'longitude':    '#map@data-longitude',
//     'images':       ['img@src'],
//     'id': 'p.postinginfo[0]'
// })
.data(function(listing) {
    // do something with listing data
    console.log(listing);
})
.log(console.log)
.error(console.log)
// .debug(console.log)
