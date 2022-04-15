import './Button.css'

export default function Button(props) {
    
    const myClass = `button${props.type}`
    console.log(myClass)
    return (
        <button className={myClass} onClick={props.handleClick}>{props.children}</button>
    )
}