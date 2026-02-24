type GreetProps={
    name:string;
    messageCount:number;
    isLoggedIn:boolean
    
}
export const Greet=(props:GreetProps)=>{
    return (
        <div>
        {props.isLoggedIn?<><h1>welcome {props.name}.</h1><h2>You have {props.messageCount} messages</h2></>
        :<h1>'You are not logged in'</h1>
         }
        </div>
    )

}