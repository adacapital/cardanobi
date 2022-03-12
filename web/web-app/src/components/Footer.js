
import React from 'react'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div class="page-header bg-dark">
            <div class="col d-flex justify-content-center">
                <div class="badge rounded-pill bg-success-bright"><strong>Copyright © {year} ADA Capital. All rights reserved.</strong></div>
            </div>
        </div>
    )
}

export default Footer

