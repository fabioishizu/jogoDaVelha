import Square from '../square/index.jsx'
import '../../assets/styles.css'

export default function board()
{
    return <>
        <div className='board-row'>
            <Square textSquare={'1'}/>
            <Square textSquare={'2'}/>
            <Square textSquare={'3'}/>
        </div>
        <div className='board-row'>
            <Square textSquare={'4'}/>
            <Square textSquare={'5'}/>
            <Square textSquare={'6'}/>
        </div>
        <div className='board-row'>
            <Square textSquare={'7'}/>
            <Square textSquare={'8'}/>
            <Square textSquare={'9'}/>
        </div>
    </>;
}