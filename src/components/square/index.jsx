import '../../assets/styles.css'

export default function Square({textSquare})
{
    return <button className="square" onClick={handleClick}>{textSquare}</button>;
}

function handleClick(){
    console.log("Clicked!");
}