import React, { useId } from "react"

const EmailForm = () => {
    const id = useId()

    return (
        <>
            <label htmlFor={id}>Name</label>
            <input type="text" id={id} />
            <br />
            <label htmlFor={`${id}-emial`}>Email</label>
            <input type="text" id={`${id}-emial`} />
        </>
    )
}

export default EmailForm