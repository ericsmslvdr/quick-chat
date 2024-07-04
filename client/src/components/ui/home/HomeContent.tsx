import style from './home.module.css';
import CreateProfileForm from '../form/CreateProfileForm';

const HomeDescription = () => {
    return (
        <div className={style["home-container"]}>
            <h1>TaraChat</h1>
            <hr />
            <p>Welcome to TaraChat! <br />Please enter your information to get started.</p>
            <br />
            <CreateProfileForm />
        </div>
    )
}

export default HomeDescription