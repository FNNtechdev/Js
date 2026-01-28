const healthyMealsTracker = {
    meals: [],

    addMeal(name, calories, type, isHealthy) {
        const meal = {
            name,
            calories,
            type, // Breakfast, Lunch, Dinner, Snack
            isHealthy,
            date: new Date().toLocaleDateString()
        };

        this.meals.push(meal);
        console.log("🥗 Meal added:", meal);
    },

    viewMeals() {
        if (this.meals.length === 0) {
            console.log("No meals recorded yet.");
            return;
        }

        console.log("📋 All Meals:");
        this.meals.forEach((meal, index) => {
            console.log(
                `${index + 1}. ${meal.name} | ${meal.calories} kcal | ${meal.type} | ${meal.isHealthy ? "Healthy ✅" : "Unhealthy ❌"} | ${meal.date}`
            );
        });
    },

    healthyMeals() {
        const healthy = this.meals.filter(meal => meal.isHealthy);

        if (healthy.length === 0) {
            console.log("No healthy meals recorded yet.");
            return;
        }

        console.log("💚 Healthy Meals:");
        healthy.forEach(meal => {
            console.log(`- ${meal.name} (${meal.calories} kcal)`);
        });
    },

    totalCalories() {
        const total = this.meals.reduce((sum, meal) => sum + meal.calories, 0);
        console.log("🔥 Total Calories Consumed:", total);
        return total;
    },

    mealsByType(type) {
        const filtered = this.meals.filter(
            meal => meal.type.toLowerCase() === type.toLowerCase()
        );

        if (filtered.length === 0) {
            console.log(`No meals found for: ${type}`);
            return;
        }

        console.log(`🍽️ ${type} Meals:`);
        filtered.forEach(meal => {
            console.log(`- ${meal.name}: ${meal.calories} kcal`);
        });
    }
};
