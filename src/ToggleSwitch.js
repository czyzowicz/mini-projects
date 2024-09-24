import {useState} from "react";

export const ToggleSwitch =()=> {

    const [toggleSwitch, setToggleSwitch] = useState(false);


    return (
        <div>
            <button onClick={()=> setToggleSwitch(!toggleSwitch)} >{toggleSwitch ? 'true' : "false"}</button>
        </div>
    )

}