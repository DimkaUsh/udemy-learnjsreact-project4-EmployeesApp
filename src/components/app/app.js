import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css'


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data : [
                {name: 'John S.', salary: 1000, increase: true, like: true, id: 1},
                {name: 'Alex M.', salary: 800, increase: false, like: false, id: 2},
                {name: 'Carl D.', salary: 1850, increase: false, like: false, id: 3},
            ],

            numberEmployees: 3,
            numberOfLike: 1,
        }
    }

    deleteItem = id => {
        this.setState(({data}) => {
            return {
                data : data.filter(item => item.id !== id)
            }
        })
        this.changeNumberEmploeers()
    }

    addItem = (name, salary) => {

        this.setState(({data}) => {

            let index = null;
            for (let i=0; ;i++){
                if (data[i] === undefined){
                    index = i+1
                    break
                }
                if (data[i].id !== i + 1) {
                    index = i+1
                    break
                }
            }

            const newItem = {'name': name, 'salary': salary, 'increase': false, like: false, 'id': index}

            return {
                data: data.concat(newItem)
            }
        })
        this.changeNumberEmploeers()
    }

    onToggleIncrease = id => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
    }

    onToggleLike = id => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, like: !item.like}
                }
                return item
            })
        }))
        this.numberOfLikes()
    }

    changeNumberEmploeers = () => {
        this.setState(({data}) => {
            return {numberEmployees: data.length}
        })
    }

    numberOfLikes = () => {
        this.setState(({data}) => {
            let count = 0;
            data.forEach(item => {
                if (item.like === true) {count++}
            })
            return {numberOfLike: count}
        })
    }

    render () {

        const {data, numberEmployees, numberOfLike} = this.state

        return (
            <div className='app'>
                <AppInfo 
                numberEmployees={numberEmployees}
                numberOfLike={numberOfLike}
                />
    
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleLike={this.onToggleLike}/>
                <EmployeesAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App