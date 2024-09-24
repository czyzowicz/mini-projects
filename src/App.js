import './App.css';
import {Counter} from "./Counter";
import {ToggleSwitch} from "./ToggleSwitch";
import {ToDoList} from "./ToDoList";
import {SearchBar} from "./SearchBar";
import {useEffect, useState} from "react";
import {UniList} from "./UniList";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('');

    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country=Poland')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>

     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const filteredData = data.filter(object => {
        return object.name.toLowerCase().includes(value)
    })


    return (
        <div className="App">
            <Counter/>
            <br/>
            <ToggleSwitch/>
            <br/>
            <ToDoList />
            <br/>
            {/*<DataFetcher />*/}
            <br/>
            <SearchBar value={value} onChange={onChange} />
            <br/>
            <UniList list={filteredData} />
        </div>
    );
}

export default App;
