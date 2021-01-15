/*import * as $ from 'jquery'*/
import Post from '@models/Post'
import json from '@/assets/json'
import logo from '@/assets/webpack-logo.png'
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import '@/styles/styles.css'
import '@/styles/less.less'
import '@/styles/scss.scss'
import '@/babel'
import React from 'react'
import {render} from 'react-dom'
const post = new Post('Webpack post title', logo)


/*$('pre').addClass('code').html(post.toString())*/

const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>
        <hr/>
        <div className="logo"/>
        <hr/>
        <pre/>
        <hr/>
        <div className="box">
            <h2>Less</h2>
        </div>

        <div className="card">
            <h2>Sass</h2>
        </div>
    </div>
)
render(<App />, document.getElementById('app'))