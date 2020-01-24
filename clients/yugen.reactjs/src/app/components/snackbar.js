import React from 'react'
import '../styles/components/snackbar.scss'

export class Snackbar extends React.PureComponent {
    state = {
        isActive: false,
    }
    message = ''

    componentDidMount() {
        if(this.props.msg)
        {
            this.openSnackBar(this.props.msg)
        }
    }

    openSnackBar = (message = 'Something went wrong...') => {
        this.message = message
        this.setState({ isActive: true}, () => {
            setTimeout(() => {
                this.setState({isActive: false})
            }, 3000)
        })
    }
    render() {
        const { isActive } = this.state
        return (
            <div className = {isActive ? "snackbar show" : "snackbar"}>
                {this.message}
            </div>
        )
    }
}