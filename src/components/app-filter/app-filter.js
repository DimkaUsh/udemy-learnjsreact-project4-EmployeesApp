import { Component } from 'react'
import './app-filter.css'

class AppFilter extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
           filter: 'all' 
        }
    }

    onUpdateLikes = (e) => {
        const buttons = document.querySelectorAll('.btn')
        buttons.forEach(button => {
                button.classList.remove('btn-light')
                button.classList.add('btn-outline-light')
        })
        e.target.classList.remove('btn-outline-light')
        e.target.classList.add('btn-light')

        const filter = e.target.getAttribute('data-button')
        this.setState({filter})
        this.props.onUpdateLikes(filter)
    }
    
    render() {
        return (
            <div className="btn-group">
                <button
                className="btn btn-light"
                type="button"
                data-button='all'
                onClick={this.onUpdateLikes}
                >
                    Все сотрудники
                </button>
                <button 
                className="btn btn-outline-light"
                type="button"
                data-button='likes'
                onClick={this.onUpdateLikes}
                >
                    На повышение
                </button>
                <button 
                className="btn btn-outline-light"
                type="button"
                data-button='more1000'
                onClick={this.onUpdateLikes}
                >
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter