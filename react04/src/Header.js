function Header(props) {
    return (
        <header>
            <h1>대문자로 시작하는 Header는 component..</h1>
            <p>header는 태그</p>
            <ul>
                {props.monga}
                {/* <li>{props.member[0].name}</li>
                <li>{props.member[1].name}</li>
                <li>{props.member[2].name}</li>
                <li>{props.member[3].name}</li> */}
                {props.member.map(el => <li key={el.id}>{el.name}</li>)}
            </ul>
        </header>
    )
}

export default Header;