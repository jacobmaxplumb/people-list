import { useState } from "react"

export const Person = ({name, address}) => {
    const [show, setShow] = useState(false);
    return <div onClick={() => setShow(!show)}>
        <div>{name}</div>
        {show && <div>{address}</div>}
        <br/>
    </div>
}