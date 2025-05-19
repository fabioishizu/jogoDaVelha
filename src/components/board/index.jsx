import Square from '../square/index.jsx'
import '../../assets/styles.css'

export default function()
{
    return <>
        <div className='board-row'>
            <Square textSquare={'1'}></Square>
            <Square textSquare={'2'}></Square>
            <Square textSquare={'3'}></Square>
        </div>
        <div className='board-row'>
            <Square textSquare={'4'}></Square>
            <Square textSquare={'5'}></Square>
            <Square textSquare={'6'}></Square>
        </div>
        <div className='board-row'>
            <Square textSquare={'7'}></Square>
            <Square textSquare={'8'}></Square>
            <Square textSquare={'9'}></Square>
        </div>
    </>;
}