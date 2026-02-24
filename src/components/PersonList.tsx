type PersonListProps=
{
    names:{
        fname:string;
        lname:string
    }[];
}
export const PersonList=(props:PersonListProps)=>{
    return(
        <div>
        {props.names.map(name=>{
            return(
                <h1>{name.fname} {name.lname}</h1>
            )
        }
        )

        }

        </div>
    )
}