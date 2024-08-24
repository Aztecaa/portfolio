import React, { useState } from 'react';
import '../styles/Tooltip.css'; // Importamos el archivo de estilos

const Tooltip = ({ children, imageUrl, tooltipText }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="tooltip-container"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && (
                <div className="tooltip opacity-color">
                    <img src={imageUrl} alt="Tooltip" className="tooltip-image" />
                </div>
            )}
        </div>
    );
};

export default Tooltip;