import styled from "@emotion/styled";
import { FC, useContext } from "react";
import MyContext from "../../hooks/useTheme";
import { colors } from "../../styles/colors";
import ButtonDelete from "../Buttons/ButtonDelete";

const FormUser = styled.form`
  /* width: 205px; */
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
  height: 40px;
  background: ${({ theme }: { theme: string }) =>
    theme === "light" ? "white" : colors.blackRaisin};
  border-radius: 5px;
  border: none;
  margin: 10px 0;
  outline-offset: -2px;

  outline: 1px solid
    ${({ theme }: { theme: string }) =>
      theme === "light" ? colors.blackRaisin : "white"};
`;
const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 45px;

  background: #38b3e8;
  border-radius: 5px;
  border: none;
  width: 100%;
  margin: 15px 0;
  color: white;
  &:hover {
    background-color: transparent;
    outline: 1px solid #38b3e8;
    outline-offset: -2px;
    color: #38b3e8;
  }
`;

const TitleForm = styled.h1`
  color: ${colors.blue};
`;
interface IProps {
  title: string;
  handleSubmit: (event: { preventDefault: () => void }) => void;
  handleChange: (event: {
    target: {
      name: string;
      value: string;
    };
  }) => void;
  user: {
    username: string;
    password: string;
  };
}

const FormLogin: FC<IProps> = (props) => {
  const { theme } = useContext(MyContext);

  return (
    <>
      <TitleForm>{props.title}</TitleForm>
      <FormUser onSubmit={props.handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Input
            theme={theme}
            placeholder="Username"
            onChange={props.handleChange}
            type="text"
            name="username"
            value={props.user.username}
          />
          {props.user.username && (
            <ButtonDelete
              position="absolute"
              CustomFuction={() =>
                props.handleChange({ target: { name: "username", value: "" } })
              }
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Input
            theme={theme}
            placeholder="Password"
            onChange={props.handleChange}
            type="password"
            name="password"
            value={props.user.password}
          />
          {props.user.password && (
            <ButtonDelete
              position="absolute"
              CustomFuction={() =>
                props.handleChange({ target: { name: "password", value: "" } })
              }
            />
          )}
        </div>

        <ButtonSubmit type="submit">
          <b>{props.title}</b>
        </ButtonSubmit>
      </FormUser>
    </>
  );
};

export default FormLogin;
