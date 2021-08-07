import {
  Card,
  CardActions,
  CardContent,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Helmet } from "react-helmet";
import "twin.macro";
import { css } from "@emotion/react";

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Helmet>
        <title>Yayasan Al Amanah - Login</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      <section>
        <div tw="container m-20">
          <Card
            tw="max-w-xl p-4"
            css={css`
              margin: 0 auto;
              width: 100%;
            `}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent>
                <FormControl fullWidth={true}>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input
                    {...register("username", { required: true })}
                    id="username"
                    aria-describedby="username"
                  />
                  {errors.username && <span tw="text-red-500 text-sm">{errors.username.message}</span>}
                </FormControl>
                <br />
                <FormControl fullWidth={true}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    {...register("password", { required: true })}
                    type="password"
                    id="password"
                    aria-describedby="password"
                  />
                  {errors.password && <span tw="text-red-500 text-sm">{errors.password.message}</span>}
                </FormControl>
              </CardContent>
              <CardActions tw="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Login
                </Button>
              </CardActions>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Login;
