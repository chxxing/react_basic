const Main = ({ dog, work }) => {
    return (
        <main>
            {dog}는 {work}를 합니다.
        </main>
    )
}

// 전달받은 값이 없을 때 기본으로 전해주는 값
Main.defaultProps = {
    work: '산책하기'
}
export default Main;