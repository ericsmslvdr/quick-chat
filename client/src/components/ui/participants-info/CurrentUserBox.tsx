import style from './participants.module.css';
import Card from "../card/Card"

function CurrentUserBox() {
    return (
        <Card>
            <div className={style["card__name"]}>Current user</div>
        </Card>
    )
}

export default CurrentUserBox