import React, { useMemo } from 'react';

export default function useSearchtasks(tasks, search) {
    return useMemo(() => {
        console.log("task");

        if (search) {
            const lowerSearch = search.toLowerCase();
            return [...tasks].filter(
                (val) =>
                    val.title.toLowerCase().includes(lowerSearch) ||
                    val.desc.toLowerCase().includes(lowerSearch)
            );
        }
        return tasks;
    }, [tasks, search])
}