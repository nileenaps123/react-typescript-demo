type GreetProps={
    name:string;
    messageCount?:number;
    isLoggedIn:boolean
    
}
export const Greet=(props:GreetProps)=>{
    const {messageCount=0}=props;
    return (
        <div>
        {props.isLoggedIn?<><h1>welcome {props.name}.</h1><h2>You have {messageCount} messages</h2></>
        :<h1>'You are not logged in'</h1>
         }
        </div>
    )

}