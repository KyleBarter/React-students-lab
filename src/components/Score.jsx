export default function Score({ score }) {
    return (
        <>
            <li>{score.score}</li>
            <li>{score.date}</li>
        </>
    )
}