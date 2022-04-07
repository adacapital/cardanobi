
import React from 'react'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div class="page-header bg-darker">
            <div class="col d-flex justify-content-center">
                <div class="badge rounded-pill bg-success-bright-orange"><strong>Copyright © {year} CardanoBI. All rights reserved.</strong></div>
            </div>
        </div>
    )
}

export default Footer

