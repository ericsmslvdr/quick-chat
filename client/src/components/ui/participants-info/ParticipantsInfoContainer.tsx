import Card from '../card/Card';
import CurrentUserBox from './CurrentUserBox';
import OtherUserBox from './OtherUserBox';
import style from './participants.module.css';

function ParticipantsInfoContainer() {
    return (
        <Card className={style["participants-card"]}>
            <CurrentUserBox />
            <span className={style["participants-card__text"]}>Your'e chatting with:</span>
            <OtherUserBox />
        </Card>
    )
}

export default ParticipantsInfoContainer