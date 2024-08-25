import style from './home.module.css';
import CreateProfileForm from '../form/CreateProfileForm';

const HomeDescription = () => {
    return (
        <div className={style["home-container"]}>
            <h1>Stranger Chat</h1>
            <hr />
            <p>Welcome to Stranger Chat! <br />Please enter your information to get started.</p>
            <br />
            <CreateProfileForm />
        </div>
    )
}

export default HomeDescription