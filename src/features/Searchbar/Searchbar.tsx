
import { useState } from 'react';
import { Input, InputGroup, InputLeftElement, InputRightElement, IconButton, Box } from '@chakra-ui/react'
import { SearchIcon, SmallCloseIcon } from '@chakra-ui/icons'

const Searchbar = () => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (event: any) => setSearch(event.target.value);

    return (
        <InputGroup w="650px" >
            <InputLeftElement pointerEvents={"none"} children={<SearchIcon />} />
            <Input placeholder="Search reddit..." value={search} onChange={handleChange} focusBorderColor='#0079d3' borderColor="#EDEFF1" />
            <InputRightElement>
                {search.length > 0 && <IconButton aria-label='clear search' variant='unstyled' icon={<SmallCloseIcon />} onClick={() => setSearch("")} />}
            </InputRightElement>
        </InputGroup >
    )
}

export default Searchbar