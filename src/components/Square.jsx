export default function Square({ value, onSquareClick }){

    // const [value, setValue] = useState('');
  
    // function handleClick(){
    //   setValue('X');
    // }
  
    return <button className='square' onClick={onSquareClick}>{value}</button>
  }