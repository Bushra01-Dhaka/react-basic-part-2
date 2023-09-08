import './Employee.css'
export default function Worker({worker}) {
   const {name, email,address, phone} = worker;
    return(
        <div className='box'>
            <h3>Name: {name}</h3>
            <p>Email: {email} </p>
            <p>Street: {address?.street}</p>
            <p>City: {address?.city}</p>
            <p><small>Phone No: {phone}</small> </p>

        </div>
    )
}