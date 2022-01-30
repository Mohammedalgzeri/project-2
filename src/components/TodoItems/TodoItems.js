import react from "react";
 import './TodoItems.css'
const TodoItems = (props) => {
    const {items , deleteItem} = props;
    let length = items.length;
    const ListItems = length ? (
        items.map((item, i) => {
            return(
                <div key={i}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={ () => deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (
        <p> There is no item to show</p>
    )
    return (
        <div className="ListItems">
            <div>
                <span className="name title">name</span>
                <span className="age title">age</span>
                <span className="action title">Action</span>
            </div>
            {ListItems}
        </div>
    )
}

export default TodoItems;