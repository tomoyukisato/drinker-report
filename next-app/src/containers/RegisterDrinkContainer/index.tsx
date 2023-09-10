
import { RegisterDrink } from "@/components/features/RegisterDrink";
import { useCreateDrinks } from "@/hooks/drink";
import { SelectChangeEvent } from "@mui/material";
import React, { ChangeEvent, MouseEvent } from "react";

export const RegisterDrinkContainer = () => {
    // const { data } = useCocktail();
    console.log("container");
    // console.log(data);
    const [inputedDrinkName, setDrinkName] = React.useState('');
    const [isNameError, setIsNameError] = React.useState(false);
    const [selectedDrinkType, setDrinkType] = React.useState('');
    const [isSelectTypeError, setIsSelectTypeError] = React.useState(false);
    const [selectedMlPerOneDrink, setMlPerOneDrink] = React.useState('');
    const [isSelectAmountError, setIsSelectAmountError] = React.useState(false);
    const [isDisableSubmit, setIsDisableSubmit] = React.useState(false);

    const handleChangeDrinkName = (event: ChangeEvent<HTMLInputElement>) => {
        setDrinkName(event.target.value);
        event.target.value === "" ? setIsNameError(true) : setIsNameError(false);
        console.log(event.target.value)
        console.log(inputedDrinkName)
    };
    const handleChangeDrinkTypeSelectBox = (event: SelectChangeEvent) => {
        setDrinkType(event.target.value);
        event.target.value === "" ? setIsSelectAmountError(true) : setIsSelectAmountError(false);
    };
    const handleChangeMlPerOneDrinkSelectBox = (event: SelectChangeEvent) => {
        setMlPerOneDrink(event.target.value);
        event.target.value === "" ? setIsSelectTypeError(true) : setIsSelectTypeError(false);
    };

    const handleRequestRegisterButton = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("register");
        let drink = JSON.stringify({
            name: inputedDrinkName,
            drink_type: selectedDrinkType,
            ml_per_one_drink: selectedMlPerOneDrink
        })
        !checkViolation() ? useCreateDrinks(drink) : console.log("b");
        // useCreateDrinks(drink);
    };

    function checkViolation(): boolean {
        inputedDrinkName === "" ? setIsNameError(true) : setIsNameError(false);
        selectedDrinkType === "" ? setIsSelectTypeError(true) : setIsSelectTypeError(false);
        selectedMlPerOneDrink === "" ? setIsSelectAmountError(true) : setIsSelectAmountError(false);
        if (inputedDrinkName === "" || selectedDrinkType === "" || selectedMlPerOneDrink === "") {
            setIsDisableSubmit(true);
            return true;
        } else {
            setIsDisableSubmit(false);
            return false;
        }
    }
    return <RegisterDrink
        drinkName={inputedDrinkName}
        isNameError={isNameError}
        mlPerOneDrink={selectedMlPerOneDrink}
        isSelectAmountError={isSelectAmountError}
        drinkType={selectedDrinkType}
        isSelectTypeError={isSelectTypeError}
        isDisableSubmit={isDisableSubmit}
        handleChangeDrinkName={handleChangeDrinkName}
        handleChangeMlPerOneDrinkSelectBox={handleChangeMlPerOneDrinkSelectBox}
        handleChangeDrinkTypeSelectBox={handleChangeDrinkTypeSelectBox}
        handleRequestRegisterButton={handleRequestRegisterButton}
    />;

};