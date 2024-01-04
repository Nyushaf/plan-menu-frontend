import axios from 'axios';

const myURL= "https://meal-plan-llux.onrender.com";

const getAllMeals = (setMyMeal) => {
    axios.get(`${myURL}`)
    .then(({data}) => {
        setMyMeal(data);
    })
}

const addMeal = (title, setTitle, setMyMeal) => {
    axios.post(`${myURL}/saveMeals`, {title} )
    .then(() => {
        setTitle("");
        getAllMeals(setMyMeal);
    })
}

const editMeal = (mealId, title, setTitle, setMyMeal, setEditing) => {
    axios.post(`${myURL}/editMeal`, {_id: mealId, title})
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllMeals(setMyMeal)
    })
}

const deleteMeal = (_id, setMyMeal) => {
    axios.post(`${myURL}/deleteMeal`, {_id})
    .then((data) => {
        console.log(data)
        getAllMeals(setMyMeal)
    })
}

export {getAllMeals, addMeal, editMeal, deleteMeal};