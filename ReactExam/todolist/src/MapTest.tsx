const MapTest = () => {
    const fruits = ['apple', 'banana', 'orange', 'kiwi']
    return (
        <div>
            {
                // map((인자1, 인자2)) => 인자1에 fruits값의 순서대로 들어온다, 인자2는 index!
                fruits.map((fruit) => (
                    <li>{fruit}</li>
                ))
            }
        </div>
    )
}

export default MapTest;