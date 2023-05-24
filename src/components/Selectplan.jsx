import '../styles/selectplan.css'

function Selectplan({ image, name, plan }) {
    return (
        <div className="description">
            <div>
                {image}
            </div>
            <div className="description-plan">
                <p>{name}</p>
                <p>{plan}</p>
            </div>

        </div>
    )
}

export default Selectplan