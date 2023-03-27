import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Button } from "../../components/action/button";

const SnowPage: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Button variant="primary">Snow Primary</Button>
      <Button variant="secondary">Snow Secondary</Button>
      <Button variant="success">Snow Success</Button>
      <Button variant="danger">Snow Danger</Button>
      <Button variant="warning" onClick={() => router.push("/")}>
        Go to /
      </Button>
      <Button variant="primary" disabled>
        Snow Disabled
      </Button>
    </>
  );
};

export default SnowPage;
