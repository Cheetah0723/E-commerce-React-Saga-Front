import { useState, useEffect } from 'react';

export default function SizeTabController(sizeDisplay) {
    const [size, setSize] = useState('');
    const [availability, setAvailalibity] = useState([true, true, true, true, true])

    useEffect(() => {
        if (sizeDisplay !== undefined) {
            setAvailalibity(sizeDisplay)
        }
    }, [sizeDisplay])

    return { size, setSize, availability }

}