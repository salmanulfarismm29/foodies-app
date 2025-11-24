export default function MealsDetailPage({params}) {
    return (
        <>
            <h1>Meals Detail Page</h1>
            <p>{params.slug}</p>
        </>
    )
}