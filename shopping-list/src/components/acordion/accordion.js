import React, {useState, useEffect} from 'react';
import Panel from "../panel/panel";

function Accordion(props) {
    const [items, setItems] = useState([]);
    const [panel, setPanel] = useState({
        visible: false,
        data: []
    });

    useEffect(() => {
        setItems(props.data);
    }, [props.data]);

    const updateItem = (index) => {
        let newItems = items.map(item => {
            return {
                ...item,
                isExpanded: false
            }
        });
        newItems[index].isExpanded = !newItems[index].isExpanded;
        setItems(newItems)
    }

    const openPanel = (variants) => {
        setPanel({
            data: variants,
            visible:true
        })
    };

    const updateChild = (i,y) => {
        let newItems = items.map(item => {
            return {
                ...item,
                items: item.items.map(product => {
                    return {
                        ...product,
                        isExpanded: false
                    }
                })
            }
        });
        newItems[i].items[y].isExpanded = !newItems[i].items[y].isExpanded;
        setItems(newItems)
    }

    return (
        <div className="accordion">
            {
                items.map((item, i) => {
                    return (
                        <div className={`accordion-item ${item.isExpanded ? "accordion-expanded" : ""}`} key={item.name}>
                            <div className="accordion-header" onClick={() => updateItem(i)}>{item.name}</div>
                            <div className="accordion-content">
                                <div className="accordion">
                                    {
                                        (item.items || []).map((child, y) => {
                                            return(
                                                <div className={`accordion-item ${child.isExpanded ? "accordion-expanded" : ""}`} key={child.name}>
                                                    <div className="accordion-header" onClick={() => updateChild(i,y)}>{child.name}</div>
                                                    <div className="accordion-content">
                                                        <ul>
                                                            {
                                                                (child.items || []).map(product => {
                                                                    return(<li key={product.name} onClick={() => openPanel(product.variants)}>{product.name}</li>)
                                                                })
                                                            }
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
                })
            }
            <Panel visible={panel.visible} data={panel.data}/>
        </div>
    );
}

export default Accordion;