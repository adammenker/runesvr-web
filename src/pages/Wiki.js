import React from "react";
import { weapons, beasts } from "../assets/WikiItemData"
import '../styles/WikiTabs.css';

import { Tabs } from 'flowbite-react/lib/cjs/components/Tab';
import WikiItems from '../components/WikiItems';


export default function Wiki() {
    return (
        <div id="tabs-container" >
            <Tabs.Group aria-label="Pills" class="flex text-center flex-wrap border-b border-gray-200 dark:border-gray-700">
                <Tabs.Item title="animals" class="flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 active rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                    <WikiItems wikiItems={beasts} />
                </Tabs.Item>
                <Tabs.Item active={true} title="weapons" class="flex items-center justify-center p-4 text-md font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 active rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                    <WikiItems wikiItems={weapons} />
                </Tabs.Item>
            </Tabs.Group>
        </div>  
    )
}