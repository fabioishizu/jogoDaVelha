import '../../assets/styles.css'
import { useState } from 'react'; 

export default function Square()
{
    const [textSquare, setTextSquare] = useState(null);
    return <button className="square" onClick={handleClick}>{textSquare}</button>;

    function handleClick()
    {
        setTextSquare('X');
    }
}

