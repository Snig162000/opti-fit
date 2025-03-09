import Link from "next/link";

const Meals = () => {
    return(
    <>
    <h1>Hey!! You&apos;ve reached the meals page.</h1>
    <Link href ={'/meals/1'}> View Meal 1</Link>
    <Link href ={'/meals/22'}> View Meal 22</Link>
    </>
)};

export default Meals;