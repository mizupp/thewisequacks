import React from "react";

const UserForm = () => {

    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        sendName(name);
        console.log(name);
    }

    return (
        <form onSubmit={HandleSubmit}>

            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={handleChange} />
            <button type="submit">Go to room!</button>

        </form>
    )

}
