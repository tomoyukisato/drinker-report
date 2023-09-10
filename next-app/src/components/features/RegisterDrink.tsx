import { FormControl, Container, OutlinedInput, InputLabel, TextField, Box, Select, MenuItem, SelectChangeEvent, Button, FormHelperText, Alert, AlertTitle } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';


interface InputedDrinkInfo {
    drinkName: string;
    isNameError: boolean;
    mlPerOneDrink: string;
    isSelectAmountError: boolean;
    drinkType: string;
    isSelectTypeError: boolean;
    isDisableSubmit: boolean;
    handleChangeDrinkName: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeMlPerOneDrinkSelectBox: (event: SelectChangeEvent) => void;
    handleChangeDrinkTypeSelectBox: (event: SelectChangeEvent) => void;
    handleRequestRegisterButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const RegisterDrink: React.FC<InputedDrinkInfo> =
    ({ drinkName, isNameError, mlPerOneDrink, isSelectAmountError,
        drinkType, isSelectTypeError, isDisableSubmit, handleChangeDrinkName, handleChangeDrinkTypeSelectBox, handleChangeMlPerOneDrinkSelectBox, handleRequestRegisterButton }) => {

        const mlPerOneDrinks = [
            {
                value: 350,
                label: '350ml',
            },
            {
                value: 500,
                label: '500ml',
            },
            {
                value: 1000,
                label: '1000ml(1L)',
            },
        ];
        const drinkTypes = [
            {
                value: "ALCOHOL",
                label: 'アルコール',
            },
            {
                value: "NON_ALCOHOL",
                label: 'ノンアルコール',
            },
        ]
        const inputedDataName = drinkName
        const inputedDataMlPerOneDrink = mlPerOneDrink
        const inputedDataDrinkType = drinkType

        return (
            <Container>
                <h3>ドリンク登録</h3>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount"
                        error={isNameError}>ドリンク名</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="ドリンク名"
                        value={inputedDataName}
                        onChange={handleChangeDrinkName}
                        error={isNameError}
                    />
                    {
                        isNameError ? <FormHelperText id="my-helper-text" error>ドリンク名は必須項目です</FormHelperText>
                            : ""
                    }
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, mt: 5 }}>
                    <InputLabel id="demo-simple-select-label" error={isSelectAmountError}>ドリンク1杯の量（ml）</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inputedDataMlPerOneDrink}
                        label="ドリンク1杯の量（ml）"
                        onChange={handleChangeMlPerOneDrinkSelectBox}
                        error={isSelectAmountError}

                    >
                        {mlPerOneDrinks.map((option, i) => (
                            <MenuItem value={option.value} key={i}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    {
                        isSelectAmountError ?
                            <FormHelperText id="my-helper-text" error>ドリンク1杯の量は選択必須項目です</FormHelperText>
                            : ""
                    }
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, mt: 5 }}>
                    <InputLabel id="demo-simple-select-label" error={isSelectTypeError}>ドリンクの種類</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inputedDataDrinkType}
                        label="ドリンクの種類"
                        onChange={handleChangeDrinkTypeSelectBox}
                        error={isSelectTypeError}
                    >
                        {drinkTypes.map((option, i) => (
                            <MenuItem value={option.value} key={i}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    {
                        isSelectTypeError ?
                            <FormHelperText id="my-helper-text" error>ドリンク1杯の量は選択必須項目です</FormHelperText>
                            : ""
                    }
                </FormControl>
                <Box sx={{ m: 1, mt: 5 }}
                >
                    {
                        isDisableSubmit ?
                            <Alert severity="error">
                                <AlertTitle>入力に誤りがあります</AlertTitle>
                                <strong>入力内容を確認して再度実行してください </strong>
                            </Alert>
                            : ""
                    }
                </Box>
                <Box
                    sx={{ m: 1, mt: 5 }}
                >
                    <Button
                        fullWidth
                        variant="contained"
                        endIcon={<SendIcon />}
                        // onClick={(e) => handleRequestRegisterButton}
                        onClick={(e) => handleRequestRegisterButton(e)}
                    >
                        登録する
                    </Button>
                </Box>

            </Container >


        )
    }