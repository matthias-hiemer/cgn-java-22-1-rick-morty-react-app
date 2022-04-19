import {ChangeEventHandler} from "react";
import './ActionBar.css'

export type ActionBarProps = {
    searchText: string,
    onSearchInputChange: ChangeEventHandler<HTMLInputElement>
}

export default function ActionBar({searchText, onSearchInputChange}: ActionBarProps) {
    return (
        <div className={"action-bar"}>
            <input className={"action-bar__search-input"} placeholder={"Search"} value={searchText}
                   onChange={onSearchInputChange}/>
        </div>)
}
