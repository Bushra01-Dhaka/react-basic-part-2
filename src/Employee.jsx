import { useEffect, useState } from "react"
import Worker from "./worker";

export default function Employees () {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setEmployee(data));

    }, [])

    return(
        <div>
        <h2>Total Employee: {employee.length}</h2>
        {
            employee.map( employees => <Worker worker={employees}></Worker>)
        }
        </div>
    )
}