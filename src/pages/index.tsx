import type { NextPage } from "next";
import { NextRouter, withRouter } from "next/router";
import { Button } from "../../components/action/button";

interface Props {
  router: NextRouter;
}

const Home: NextPage<Props> = ({ router }) => {
  return (
    <>
      <Button variant="primary" onClick={() => router.push("/snow")}>
        Go to /Snow
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </>
  );
};

export default withRouter(Home);
