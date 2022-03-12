import { useEffect } from 'react';

const IconCard = ({ Icon, iconSize, tabIndex, grp_id, id, text, onItemClick }) => {
    useEffect(() => {
        // console.log('useEffect: ', grp_id);
        if (id.includes("_default")) {
            document.getElementById(id).classList.add("card_focus");
        }
      }, []);

    return (
        <div class="card glow-on-hover" tabIndex={tabIndex} grp_id={grp_id} id={id} onClick={() => { onItemClick(grp_id, id); }}>
            <div>
                {!!Icon && <Icon size={iconSize} />}
            </div>
            <p>{text}</p>
        </div>
    )
}

export default IconCard
