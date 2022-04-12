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
                {name: 'John S.', salary: 1000, increase: true, id: 1},
                {name: 'Alex M.', salary: 800, increase: false, id: 2},
                {name: 'Carl D.', salary: 1850, increase: false, id: 3},
            ],            
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

            const newItem = {'name': name, 'salary': salary, 'increase': false, 'id': index}

            return {
                data: data.concat(newItem)
            }
        })

        console.log(1)
    }

    render () {

        const {data} = this.state

        return (
            <div className='app'>
                <AppInfo/>
    
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={data}
                onDelete={this.deleteItem}/>
                <EmployeesAddForm
                data={data}
                onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App