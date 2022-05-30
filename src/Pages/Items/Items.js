import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('item.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <h3 className='text-center text-4xl text-primary font-bold my-5'>Products</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-48'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>

    );
};

export default Items;