import {useParams} from 'react-router-dom'
const ChildComponent = () => {

    let {id} = useParams();

    return(
        <div>
            Child Component
            {id}
        </div>
    )
}
export default ChildComponent;