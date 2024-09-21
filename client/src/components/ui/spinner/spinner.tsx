import loading from '@assets/loading.gif';

export function Spinner() {
    return (
        <div className="m-auto">
            <img src={loading} alt="Loading animation" />
        </div>
    );
}