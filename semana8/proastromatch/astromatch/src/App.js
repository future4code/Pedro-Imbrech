
import React from 'react'
import { create } from 'jss'
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Pageuno from './components/Pageuno'

const generateClassName = createGenerateClassName()
const jss = create({
	...jssPreset(),
	insertionPoint: document.getElementById('jss-insertion-point'),
})

const theme = createMuiTheme({
	palette: {
		primary: {
		main: "#6A34BB" //ESTE COLOR PUEDE CAMBIAR
		},
		secondary: {
		main:"#ffffff" //ESTE COLOR PUEDE CAMBIAR 
		}
	}
})

function App() {
	return (

			<MuiThemeProvider theme={theme}>
				<CssBaseline />
			
			
        <Pageuno/>

			</MuiThemeProvider>

	)
}

export default App




















   
