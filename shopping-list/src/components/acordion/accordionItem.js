import React, {useState, useEffect} from 'react';

function AccordionItem(props) {

    useEffect(() => {
        console.log(props)
    }, []);

    return (
        <div className={`accordion-item ${props.isExpanded ? "accordion-expanded" : ""}`}>
            <div className="accordion-header" onClick={() => props.onUpdate(props.index)}>{props.header}</div>
            <div className="accordion-content">
                {props.children}
            </div>
        </div>
    );
}

export default AccordionItem;