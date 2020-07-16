import React, {useState, useEffect} from 'react';

function Panel(props) {
    const [visible, setVisibility] = useState(false);
    const [data, setContent] = useState([]);

    useEffect(() => {
        setVisibility(props.visible);
        setContent(props.data)
    }, [props.data, props.visible]);

    const updateItem = (index) => {
        let newItems = data.map(item => {
            return {
                ...item,
                isExpanded: false
            }
        });
        newItems[index].isExpanded = !newItems[index].isExpanded;
        setContent(newItems)
    }

    const closePanel = () => {
        setVisibility(false);
    }

    return (
        <div className={`panel ${visible ? "panel-visible" : ""}`}>
            <div className="panel-content">
                <span className="icon-cross" onClick={() => closePanel()}/>
                <div className="accordion">
                    {
                        (data || []).map((item, i) => {
                            return(
                                <div className={`accordion-item ${item.isExpanded ? "accordion-expanded" : ""}`} key={item.name}>
                                    <div className="accordion-header" onClick={() => updateItem(i)}>{item.name || "no description available"}</div>
                                    <div className="accordion-content">
                                        <ul>
                                            <li>Price : {item.price}</li>
                                            <li>Number : {item.sku}</li>
                                            <li>In stock : {item.inStock ? "yes" : "no"}</li>
                                            <li>In store only : {item.inStoreOnly ? "yes" : "no"}</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Panel;