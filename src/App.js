import './App.css';
import {Counter} from "./Counter";
import {ToggleSwitch} from "./ToggleSwitch";
import {ToDoList} from "./ToDoList";
import {SearchBar} from "./SearchBar";
import {useEffect, useState} from "react";
import {UniList} from "./UniList";
import {DropdownMenu} from "./DropdownMenu";
import {CountdownTimer} from "./CountdownTimer";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('');
    const items = ['Item 1', 'Item 2', 'Item 3'];

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
            <CountdownTimer initialSeconds={10}/>
            <br/>
            <DropdownMenu items={items} />
            <br/>
            <SearchBar value={value} onChange={onChange} />
            <br/>
            <UniList list={filteredData} />
            <br/>
        </div>
    );
}

export default App;
