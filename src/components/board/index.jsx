import Square from '../square/index.jsx'
import '../../assets/styles.css'

export default function board()
{
    return <>
        <div className='board-row'>
            <Square/>
            <Square/>
            <Square/>
        </div>
        <div className='board-row'>
            <Square/>
            <Square/>
            <Square/>
        </div>
        <div className='board-row'>
            <Square/>
            <Square/>
            <Square/>
        </div>
    </>;
}