import React from "react";
import BackendData from "./data";
import ListItem from "../ListItem/ListItem";

const PageTree = () => {
    return (
        <div>
            {
                BackendData.map(item => {
                    return (
                        <ul key={item.id} >
                            <ListItem name={item.name} hasChild={!!item.children} children={item.children} />
                        </ul>
                    )
                })
            }
        </div>

    );
}

export default PageTree;