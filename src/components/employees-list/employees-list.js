import EmployeesListItem from "../employees-list-item/employees-list-item.js";
import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(el => {
        return (
            <EmployeesListItem {...el}/>    
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList