interface displayProps {
  children: string;
}

const Screen = ({ children }: displayProps) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default Screen;
