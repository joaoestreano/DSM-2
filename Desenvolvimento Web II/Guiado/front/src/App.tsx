import Form from "./contexts/Form";
import List from "./contexts/list";
import { ProviderCar } from "./contexts/CtxCar";

export default function App2() {
  return (
    <>
      <ProviderCar>
        <Form />
        <List />
      </ProviderCar>
    </>
  );
}
