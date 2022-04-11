import EmployeesListItem from "../employees-list-item/employees-list-item.js";
import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(el => {
        const {id, ...itemProps} = el;
        return (
            <EmployeesListItem key={id} {...itemProps}/>    
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList