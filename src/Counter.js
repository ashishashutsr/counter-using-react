
function Counter(props) {
    //contents inside props (count and title) are assigned to individual variables
    const {count,title} = props  
    return (
        <div align='center'>
            <h2>{title} : {count}</h2>
        </div>
    )
}

export default Counter