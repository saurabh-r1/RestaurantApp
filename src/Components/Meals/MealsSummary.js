import { Fragment } from "react";
import './MealsSummary.css'

const MealsSummary=props=>{
    return(
        <Fragment>
            <div className="summary-cards">
                <h2>
                    Delecious food, Delivered to you
                </h2>
                <p>
                    Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch our dinner at home.
                </p>
                <p>
                    All our meals are cooked with high quality ingradiants, just in time and of course by experienced chef.
                </p>
            </div>
        </Fragment>
    )
};

export default MealsSummary;