export interface MealDetailProps {
    params: {id: string}
}

const MealDetail = ({params}: MealDetailProps) => {
    console.log(params.id, "checking id")
    return (
        <h1>Your meal id: {params.id}</h1>
    );
}

export default MealDetail;