import Score from "./Score";

export default function Student({ student }) {
    return(
        <div class="student-list">
            <h2>Name: {student.name}</h2>
            <p>Bio: {student.bio}</p>
            <h3>Scores: </h3>
            <ul>
                {student.scores.map((score, idx) => {
                    return <Score key={idx} score={score} />
                    }
                )}
            </ul>
        </div>
    )
}