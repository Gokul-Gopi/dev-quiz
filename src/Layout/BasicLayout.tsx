import { Navbar } from "../components/Navbar/Navbar";

interface IBasicLayout {
  children: JSX.Element;
}

export const BasicLayout = ({ children }: IBasicLayout) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
