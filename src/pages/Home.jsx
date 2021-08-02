import { Typography } from "antd";

const { Title } = Typography;

export default function Home() {
  return (
    <Title level={3} style={{ textAlign: "center" }}>
      Here you can find any recipes! Just write orange, milk, coca-cola or any
      else and go to search.
    </Title>
  );
}
