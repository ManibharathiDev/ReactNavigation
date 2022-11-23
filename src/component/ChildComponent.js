import {useParams} from 'react-router-dom'
const ChildComponent = () => {

    let {id} = useParams();

    if(id === "home")
    {
        return(
            <div>
                I am from Home
            </div>
        )
    }
    else if(id === "about")
    {
        return(
            <div>
                I am from About
            </div>
        )
    }
    else{
        return(
            <div>
                I am from general
            </div>
        )
    }

    // return(
    //     <div>
            
    //         {id}
    //     </div>
    // )
}
export default ChildComponent;