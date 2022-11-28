
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { InputLabel, Typography, TextField, Box, Checkbox, FormControl, Stack, Paper, Select, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import '../style/user/user.css';

const validationSchema = yup.object({
  name: yup
    .string()
    .required("※この項目は必須項目です"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("※この項目は必須項目です"),
  telephone: yup
    .string().matches(/^[0-9]{10,11}$/i, 'Phone number is not valid')
    .required("※この項目は必須項目です"),
  policy: yup
    .boolean().oneOf([true], '※この項目は必須項目です')
});

const options = [10, 20, 30, 40]

function SignUp() {
  const [age, setAge] = React.useState(0);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telephone: "",
      postcode: "",
      address: "",
      policy: false,
    },
    validationSchema: validationSchema,
    onSubmit: () => {

    },
  });


  return (
    <>
      <form onSubmit={formik.handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh' }}>
        <Paper sx={{ width: 'fit-content', padding: '1%', maxWidth: '500px', minWidth:'400px' }}>
          <Stack spacing={3}>
            <TextField
              label="名前"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <FormControl>
              <FormLabel >性別</FormLabel>
              <RadioGroup
                defaultValue="male"
                row
              >
                <FormControlLabel value="male" control={<Radio defaultChecked />} label="男性" />
                <FormControlLabel value="female" control={<Radio />} label="女性" />
                <FormControlLabel value="other" control={<Radio />} label="指定しない" />
              </RadioGroup>
            </FormControl>
            <TextField
              label="メールアドレス"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              name="telephone"
              label="Telephone"
              value={formik.values.telephone}
              onChange={formik.handleChange}
              error={formik.touched.telephone && Boolean(formik.errors.telephone)}
              helperText={formik.touched.telephone && formik.errors.telephone}
            />
            <FormControl>
              <InputLabel>年齢</InputLabel>
              <Select
                label="年齢"
                value={age}
                onChange={(e: any) => setAge(e.target.value)}
              >
                {options.map((item: number, index) => {
                  return (
                    <MenuItem key={index} value={item}>{item}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
            <TextField
              label="郵便番号"
              id="postcode"
              name="postcode"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <TextField
              label="住所"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />

            <Box
              alignItems="center"
              display="flex"
              justifyContent="center"
              ml={-1}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body1"
              >
                プライバシーポリシーに同意する
              </Typography>
            </Box>
             
            <Box  className="display-flex justify-content-center">
            <button className='cart-btn'
              type="submit">保存する</button>
            </Box>
   
          </Stack>
        </Paper>
      </form>
    </>
  )
}

export default SignUp;