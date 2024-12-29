import { Helmet } from "react-helmet-async";

interface TitleType {
  title: string;
}

const Title = ({ title }: TitleType) => {
  return (
    <Helmet>
      <title>{title} | JusticeBridge</title>
    </Helmet>
  );
};

export default Title;
