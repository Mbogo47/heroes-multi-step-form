import "../styles/addon.css"

function Addon({ service, storage, time }) {
    return (
        <div>
            <form action="" className="addon">
                <input type="checkbox" />
                <div className="add-content">
                    <span>{service}</span>
                    <p>{storage}</p>
                </div>
                <span>{time}</span>
            </form>


        </div>
    )
}

export default Addon