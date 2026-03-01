import {PersonProps} from './person.types'

type PersonListProps={
    names:PersonProps[];// {name:Name} []  {name:{fname:,lname:}},{name:{fname:,lname:}},
}

export const PersonList=(props:PersonListProps)=>{
    return(
        <div>
        {props.names.map(nameList=>{
            return(
                
                <h1>{nameList.name.fname} {nameList.name.lname}</h1>
            )
        }
        )

        }

        </div>
    )
}