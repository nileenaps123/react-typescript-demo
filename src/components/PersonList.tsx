import {PersonProps} from './person.types'

type PersonListProps={
    names:PersonProps[];// {name:Name} []  {name:{fname:,lname:}},{name:{fname:,lname:}},
}

export const PersonList=(props:PersonListProps)=>{
    return(
        <div>
        {props.names.map(name=>{
            return(<>{console.log(name)}</>
                
                //<h1>{name.fname} {name.lname}</h1>
            )
        }
        )

        }

        </div>
    )
}