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
            term: '',
            filter: 'all',
        }
    }

    deleteItem = id => {
        this.setState(({data}) => {
            return {
                data : data.filter(item => item.id !== id)
            }
        })
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
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterData = (items, filter) => {
        if (filter === 'all') {return items};
        if (filter === 'likes') {
            return items.filter(item => {
                return item.like === true
            })
        }
        if (filter === 'more1000') {
            return items.filter(item => {
                return item.salary > 1000
            })
        }
    }

    onUpdateLikes = (filter) => {
        this.setState({filter})
    }

    render () {

        const {data, term, filter} = this.state

        const emploeers = data.length;
        const increase = data.filter(item => item.increase === true).length

        const visibleData = this.filterData(this.searchEmp(data, term), filter);

        return (
            <div className='app'>
                <AppInfo 
                emploeers={emploeers}
                increase={increase}
                />
    
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUpdateLikes={this.onUpdateLikes}/>
                </div>
    
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleProp}
                onToggleLike={this.onToggleProp}/>
                <EmployeesAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App