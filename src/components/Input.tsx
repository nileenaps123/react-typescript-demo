type InputProps={
    value:string;
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}
export const Input=(props:InputProps)=>{
    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        console.log(e);

    }
    return (
        <div>
            <input type='text' value={props.value} onChange={handleInputChange}/>
        </div>
    )
}