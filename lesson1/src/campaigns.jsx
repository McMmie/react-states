
function Campaigns() {
    const camps = ["CocaCola", "Pepsi", "Sprite", "Fanta"];
    const listCamp = camps.map(camp => <li>{camp}</li>);

    return (
        <>
        <ol>{listCamp}</ol>
        </>
    )
}

export default Campaigns;