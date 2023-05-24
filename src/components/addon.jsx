import "../styles/addon.css"

function Addon({ service, storage, time }) {
    return (
        <div>
            <form action="" className="addon">
                <input type="checkbox"  />
                <div className="add-content">
                    <span className="add-content-service" >{service}</span>
                    <p className="add-content-storage">{storage}</p>
                </div>
                <span className="add-content-time">{time}</span>
            </form>


        </div>
    )
}

export default Addon