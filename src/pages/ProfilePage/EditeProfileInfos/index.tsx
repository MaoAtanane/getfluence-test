import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQuery } from "react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { getProfileCall, putProfileCall } from "../../../apiCalls/profile";
import { queryClient } from "../../../App";
import Button from "../../../commons/Button";
import TextField from "../../../commons/TextField";
import styles from "./editeProfileInfos.module.scss";
import Loader from "../../../commons/Loader";

type ProfileFormValues = {
  username: string;
  password?: string;
  confirmPassword?: string;
  email: string;
  city: string;
};

type EditeProfileInfosProps = {
  setIsEditingProfile: (value: boolean) => void;
};
const EditeProfileInfos: React.FC<EditeProfileInfosProps> = ({
  setIsEditingProfile,
}) => {
  const navigate = useNavigate();
  const profileData = useQuery("profileData", getProfileCall);
  const [hasApiError, setHasApiError] = React.useState<boolean>(false);

  const schema = yup
    .object({
      username: yup.string().required(),
      password: yup.string(),
      city: yup.string().required(),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "password must match"),
      email: yup.string().email().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: profileData.data?.data.username,
      email: profileData.data?.data.email,
      city: profileData.data?.data.city,
    },
  });
  const mutation = useMutation(putProfileCall, {
    onError: (error: AxiosError) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        setHasApiError(true);
      }
    },
    onSuccess: (data) => {
      setHasApiError(false);
      queryClient.setQueryData("profileData", () => data);
      setIsEditingProfile(false);
    },
  });
  const onSubmit = useCallback(
    (data: ProfileFormValues) => {
      const { username, password, email, city } = data;
      mutation.mutate({ username, password, email, city });
    },
    [mutation]
  );

  return (
    <div className={styles.container}>
      {mutation.isLoading && <Loader />}
      {hasApiError && (
        <p className={styles.errorText}>
          An error has occurred, please refresh the page and try again
        </p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.textFieldsContainer}
      >
        <div className={styles.textFieldsContainer}>
          <TextField
            label={"Username"}
            className={styles.field}
            register={register}
            name="username"
            error={errors.username?.message}
          />
          <hr />
          <TextField
            label={"Password"}
            type={"password"}
            className={styles.field}
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <TextField
            label={"Confirm Password"}
            type={"password"}
            className={styles.field}
            register={register}
            name="confirmPassword"
            error={errors.confirmPassword?.message}
          />
          <hr />
          <TextField
            label={"Email"}
            type={"email"}
            className={styles.field}
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <TextField
            label={"City"}
            type={"city"}
            className={styles.field}
            register={register}
            name="city"
            error={errors.city?.message}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button className={styles.button} variant={"outlined"} type="submit">
            Submit
          </Button>
          <Button
            className={styles.button}
            variant={"outlined"}
            color={"secondary"}
            type="button"
            onClick={() => setIsEditingProfile(false)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditeProfileInfos;
