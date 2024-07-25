import React from 'react';
import Button from './Button';

const ButtonList = () => {
    const list = ["All", "Gaming", "Song", "Live", "Cricket", "Soccer", "Cooking", "Gifting"];

    return (
        <div className="flex items-center">
            <div className="flex px-3 py-1 m-2">
                {list.map((item, index) => (
                    <Button key={index} name={item} />
                ))}
            </div>
        </div>
    );
};

export default ButtonList;
