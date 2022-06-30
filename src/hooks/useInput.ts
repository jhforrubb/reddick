import React, { useState } from 'react';

function useInput(initialValue = '') {
    const [value, setValue] = useState<string>(initialValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

    const handleSet = (str: string) => setValue(str);

    return [value, handleChange, handleSet];
}

export default useInput;
