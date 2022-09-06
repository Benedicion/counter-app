function Button(props){

    const increaseChange = ()=>{
        props.increase();
    }

    const decreaseChange= ()=>{
        props.decrease();
    }

    return(

        <div>

            <button onClick={increaseChange}  style={{background:'green'}}>+</button>
            <button onClick={decreaseChange} style={{background:'red'}}>-</button>
        </div>
    )
}

export default Button