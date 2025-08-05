export default function deleteTasks(tasks, setTasks) {
    return (id) => { setTasks([...tasks].filter((val) => val.id !== id)); }

}