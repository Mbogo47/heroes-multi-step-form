import '../styles/selectplan.css'

function Selectplan({ image, name, plan, duration}) {
    return (
        <div className="description">
            <div>
                {image}
            </div>
            <div className="description-plan">
                <p className='description-plan-name'>{name}</p>
                <p className='description-plan-plan1'>{plan}</p>
                <p className='description-plan-duration'>{duration}</p>
            </div>

        </div>
    )
}

export default Selectplan