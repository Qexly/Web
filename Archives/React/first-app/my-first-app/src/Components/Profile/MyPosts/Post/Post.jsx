import s from './Post.module.css';
import ava from './imgs/ava.png'

function Post(props) {
    return (
        <div className={s.item}>
            <img src={ava} />
            {props.message}
            <div>
                <span>like: {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;