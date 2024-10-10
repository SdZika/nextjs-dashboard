'use client'

import { useFormInput } from "../lib/hooks/useFormInput"

export const TestForm = () => {

    const firstNameProps = useFormInput("Marko");
    const lastNameProps = useFormInput("Zivkovic")
 

    return (
        <>
            <label>First name<input {...firstNameProps}/></label>
            <label>Last name<input {...lastNameProps}/></label>
            <p>Good Morning, {firstNameProps.value} {lastNameProps.value}</p>
        </>
    )

}