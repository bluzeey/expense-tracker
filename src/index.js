import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {SpeechProvider} from '@speechly/react-client'
import {Provider} from './context/context'
ReactDOM.render(
<SpeechProvider appId="39edf9c6-7ba0-4dff-9af9-cd8f1433166f" language="en-US">
<Provider>
<App/>
</Provider>
</SpeechProvider>
,document.getElementById('root'))