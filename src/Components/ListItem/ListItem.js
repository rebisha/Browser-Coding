import React, { useState } from "react";
import styles from "./listItem.scss";

const ListItem = ({ name, hasChild, children }) => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <li className={hasChild ? styles.hasChildren : styles.hasNoChildren}>
            <div onClick={handleClick}>{name}</div>
            <ul>
                {
                    // eslint-disable-next-line max-len
                    children && toggle && children.map(item => { return <ListItem key={item.id} name={item.name} hasChild={!!item.children} children={item.children} /> })
                }
            </ul>
        </li>
    );
}

export default ListItem;