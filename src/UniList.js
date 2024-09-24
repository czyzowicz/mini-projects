export const UniList = ({list}) => {

    return (
        <ul>
            {list.map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    )
}