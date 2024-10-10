'use client'

import { useState } from "react"

export const useFormInput = (initalValue: any) => {
    const [value, setValue] = useState(initalValue)

    function handleChange (e: any) {
        setValue(e.target.value)
    }

    const inputProps = {
        value: value,
        onChange: handleChange
    }

    return inputProps;
}