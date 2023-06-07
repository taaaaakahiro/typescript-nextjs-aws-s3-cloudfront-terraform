import { NextPageContext } from 'next';
import Link from 'next/link';

interface StatusCode {
  statusCode: number;
}

const Error = ({ statusCode }: StatusCode) => {
  return (
    <div>エラー</div>
  );
};

Error.getInitialProps = async ({ res, err }: NextPageContext): Promise<StatusCode> => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;
  return { statusCode };
};

export default Error;