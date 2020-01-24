import React from 'react'
import { Snackbar } from './components/snackbar'

class App extends React.Component {
  snackbarRef = React.createRef()

  _showSnackbarHandler = (msg = 'Button Pressed... ') => {
    this.snackbarRef.current.openSnackBar(msg)
  }
  render() {
      return (
        <div>
          <h1>Hello World!</h1>
          <button onClick={() => this._showSnackbarHandler()}>Open Snackbar</button>
          <button onClick={() => this._showSnackbarHandler("Button new ")}>Another Button </button>
          <Snackbar ref={this.snackbarRef} />
          <Snackbar msg="Failed to open file" />
        </div>
    )
  }
}

export default App;