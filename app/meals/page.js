import MealItem from "@/components/meals/meal-item";
import classes from './page.module.css'
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getAllMeals } from "@/lib/meals";
export default async function MealsPage() {
    const meals = await getAllMeals();
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals, created{' '}
                <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>Share Your Favorite Recipes</Link>
                </p>
            </header>

            <main className={classes.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    )
}
