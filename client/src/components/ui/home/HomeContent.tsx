import style from './home.module.css';
import CreateProfileForm from '../form/CreateProfileForm';

function HomeDescription() {
    return (
        <div className={style["home-container"]}>
            <h1>Quick Chat</h1>
            <hr />
            <p>Welcome to Quick Chat! <br />Please enter your information to get started.</p>
            <br />
            <CreateProfileForm />
        </div>
    )
}

export default HomeDescription