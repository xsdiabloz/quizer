export default function editTasks(tasks, setTasks) {
    return (id, data) => {
        setTasks([...tasks].map((val) =>
            val.id === id ? { ...val, ...data } : val
        ))
    }
}