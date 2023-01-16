import React from "react";

const UserForm = () => {

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <form>

            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={handleChange} />
            

        </form>
    )

}
