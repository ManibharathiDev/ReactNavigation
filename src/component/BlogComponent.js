import {useParams} from 'react-router-dom';
const BlogComponent = () => {
    let {id} = useParams();

    

    return(
        <div>
            This is {id} Blog
        </div>
    );

}
export default BlogComponent;