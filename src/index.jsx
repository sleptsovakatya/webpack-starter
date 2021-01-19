/*import * as $ from 'jquery'*/
import Post from '@models/Post'
import json from '@/assets/json'
import logo from '@/assets/webpack-logo.png'
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import '@/styles/styles.css'
import '@/babel'
import React from 'react'
import {render} from 'react-dom'
import App from "@/App.jsx";


const post = new Post('Webpack post title', logo)


/*$('pre').addClass('code').html(post.toString())*/


render(<App />, document.getElementById('app'))