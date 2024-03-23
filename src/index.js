import * as $ from 'jquery'
import Post from './post'
import json from './assets/data'
import './css/style.css'
import logo from './assets/icon.png'
import xml from './assets/data.xml'
import csv from './assets/data.csv'

const post = new Post('Webpack Post Title', logo)

$('pre').html(post.toString())
console.log('JSON:', json)
console.log('XML:', xml)
console.log('CSV:', csv)