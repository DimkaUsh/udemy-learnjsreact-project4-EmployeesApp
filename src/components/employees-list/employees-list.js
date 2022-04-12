import EmployeesListItem from "../employees-list-item/employees-list-item.js";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {

    const elements = data.map(el => {
        const {id, ...itemProps} = el;
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id, 'increase')}
            onToggleLike={() => onToggleLike(id, 'like')}/>    
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList