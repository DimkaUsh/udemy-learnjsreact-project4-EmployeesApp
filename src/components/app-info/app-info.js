import './app-info.css'

const AppInfo = ({numberEmployees, numberOfLike}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {numberEmployees}</h2>
            <h2>Премию получат: {numberOfLike}</h2>
        </div>
    )
}

export default AppInfo