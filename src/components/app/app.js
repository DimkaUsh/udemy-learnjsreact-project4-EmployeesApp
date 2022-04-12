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
            // const index = data.findIndex(elem => elem.id === id);

            return {
                data : data.filter(item => item.id !== id)
            }
        })
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
                <EmployeesAddForm/>
            </div>
        )
    }
}

export default App